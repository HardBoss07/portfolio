import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SnakeVideo from "@/app/rust-snake/SnakeVideo";
import Code from "@/app/components/Code";
import {snakeStruct, snakeRun, snakeGame} from "@/app/rust-snake/CodeSnippets";
import RepositoryButton from "@/app/components/RepositoryButton";
import DownloadButton from "@/app/components/DownloadButton";

export default function RustSnake() {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Snake</h1>
                    <RepositoryButton link="rust-snake"/>
                </div>
                <p>
                    I created this project in order to learn the modern programming language Rust. For this, I recreated the iconic game Snake. I was able to make myself familiar with the principles of Rust and its syntax. I use a minimal graphics library to get a graphics interface, instead of just a console application.
                </p>
                <div className="result">
                    <h2>Game Struct</h2>
                    <div>
                        <p>
                            Here I created a Game struct with a new() function. This struct is the primary object that contains all the game logic. The new() function can be used to start a new game window, but it is only used during the initial setup.
                        </p>
                        <Code language="rust" children={snakeGame}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Game::run() Function</h2>
                    <div>
                        <p>
                            This is the run() function. This function handles the entire game loop. First, it checks whether the player is pressing the spacebar while the game hasn’t started yet. If this happens, the game is initialized and proceeds to the next if statement. In this next block, the player’s input is processed, then the next position is calculated, then it checks whether a cookie has been collected (to grow the snake), and finally, the buffer is updated to render the next position. If the player loses by running into a wall or into themselves, a new snake is created using Snake::new(). You can exit the game at any time using the Escape key.
                        </p>
                        <Code language="rust" children={snakeRun}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Snake Struct</h2>
                    <div>
                        <p>
                            Here I created a complex data type, a struct, that stores the data related to the snake. I also created a new() function that can be called to create a new snake, similar to a constructor in a Java program.
                        </p>
                        <Code language="rust" children={snakeStruct}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Try it out yourself!</h1>
                    <DownloadButton link="rust-snake/blob/master/rust-snake.rar"/>
                </div>
                <p className="mt-2">
                    If you want to try this app out for yourself, click on the download button and install rust-snake.rar from GitHub, extract the .rar file and run the rust-snake executable.
                </p>
                <h1>Video Demonstration</h1>
                <SnakeVideo/>
            </main>

            <Footer/>
        </>
    );
}