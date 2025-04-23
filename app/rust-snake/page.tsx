import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SnakeVideo from "@/app/rust-snake/SnakeVideo";
import Code from "@/app/components/Code";
import {snakeStruct, snakeRun, snakeGame} from "@/app/components/CodeSnippets";

export default function RustSnake() {
    return (
        <>
            <Header/>

            <main>
                <h1>Snake</h1>
                <p>
                    I created this project in order to learn the modern programming language Rust. For this, I recreated
                    the iconic game Snake. I was able to make myself familiar with the principles of Rust and its
                    syntax. I use a minimal graphics library to get a graphics interface, instead of just a console
                    application.
                </p>
                <div className="result">
                    <h2>Game Struct</h2>
                    <div>
                        <p>
                            Hier habe ich ein Game Struct mit einer new() Funktion erstellt. Dieses Struct ist das
                            primäre Objekt wo die gesamte Logik des Spiels beinhaltet. Mit der new() Funktion kann man
                            ein neues Spiel-Fenster starten, wird jedoch nur bei der erstmaligen Initialisierung
                            verwendet:
                        </p>
                        <Code language="rust" children={snakeGame}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Game::run() Function</h2>
                    <div>
                        <p>
                            Hier ist die Funktion run(). Diese Funktion kümmert sich um den gesamten Spielverlauf. Zunächst überprüft die Funktion ob der Spieler die Leertaste drückt währen das Spiel noch nicht gestartet hat. Wenn dies passiert wird das Spiel initialisiert und geht nun zum nächsten If-Statement weiter. In diesem If-Statement wird zunächst mal die Eingaben vom Spieler ausgewertet, danach die nächste Position berechnet, danach wird überprüft ob man einen Cookie eingesammelt hat zum Wachsen, und zu Ende wird der Buffer geupdated um die nächste Position darzustellen. Wenn man das Spiel verliert indem man in eine Wand oder in sich selber hineingeht wird eine neue Snake mit Snake::new() erstellt. Man kann das Spiel jederzeit mit der Escape Taste beenden:
                        </p>
                        <Code language="rust" children={snakeRun}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Snake Struct</h2>
                    <div>
                        <p>
                            Hier habe ich ein komplexen Datentyp, ein Struct, erstellt, der die Daten bezüglich der Snake speichert. Dazu habe ich eine Funktion new() erstellt, die man aufrufen kann, um eine neue Snake zu erstellen, ähnlich wie ein Constructor in einem Java-Programm:
                        </p>
                        <Code language="rust" children={snakeStruct}/>
                    </div>
                </div>
                <h2>Video Demonstration</h2>
                <SnakeVideo/>
            </main>

            <Footer/>
        </>
    );
}