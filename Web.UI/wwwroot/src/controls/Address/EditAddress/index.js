import React from 'react';

const EditAddress = props => {
    const { location, onChange } = props;

    const handleChange = e => {
        onChange({ ...location, [e.target.name]: e.target.value });
    }
    return (
        <div className="edit-address" role="region" aria-label="Edit Address">
            <input
                className="input"
                name="addressLine1"
                aria-label="Address Line 1"
                onChange={handleChange}
                value={location?.addressLine1 || ""}
                placeholder="Address 1" />

            <input
                className="input"
                name="addressLine2"
                aria-label="Address Line 2"
                onChange={handleChange}
                value={location?.addressLine2 || ""}
                placeholder="Address 2" />

            <input
                className="input"
                name="city"
                aria-label="City"
                onChange={handleChange}
                value={location?.city || ""}
                placeholder="City" />

            <input
                className="input"
                name="province"
                aria-label="Province"
                onChange={handleChange}
                value={location?.province || ""}
                placeholder="Province" />

            <input
                className="input"
                name="postalCode"
                aria-label="Postal Code"
                onChange={handleChange}
                value={location?.postalCode || ""}
                placeholder="Postal Code" />
        </div>
    )
}

export default EditAddress