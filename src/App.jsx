import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/App.scss"

const App = () =>{
    return (
        <React.Fragment>
            <Header />
            <main>
                <Intro/>
                <Projects/>
                <Skills/>
                <About/>
            </main>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default App