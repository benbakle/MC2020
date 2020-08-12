import React, { useEffect, cloneElement } from 'react';
import './__.scss';
import Percent from 'controls/Percent';


const Chart = props => {
    const { data } = props;
    const max = Math.max.apply(Math, data);
    const result = data.map(v => (v / max) * 100)

    //spike
    let overBudget = value => value > result[0];

    return (
        <div className="chart">
            {
                props?.data?.map((item, key) =>
                    <Bar
                        key={key}
                        value={item}
                        className={overBudget(item) ? " over-budget" : ""}
                        tooltip={<Percent value={item / 100} />} />
                )
            }
        </div>
    )
}

const Bar = props => {
    return (
        <div
            className={`bar${props.className ? props.className : ""}`}
            style={{ height: props.value ? `${props.value}%` : '1%' }}>
            <div className="tool-top">{props.tooltip}</div>
        </div>
    )
}

export default Chart

export {
    Bar
}