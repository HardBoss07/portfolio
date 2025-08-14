import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {nearest_neighbor} from "@/app/cord-path/CodeSnippets";

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
            </main>

            <Footer/>
        </>
    );
}