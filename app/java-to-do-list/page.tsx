import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import ToDoListVideo from "@/app/java-to-do-list/ToDoListVideo";
import {hello, save, json, toDoList} from "@/app/java-to-do-list/CodeSnippets";
import Code from "@/app/components/Code";
import DownloadButton from "@/app/components/DownloadButton";

export default function () {
    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>To Do List</h1>
                    <RepositoryButton link="To-Do-List-Application"/>
                </div>
                <p>
                    In this project I continued to work on desktop application development. I also worked on the life cycle from start to end to start by storing data in a .JSON file. I have been heavily involved with the JavaFX framework so that I understand the elements better and can handle them better. I also wrote my own bucket sort algorithm that sorts my tasks according to different criteria.
                </p>
                <div className="result">
                    <h2>HelloApplication Java Class</h2>
                    <div>
                        <p>
                            Here is an excerpt from my HelloApplication class. This class defines the basic elements and layout of the To-Do-List application, controls the different windows of the app and processes the user inputs. The rest of the class is available on the GitHub repository.
                        </p>
                        <Code language="java" children={hello}/>
                    </div>
                </div>
                <div className="result">
                    <h2>SaveSystem Java Class</h2>
                    <div>
                        <p>
                            Here is an excerpt from my SaveSystem class. This class takes care of saving and loading information about the .JSON file. I use a function for saving information and a separate function for loading the information. The rest of the class is available on the GitHub repository.
                        </p>
                        <Code language="java" children={save}/>
                    </div>
                </div>
                <div className="result">
                    <h2>ToDoList Java Class</h2>
                    <div>
                        <p>
                            Here is a snippet of my ToDoList class. This class allows me to create and manage objects for individual to-do lists.
                        </p>
                        <Code language="java" children={toDoList}/>
                    </div>
                </div>
                <div className="result">
                    <h2>Example .JSON File</h2>
                    <div>
                        <p>
                            Here is an example .JSON file that is saved locally after saving. I opted for a .JSON file because I like the reader-friendliness and the good Java integration.
                        </p>
                        <Code language="json" children={json}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Try it out yourself!</h1>
                    <DownloadButton link="To-Do-List-Application/blob/master/out/artifacts/To_Do_List_jar/To-Do-List.jar"/>
                </div>
                <p className="mt-2">
                    If you want to try this app out for yourself, click on the download button and install To-Do-List.jar from GitHub. In order for this app to work, you will need to have Java 23 or newer installed.
                </p>
                <h1>Video Demonstration</h1>
                <ToDoListVideo/>
            </main>

            <Footer/>
        </>
    );
}