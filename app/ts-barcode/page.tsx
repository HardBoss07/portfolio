import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {barcode, camera} from "@/app/ts-barcode/CodeSnippets";
import LiveDemoButton from "@/app/components/LiveDemoButton";
import BarcodeVideo from "@/app/ts-barcode/BarcodeVideo";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>1D & 2D Barcodes</h1>
                    <RepositoryButton link="barcode-reader"/>
                </div>
                <p>
                    I created this project in order to gain more experience with the NextJS framework. With this web app you can generate different types of 1 and 2 dimensional barcodes, such as QR Codes, EAN-13 Codes, Code 128 codes or Data Matrix. This web app also allows you to to scan your previously generated codes and other codes. For the styling of the web app I chose the Tailwind CSS library for inline styling and in general shortened styling.
                </p>
                <div className="result">
                    <h2>Barcode Component</h2>
                    <div>
                        <p>
                            This React component takes in props and based off of these props it generates a barcode. With the prop chosenOption you can define what type of code you want. The prop value defines the content of the barcode. To generate the barcodes I used the bwipjs library. At the end, this component returns either the successfully rendered barcode or an error message.
                        </p>
                        <Code language="typescript" children={barcode}/>
                    </div>
                </div>
                <div className="result">
                    <h2>getCameraStream()</h2>
                    <div>
                        <p>
                            This function is part of my Camera component. It creates a visual input field for the camera, captures the content of the video feed and then decodes the barcode. For the decoding of the barcode I use the popular @zxing multi code reader library. If the camera decodes successfully, it sets the value of the barcode, if not, it will return a detailed error message which also shows what kind of error.
                        </p>
                        <Code language="typescript" children={camera}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Live Demonstration</h1>
                    <LiveDemoButton link="barcode-reader"/>
                </div>
                <p className="mt-2">
                    You can try the web app yourself by clicking on the button. You will need to allow camera access on the reader. From personal experience I noticed the web app does not always work on Android devices.
                </p>
                <h1>Video Demonstration</h1>
                <BarcodeVideo/>
            </main>

            <Footer/>
        </>
    );
}