import React from 'react';
import "./screen-overlay.scss";

const ScreenOverlay = props => {
    const { onClick, className, ariaLabel } = props;
    const overlayClasses = `screen-overlay${className ? " " + className : ""}`;
    return (
        <button className={overlayClasses} onClick={onClick} aria-label={ariaLabel || "Screen Overlay"}></button>
    )
}

export default ScreenOverlay;