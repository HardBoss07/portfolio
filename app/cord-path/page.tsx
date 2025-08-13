import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

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
            </main>

            <Footer/>
        </>
    );
}