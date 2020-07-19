import React from 'react';
import { render, screen, fireEvent, mockCallback, mockCallbackValue, } from 'setupTests';
import EditAddress from './';

describe('The Edit Address component', () => {

    it('is a labeled region', () => {
        render(<EditAddress />);
        expect(screen.getByRegion("Edit Address")).toBeDefined();
    });

    expectInputToBeHandled("addressLine1", address_line_1, "Address Line 1");
    expectInputToBeHandled("addressLine2", address_line_2, "Address Line 2");
    expectInputToBeHandled("city", city, "City");
    expectInputToBeHandled("province", province, "Province");
    expectInputToBeHandled("postalCode", postal_code, "Postal Code");

    function expectInputToBeHandled(fieldname, inputElement, title) {
        describe(`when handling ${title} input`, () => {
            const location = { [fieldname]: fieldname }

            beforeEach(() => {
                render(<EditAddress location={location} onChange={mockCallback} />);
            });

            it(`shows ${title}`, () => {
                expect(inputElement().value).toEqual(fieldname);
            });

            describe('when the input is changed', () => {
                it('handles the change', () => {
                    fireEvent.type(inputElement(), "new value");
                    expect(mockCallback).toHaveBeenCalledWith({ [fieldname]: "new value" });
                });
            });
        });
    }

    function address_line_1() {
        return screen.getByTextbox("Address Line 1");
    }

    function address_line_2() {
        return screen.getByTextbox("Address Line 2");
    }

    function city() {
        return screen.getByTextbox("City");
    }

    function province() {
        return screen.getByTextbox("Province");
    }

    function postal_code() {
        return screen.getByTextbox("Postal Code");
    }

});