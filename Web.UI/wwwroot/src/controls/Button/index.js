import React from 'react';
import './button.scss';

const Button = (props) => {
    const { content, ariaLabel, onClick, className } = props;

    const buttonClasses = `button${className ? " " + className : ""}`;

    const handleClick = () => {
        onClick && onClick();
    }

    if (!content)
        return <></>

    return (
        <button className={buttonClasses} aria-label={ariaLabel || content} onClick={handleClick} >
            {content}
        </button>
    );
}

export default Button;