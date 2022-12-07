import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Background from "./components/Background";
import Intro from "./pages/Intro";
import Nav from "./pages/Nav";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./styles/App.scss";

const App = () => {
    return (
        <div>
            <Background layers={10} />
            <main>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/nav" element={<Nav />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
