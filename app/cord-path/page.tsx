import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

export default function cordPath() {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>cord-path</h1>
                    <RepositoryButton link="cord-path"/>
                </div>
            </main>

            <Footer/>
        </>
    );
}