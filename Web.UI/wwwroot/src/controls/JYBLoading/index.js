import React from 'react';
import './loading.scss';

const Loading = () => {
    return (
        <div className="loading-background" title="loading..." aria-label="loading" placeholder="Loading" role="alert" aria-live="assertive">

            <div className="loading2">
                <img alt='Joel Young Band Logo' src="http://joelyoungband.com/img/logos/jyb-logo-425053.png" />
            </div>
        </div>
    );
}

export default Loading
