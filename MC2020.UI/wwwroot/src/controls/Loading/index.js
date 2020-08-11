import React from 'react';
import './loading.scss';

const Loading = () => {
    return (
        <div className="loading" title="loading..." aria-label="loading" placeholder="Loading" role="alert" aria-live="assertive">
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"  >
                <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" ></circle>
            </svg>
        </div>
    );
}

export default Loading
