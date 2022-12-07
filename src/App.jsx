import React from "react";
import About from "./components/About";
import Background from "./components/Background";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./styles/App.scss"

const App = () =>{
    return (
        <React.Fragment>
            <Background layers={10} />
            <main>
                <Intro />
            </main>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default App