import React from 'react';
import { render, screen } from 'setupTests';
import Address from './';

describe('The Address component', () => {
    let _location;

    describe('given no location', () => {
        it('shows nothing', () => {
            render(<Address />)
            expect(screen.queryByRegion("Location Address")).toBeNull();
        });
    });

    describe('given a location', () => {
        it('shows the address line 1', () => {
            _location = { addressLine1: "A Line Of 0001" }
            expect(address_line_1().innerHTML).toEqual("A Line Of 0001");
        });

        it('shows the address line 2', () => {
            _location = { addressLine2: "Number 2" }
            expect(address_line_2().innerHTML).toEqual("Number 2");
        });

        it('shows the city', () => {
            _location = { city: "My Town!" }
            expect(city().innerHTML).toEqual("My Town!, ");
        });

        it('shows the province', () => {
            _location = { province: "Induckinois" }
            expect(province().innerHTML).toEqual("Induckinois ");
        });

        it('shows the postal code', () => {
            _location = { postalCode: "123...4567" }
            expect(postal_code().innerHTML).toEqual("123...4567");
        });
    });

    const location = () => {
        render(<Address location={_location} label="fake Label" />);
        return screen.getByRegion("fake Label");
    }

    const address_line_1 = () => location().querySelector(".address-line-1");
    const address_line_2 = () => location().querySelector(".address-line-2");
    const city = () => location().querySelector(".city");
    const province = () => location().querySelector(".province");
    const postal_code = () => location().querySelector(".postal-code");
});