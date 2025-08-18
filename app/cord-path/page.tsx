import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {kernel, nearest_neighbor, two_opt} from "@/app/cord-path/CodeSnippets";
import DownloadButton from "@/app/components/DownloadButton";

export default function cordPath() {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Cord Path</h1>
                    <RepositoryButton link="cord-path"/>
                </div>
                <p>
                    Cord Path is a CLI tool that finds the optimal travel path through a set of 2D points. Cord Path
                    uses NVIDIA CUDA to accelerate the calculations required for path finding. When given a list of
                    points and an optional starting position, the tool returns an optimized order for the points with
                    the shortest total distance.
                </p>
                <div className="result">
                    <h2>CUDA Kernel</h2>
                    <div>
                        <p>
                            This CUDA kernel sets up the GPU to compute a full pairwise distance matrix between a set of
                            2D coordinates using GPU parallelism. Each thread calculates the Euclidean distance between
                            a pair of points, filling the matrix efficiently in parallel. The host function manages
                            memory transfers between CPU and GPU, launches the kernel and retrieves the results,
                            allowing for large distance matrices to be computed much faster than with a CPU-only
                            implementation.
                        </p>
                        <Code language="C++" children={kernel}/>
                    </div>
                </div>
                <div className="result">
                    <h2>nearest_neighbor_tsp Function</h2>
                    <div>
                        <p>
                            This function implements the Nearest Neighbor heuristic for the Traveling Salesman Problem
                            (TSP). Starting from a chosen coordinate, it repeatedly selects the closest unvisited
                            coordinate and adds it to the path until all coordinates have been visited. While it does
                            not guarantee the optimal route, it provides a fast and intuitive baseline solution that can
                            be further optimized.
                        </p>
                        <Code language="Rust" children={nearest_neighbor}/>
                    </div>
                </div>
                <div className="result">
                    <h2>two_opt Function</h2>
                    <div>
                        <p>
                            This function applies the 2-opt local search algorithm to improve an existing TSP tour. It
                            iteratively checks pairs of coordinates in the path and, if swapping them reduces the
                            overall
                            distance, reverses the segment between them. The process continues until no further
                            improvements
                            are possible, producing a shorter and more efficient tour compared to the initial heuristic.
                        </p>
                        <Code language="Rust" children={two_opt}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Try it out yourself!</h1>
                    <DownloadButton link="cord-path/releases/latest"/>
                </div>
                <p className="mt-2">
                    If you want to try this app out for yourself, click on the download button and download the .rar or .zip file.
                    If you want to add this package to your own project, you can do that by running this command:
                    <Code language="Bash">
                        cargo add cord-path
                    </Code>
                </p>
            </main>

            <Footer/>
        </>
    );
}