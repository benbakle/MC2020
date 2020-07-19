import React from 'react';
import moment from 'moment';

const Date = props => {
    const { date, label, onChange, readOnly } = props;

    if (!date)
        return <></>

    const _date = moment(date);
    const dateForInput = _date.format("YYYY-MM-DD");

    return (
        <div className={`date${readOnly ? " read-only" : ""}`}>
            {
                label &&
                <label>{label}</label>
            }

            {
                !readOnly &&
                <input type="date" value={dateForInput} onChange={onChange}/>
            }

            {
                readOnly &&
                <span>{moment.utc(date).format('L')}</span>
            }
        </div>
    )
}

export default Date;