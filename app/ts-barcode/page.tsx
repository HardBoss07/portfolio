import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Barcode Reader and Generator</h1>
                    <RepositoryButton link="barcode-reader"/>
                </div>
            </main>

            <Footer/>
        </>
    );
}