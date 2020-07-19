import React from 'react';
import './heading.scss'

const Heading = props => {
    const { heading, ariaLevel } = props;

    if (!heading)
        return <></>

    return (
        <>
            {
                !ariaLevel &&
                <div className="heading" role="heading">{heading}</div>
            }
            {
                ariaLevel === "1" &&
                <h1 className="heading">{heading}</h1>
            }
        </>
    )
}

const H1 = props => <Heading heading={props.children} ariaLevel="1" />

export default Heading;
export { H1 };