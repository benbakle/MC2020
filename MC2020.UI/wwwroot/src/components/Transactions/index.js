import React from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { Date } from 'controls';
import { useTransactions } from 'services/transaction';
import './__.scss';

const Transactions = props => {
    const { transactions } = useTransactions();

    return (
        <>
            {
                transactions?.map((item, key) =>
                    <div className="transactions flex align-center space-between max-width-tablet" key={key}>
                        <span><Date date={item.date} readOnly /></span>
                        <span>{item.description}</span>
                        <span>{item.reference}</span>
                        <span>{item.cleared ? "cleared" : "pending..."}</span>
                        <span>
                            {
                                item.budget
                                    ? `${item.budget.title} (${formatPercent(item.budget.percentage)})`
                                    : "income"
                            }
                        </span>

                        <span>{formatDollar(item.amount)}</span>
                    </div>
                )
            }
        </>
    )
}

export default Transactions