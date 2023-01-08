import React, { useState } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import Project from "./Project";
import "./ProjectCarousel.scss";

const ProjectCarousel = (props) => {
    const [active, setActive] = useState(2);

    const MAX_VISIBILITY = 1;

    const handleMoveCarousel = (direction) => {
        if (direction === "right")
            setActive((currentActive) => currentActive + 1);
        if (direction === "left")
            setActive((currentActive) => currentActive - 1);
        console.log(`Moving ${direction}...`);
    };

    return (
        <div className="carousel">
            {active > 0 && (
                <button className="carousel-button left" onClick={handleMoveCarousel.bind(this, "left")}>
                    <VscTriangleLeft />
                </button>
            )}
            {props.projects.map((project, i) => {
                return (
                    <Project
                        key={i}
                        project={project}
                        index={i}
                        styles={{
                            "--active": i === active ? 1 : 0,
                            "--offset": (active - i) / 3,
                            "--direction": Math.sign(active - i),
                            "--abs-offset": Math.abs(active - i) / 3,
                            "pointer-events": active === i ? "auto" : "none",
                            opacity:
                                Math.abs(active - i) >= MAX_VISIBILITY
                                    ? "0"
                                    : "1",
                            display:
                                Math.abs(active - i) > MAX_VISIBILITY
                                    ? "none"
                                    : "block",
                        }}
                    />
                );
            })}
            {active < props.projects.length - 1 && (
                <button className="carousel-button right" onClick={handleMoveCarousel.bind(this, "right")}>
                    <VscTriangleRight />
                </button>
            )}
        </div>
    );
};
export default ProjectCarousel;
