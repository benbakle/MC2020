import React from 'react';
import './button.scss';

const Button = (props) => {
    const { disabled, content, ariaLabel, onClick, className, style, children } = props;
    let _content = content || children;
    const buttonClasses = `button${className ? " " + className : ""}`;

    const handleClick = () => {
        onClick && onClick();
    }

    if (!_content)
        return <></>

    return (
        <button className={buttonClasses} aria-label={ariaLabel || content} onClick={handleClick} disabled={disabled} style={style} >
            {_content}
        </button>
    );
}

export default Button;