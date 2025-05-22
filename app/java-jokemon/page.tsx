import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {GameState, Building} from "@/app/java-jokemon/CodeSnippets";
import Image from "next/image";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Jokemon</h1>
                    <RepositoryButton link="jokemon-project"/>
                </div>
                <p>
                    The Jokemon Project is essentially a simplified copy of the game Pokémon. I received a base project
                    from my teacher. This base project included a foundation for attacks and a foundation for Jokemons.
                    I significantly expanded upon this foundation. This game is entiretly played in the console, if you
                    decide to play it by downloading it from the GitHub repository, please make sure to pick UTF-8
                    Encoding when choosing your console.
                </p>
                <h2>2D Environment</h2>
                <p>
                    I added a two-dimensional environment. In this environment, players can move around freely, but
                    there are several obstacles such as trees or rivers which must be navigated around. There are
                    several different regions in the environment and other objects with which the player can interact.
                </p>
                <h2>Interactable Objects</h2>
                <p>
                    There are enemy NPCs, wild Jokemons, and buildings. Enemy NPCs can be challenged to a battle. In
                    these battles, players fight against the NPC’s Jokemons, and if they win, their own Jokemons level
                    up. Wild Jokemons are scattered across the environment and can be captured and added to the player's
                    team. There are three types of buildings: the Medical Center, where players can revive their
                    Jokemons after battles; the Shop, where players can buy treats for their Jokemons; and standard
                    buildings, which can be entered but do not contain much functionality.
                </p>
                <h2>Map Selection</h2>
                <p>
                    At the beginning of the game, players can choose from five different maps. These maps are then
                    automatically loaded. The first three maps are 25 by 25 tiles in size and are highly detailed. The
                    last two maps are larger, with 50 by 50 tiles. On all maps, players can move freely and interact
                    with objects.
                </p>
                <h2>Jokemon Evolution</h2>
                <p>
                    As the game progresses, players level up their Jokemons by battling. When a Jokemon reaches a high
                    enough level, it can evolve, just like in the original Pokémon games. Evolving a Jokemon grants it
                    new attacks and generally makes it stronger and more durable.
                </p>
                <h2>Saving Game Progress</h2>
                <p>
                    I developed a system that allows players to save their game progress. This save system enables
                    players to load their game after restarting the application and selecting the same map, allowing
                    them to continue right where they left off.
                </p>
                <div className="result">
                    <h2>GameState Class</h2>
                    <div>
                        <p>
                            Here is a snippet from my GameState class. This class stores the current game state and
                            creates an object that is then processed by my SaveSystem to either save or load the game
                            state:
                        </p>
                        <Code language="java" children={GameState}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Building Class</h2>
                    <div>
                        <p>
                            The Building class is an abstract class. It allows me to centralize the basic logic of a
                            building while creating more specialized subclasses for the different building types through
                            class inheritance.
                        </p>
                        <Code language="java" children={Building}/>
                    </div>
                </div>
                <div className="result">
                    <h2>50 x 50 2D Map</h2>
                    <div>
                        <p>
                            Here I’ve included a screenshot from Map 4. Using ANSI codes and Unicode characters, I was able to design a visually appealing map. In the center, you can see the player, marked by a pink arrow. The map features enemies (Red N), wild Jokemons (Turquoise J), rivers and lakes (Blue Rectangle), impassable trees (Green T), bridges (Pink Rectangle), and various distinguishable buildings identified by the letter in the middle.
                        </p>
                        <Image
                            src="/java-jokemon/fullmap.png"
                            alt="Full Map Demonstration"
                            width={1000}
                            height={2000}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}