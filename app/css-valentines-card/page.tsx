import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Valentine's Card</h1>
                    <RepositoryButton link="a-suprise-for-you"/>
                </div>
            </main>

            <Footer/>
        </>
    );
}