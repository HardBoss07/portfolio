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