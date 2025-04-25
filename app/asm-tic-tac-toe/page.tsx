import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import {init, rules, invalids} from "@/app/asm-tic-tac-toe/CodeSnippets";
import Code from "@/app/components/Code";
import TicTacToeVideo from "@/app/asm-tic-tac-toe/TicTacToeVideo";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Tic Tac Toe</h1>
                    <RepositoryButton link="assembly-tic-tac-toe"/>
                </div>
                <p>
                    To improve my assembly skills, I have set myself the goal of writing Tic Tac Toe in assembly. I use the emu8086 emulator to test my assembly code. This project helped me a lot to learn more about the internal structure of a CPU. I learned how to use methods and loops in assembly, how to better handle user inputs and error handling in assembly. With this project I also learned how the 32 bit addresses inside a program look like and how to assign values to them.
                </p>
                <div className="result">
                    <h2>Game initialisation</h2>
                    <p>Here is the INIT method. This method initialises and declares all needed variables, in order to start the game without encountering any errors.</p>
                    <Code language="x86asm" children={init}/>
                </div>
                <div className="result">
                    <h2>Checking Rules</h2>
                    <p>This is a section of my CHECK method. This method goes over all possible combinations and checks if a Tic Tac Toe has come along somewhere. If that happens it assigns the winner. This method runs after every turn of both players.</p>
                    <Code language="x86asm" children={rules}/>
                </div>
                <div className="result">
                    <h2>Handling invalid Inputs</h2>
                    <p>This here is my TAKEN method. This method makes sure that no invalid inputs are made. If an invalid input is made, it overwrites the last input with an empty line</p>
                    <Code language="x86asm" children={invalids}/>
                </div>
                <h1>Video Demonstration</h1>
                <TicTacToeVideo/>
            </main>

            <Footer/>
        </>
    );
}