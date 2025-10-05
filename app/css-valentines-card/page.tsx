import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {animations, heart} from "@/app/css-valentines-card/CodeSnippets";
import LiveDemoButton from "@/app/components/LiveDemoButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Valentine's Card</h1>
                    <RepositoryButton link="a-suprise-for-you"/>
                </div>
                <p>
                    I created this project to ask a person I'm interested in for a Valentine's Day date. However, it
                    also helped me a lot to expand my CSS knowledge, especially in the area of CSS animations.
                </p>
                <div className="result">
                    <h2>Heart in CSS</h2>
                    <div>
                        <p>
                            This here is a CSS class which creates a heart shape using only CSS. For this effect I use
                            the pseudo classes :before and :after which then are applied to a empty HTML div in order to
                            be rendered on the website.
                        </p>
                        <Code language="css" children={heart}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Animations in CSS</h2>
                    <div>
                        <p>
                            Here I have created two simple animations in CSS. One animation is needed to shoot an arrow
                            through the heart and the other animation is used to finally scale the heart and show a
                            small letter.
                        </p>
                        <Code language="css" children={animations}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Live Demonstration</h1>
                    <LiveDemoButton link="valentines"/>
                </div>
                <p className="mt-2">
                    Here you can view the Valentine's card. In order to start the animation, you have to click on the
                    heart.
                </p>
            </main>

            <Footer/>
        </>
    );
}