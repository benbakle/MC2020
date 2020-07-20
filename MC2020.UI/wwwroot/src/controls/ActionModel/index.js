import React from "react";
import { ScreenOverlay, Button } from "controls";
import { Times } from "icons";
import "./__.scss";

const ActionModel = props => {
    const { closeCallback, active, title } = props;
    return (
        <div role="region" className={`action-model${active ? " open" : ""}`} aria-label={title || "Model"}>
            <ScreenOverlay onClick={closeCallback} />
            <div className="model-content">
                <Button className="close-model-trigger" ariaLabel="Close Model" onClick={closeCallback} content={<Times />} />
                {props.children}
            </div>
        </div>
    );
}

const ModelTitle = props => <div className="model-title">{props.children}</div>
const ModelButton = props => <Button className="model-button" {...props} />
export { ModelTitle, ModelButton }

export default ActionModel;
