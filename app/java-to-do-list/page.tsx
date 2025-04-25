import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>To Do List</h1>
                    <RepositoryButton link="To-Do-List-Application"/>
                </div>
            </main>

            <Footer/>
        </>
    );
}