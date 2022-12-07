import React from "react";
import "../styles/Background.scss";

const Background = (props) => {
    const layerStyle = [];
    for (let i = 0; i < props.layers; i++) {
        layerStyle.push({
            width: (i ? 100 -  (i * 5) + "vw" : "95vw"),
            height: (i ? 100 - (i * 5) + "vh" : "95vh"),
        });
    }

    return (
        <div className="base-background">
            {layerStyle.map((style, i) => {
                return <div style={style} key={i}></div>;
            })}
        </div>
    );
};
export default Background;
