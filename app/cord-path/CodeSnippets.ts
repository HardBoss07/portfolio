export const nearest_neighbor: string = `
fn nearest_neighbor_tsp(dist_matrix: &[f32], n: usize, start: usize) -> Vec<usize> {
    let mut visited = vec![false; n];
    let mut path = Vec::with_capacity(n);
    let mut current = start;

    path.push(current);
    visited[current] = true;

    for _ in 1..n {
        let mut next = None;
        let mut min_dist = f32::MAX;

        for candidate in 0..n {
            if !visited[candidate] && dist_matrix[current * n + candidate] < min_dist {
                min_dist = dist_matrix[current * n + candidate];
                next = Some(candidate);
            }
        }

        if let Some(next_node) = next {
            path.push(next_node);
            visited[next_node] = true;
            current = next_node;
        } else {
            break;
        }
    }

    path
}
`;

export const two_opt: string = `
// 2-opt local optimization
fn two_opt(dist_matrix: &[f32], n: usize, path: &mut Vec<usize>) {
    let mut improved = true;

    while improved {
        improved = false;
        for i in 1..(n - 1) {
            for j in (i + 1)..n {
                let a = path[i - 1];
                let b = path[i];
                let c = path[j - 1];
                let d = path[j];

                let old_dist = dist_matrix[a * n + b] + dist_matrix[c * n + d];
                let new_dist = dist_matrix[a * n + c] + dist_matrix[b * n + d];

                if new_dist < old_dist {
                    path[i..j].reverse();
                    improved = true;
                }
            }
        }
    }
}`;

export const kernel: string = `
#include <cuda_runtime.h>
#include <math.h>
#include <stdio.h>

#define CHECK_CUDA_ERROR(val) check((val), #val, __FILE__, __LINE__)
void check(cudaError_t err, const char* func, const char* file, int line) {
    if (err != cudaSuccess) {
        fprintf(stderr, "CUDA Error at %s:%d: %s failed with error %s\\n", file, line, func, cudaGetErrorString(err));
        exit(1);
    }
}

// Kernel computes dist(i,j) = sqrt((x_i - x_j)^2 + (y_i - y_j)^2)
__global__ void compute_distance_matrix_kernel(const int* xs, const int* ys, float* dist_matrix, int n) {
    int i = blockIdx.y * blockDim.y + threadIdx.y; // row
    int j = blockIdx.x * blockDim.x + threadIdx.x; // col

    if (i < n && j < n) {
        int dx = xs[i] - xs[j];
        int dy = ys[i] - ys[j];
        dist_matrix[i * n + j] = sqrtf(float(dx * dx + dy * dy));
    }
}

extern "C" void compute_distance_matrix(const int* h_xs, const int* h_ys, float* h_dist_matrix, int n) {
    int* d_xs = nullptr;
    int* d_ys = nullptr;
    float* d_dist_matrix = nullptr;

    size_t int_size = n * sizeof(int);
    size_t matrix_size = n * n * sizeof(float);

    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_xs, int_size));
    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_ys, int_size));
    CHECK_CUDA_ERROR(cudaMalloc((void**)&d_dist_matrix, matrix_size));

    CHECK_CUDA_ERROR(cudaMemcpy(d_xs, h_xs, int_size, cudaMemcpyHostToDevice));
    CHECK_CUDA_ERROR(cudaMemcpy(d_ys, h_ys, int_size, cudaMemcpyHostToDevice));

    dim3 threadsPerBlock(16, 16);
    dim3 blocks((n + threadsPerBlock.x - 1) / threadsPerBlock.x,
                (n + threadsPerBlock.y - 1) / threadsPerBlock.y);

    compute_distance_matrix_kernel<<<blocks, threadsPerBlock>>>(d_xs, d_ys, d_dist_matrix, n);
    CHECK_CUDA_ERROR(cudaDeviceSynchronize());

    CHECK_CUDA_ERROR(cudaMemcpy(h_dist_matrix, d_dist_matrix, matrix_size, cudaMemcpyDeviceToHost));

    cudaFree(d_xs);
    cudaFree(d_ys);
    cudaFree(d_dist_matrix);
}
`;