import React from "react";
import ProjectCarousel from "../components/ProjectCarousel";
import "./Projects.scss";

const Projects = () => {
    const projects = [
        {
            title: "First Project",
            description: "The first project I ever made.",
            imgUrl: "https://preview.redd.it/ixdqijevlqi51.jpg?auto=webp&s=86b869898a4bf0a1d95bf17b486a90b4243fde6c",
        },
        {
            title: "First Project",
            description: "The first project I ever made.",
            imgUrl: "https://preview.redd.it/ixdqijevlqi51.jpg?auto=webp&s=86b869898a4bf0a1d95bf17b486a90b4243fde6c",
        },
        {
            title: "First Project",
            description: "The first project I ever made.",
            imgUrl: "https://preview.redd.it/ixdqijevlqi51.jpg?auto=webp&s=86b869898a4bf0a1d95bf17b486a90b4243fde6c",
        },
        {
            title: "First Project",
            description: "The first project I ever made.",
            imgUrl: "https://preview.redd.it/ixdqijevlqi51.jpg?auto=webp&s=86b869898a4bf0a1d95bf17b486a90b4243fde6c",
        },
        {
            title: "First Project",
            description: "The first project I ever made.",
            imgUrl: "https://preview.redd.it/ixdqijevlqi51.jpg?auto=webp&s=86b869898a4bf0a1d95bf17b486a90b4243fde6c",
        },
    ];

    return (
        <section>
            <h1>Projects</h1>
            <ProjectCarousel projects={projects} />
        </section>
    );
};
export default Projects;
