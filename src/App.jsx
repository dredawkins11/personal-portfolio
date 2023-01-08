import React from "react";
import { Route, Routes } from "react-router-dom";

import Background from "./components/Background";
import Intro from "./pages/Intro";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
