import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./styles/App.scss"

const App = () =>{
    return (
        <React.Fragment>
            <Header />
            <main>
                <Intro/>
                <Projects/>
                {/* <Skills /> */}
                {/* <About /> */}
            </main>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default App