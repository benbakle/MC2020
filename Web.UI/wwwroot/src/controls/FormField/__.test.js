import React from 'react';
import { render, screen  } from 'setupTests';
import FormField from './';

describe('The Form Field control', () => {
    let _formField;

    describe('given no aria label', () => {

        beforeEach(() => {
            render(<FormField />);
        })

        it('does not display the field label ', () => {
            expect(screen.queryByLabel("")).toBeNull();;
        });

        it('does not display the value field ', () => {
            expect(screen.queryByTextbox()).toBeNull();
        });
    });

    describe('given an aria label', () => {

        it('sets the class name', () => {
            const {container} = render(<FormField ariaLabel="input text" className="classname-test" fieldValue="test-fieldvalue" />);
            expect(container.querySelector(".classname-test")).toBeDefined();
        });

        describe('with a field value', () => {
            beforeEach(() => {
                _formField = formField({ ariaLabel: 'input text', fieldValue: 'input test' });
            });

            it('shows the default field value', () => {
                expect(_formField.defaultValue).toEqual('input test');
            });
        });

        describe('and no field value', () => {
            beforeEach(() => {
                _formField = formField({ ariaLabel: 'input text' });
            });

            it('shows no default field value', () => {
                expect(_formField.defaultValue).toEqual("");
            });
        });
    });

    function formField(props) {
        render(<FormField {...props} />);
        return screen.getByTextbox();
    };
});
