'use client'

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RepositoryButton from "@/app/components/RepositoryButton";
import Code from "@/app/components/Code";
import {lib, resource_monitor} from "@/app/tauri-resource-monitor/CodeSnippets";
import {useState, useEffect} from "react";
import DownloadButton from "@/app/components/DownloadButton";

export default function () {
    const [lineGraph, setLineGraph] = useState<string>("");

    useEffect(() => {
        fetch("/portfolio/tauri-resource-monitor/LineGraph.txt")
            .then((res) => res.text())
            .then((text) => setLineGraph(text));
    })

    return (
        <>
            <Header/>

            <main>
                <div className="result-header">
                    <h1>Resource Monitor</h1>
                    <RepositoryButton link="resource-monitor"/>
                </div>
                <p>
                    In this project, I gained more experience using the modern Tauri framework. I built a resource
                    monitoring app that tracks CPU, GPU, and RAM usage. It also displays general system information. The
                    app is modern, lightweight, and performant, leveraging Rust and Tauri, both known for their high
                    performance and small bundle sizes.
                </p>
                <div className="result">
                    <h2>ResourceMonitor Rust Struct</h2>
                    <div>
                        <p>
                            This is a snippet of my ResourceMonitor Struct written in Rust. This struct helps me gather
                            all data from the different monitors with a function to return all data at once and
                            functions to only get certain data from each monitor.
                        </p>
                        <Code language="Rust" children={resource_monitor}/>
                    </div>
                </div>
                <div className="result">
                    <h2>lib.rs</h2>
                    <div>
                        <p>
                            The lib.rs file is the connection point between the NextJS frontend and Rust backend. This
                            file exposes commands to the frontend which fetch the data gathered by the ResourceMonitor.
                        </p>
                        <Code language="Rust" children={lib}/>
                    </div>
                </div>
                <div className="result">
                    <h2>LineGraph Component</h2>
                    <div>
                        <p>
                            This component generates a line graph on the fly to represent some historical data about the
                            usages from each monitor. This line graph is an SVG image which get displayed below the
                            other component data.
                        </p>
                        <Code language="typescript" children={lineGraph}/>
                    </div>
                </div>
                <div className="result-header">
                    <h1>Try it out yourself!</h1>
                    <DownloadButton link="resource-monitor/releases/tag/v0.1.0"/>
                </div>
                <p className="mt-2">
                    If you want to try this app out for yourself, click on the download button and install the app using the MSI or EXE installer from GitHub.
                </p>
            </main>

            <Footer/>
        </>
    );
}