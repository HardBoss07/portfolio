import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Tic Tac Toe</h1>
                    <RepositoryButton link="assembly-tic-tac-toe"/>
                </div>
            </main>

            <Footer/>
        </>
    );
}