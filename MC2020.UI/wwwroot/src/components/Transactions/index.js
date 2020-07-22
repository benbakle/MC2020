import React from 'react';
import './__.scss';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { Date } from 'controls';

const Transactions = props => {
    const { data } = props;
    return (
        <>
            {data?.map((item, key) =>
                <div className="transactions flex align-center space-between max-width-tablet" key={key}>
                    <span><Date date={item.date} readOnly /></span>
                    <span>{item.description}</span>
                    <span>{item.reference}</span>
                    <span>{item.cleared ? "cleared" : "pending..."}</span>
                    <span>{item.budget.title} ({formatPercent(item.budget.percentage)})</span>
                    <span>{item.type}</span>
                    <span>{formatDollar(item.amount)} ({formatPercent()})</span>
                </div>
            )}
        </>
    )
}

export default Transactions