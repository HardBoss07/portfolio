import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import CalculatorVideo from "@/app/java-calculator/CalculatorVideo";
import Code from "@/app/components/Code";
import {hello, calculator} from "@/app/java-calculator/CodeSnippets";
import DownloadButton from "@/app/components/DownloadButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Calculator</h1>
                    <RepositoryButton link="Simple-Java-Calculator"/>
                </div>
                <p>
                    In this project I worked on desktop application development. I used the JavaFX framework in combination with classic Java 23. I had no previous experience with desktop development in Java. This project also helped me a lot in developing my CSS skills.
                </p>
                <div className="result">
                    <h2>HelloApplication Java Class</h2>
                    <div>
                        <p>
                            Here is an snippet of my HelloApplication class. This class defines the basic elements and layout of the calculator. The rest of the class is available on the GitHub repository.
                        </p>
                        <Code language="java" children={hello}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Calculator Java Class</h2>
                    <div>
                        <p>
                            Here is an excerpt from my Calculator class. This class handles all the logic related to the calculations. The rest of the class is available on the GitHub repository.
                        </p>
                        <Code language="java" children={calculator}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Try it out yourself!</h1>
                    <DownloadButton link="Simple-Java-Calculator/blob/master/out/artifacts/Calculator_jar/Calculator%20v02.jar"/>
                </div>
                <p className="mt-2">
                    If you want to try this app out for yourself, click on the download button and install Calculator v02.jar from GitHub. In order for this app to work, you will need to have Java 23 or newer installed.
                </p>
                <h1>Video Demonstration</h1>
                <CalculatorVideo/>
            </main>

            <Footer/>
        </>
    );
}