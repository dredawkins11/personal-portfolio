import React from "react";
import "./Background.scss";

const BACKGROUND_INTERVAL = 3
const BACKGROUND_START = 100 - BACKGROUND_INTERVAL
const RGB = {r: 55, g: 28, b: 98}
const RGB_INTERVAL = 2

const Background = (props) => {
    const layerStyle = [];
    for (let i = 0; i < props.layers; i++) {
        layerStyle.push({
            width: (i ? 100 -  (i * BACKGROUND_INTERVAL) + "vw" : `${BACKGROUND_START}vw`),
            height: (i ? 100 - (i * BACKGROUND_INTERVAL) + "vh" : `${BACKGROUND_START}vh`),
            // zIndex: ((i *  + 10) * -1),
            // borderColor: `rgb(${RGB.r - (RGB_INTERVAL * i)}, ${RGB.g - (RGB_INTERVAL * i)}, ${RGB.b - (RGB_INTERVAL * i)})`
            // opacity: 100 - (i * 10)
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
