import React from 'react';

const Address = props => {
    if (!props || !props.location)
        return <></>

    const { addressLine1, addressLine2, city, province, postalCode } = props.location;
    const label = props.label;
    return (
        <div className="address" role="region" aria-label={label}>
            {label && <label>{label}</label>}
            <div className="line" >
                {
                    addressLine1 &&
                    <div className="address-line-1">{addressLine1}</div>
                }

                {
                    addressLine2 &&
                    <div className="address-line-2">{addressLine2}</div>
                }
                <div className="address-line-3">
                    {
                        city &&
                        <span className="city">{city}, </span>
                    }
                    {
                        province &&
                        <span className="province">{province} </span>
                    }

                    {
                        postalCode &&
                        <span className="postal-code">{postalCode}</span>
                    }
                </div>
            </div>
        </div >
    )
}

export default Address