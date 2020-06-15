import React from 'react';
import Button from './';
import { render, screen, fireEvent } from '../../setupTests';

describe('The Button control', () => {
    let _button;

    describe('given no content', () => {
        it('does not display the button', () => {
            render(<Button />);
            expect(screen.queryByButton()).toBeNull()
        });
    });

    describe('given content', () => {
        describe('and no aria label', () => {
            beforeEach(() => {
                _button = button({ content: 'button text' });
            });

            it('shows the content on the button', () => {
                expect(_button.innerHTML).toEqual('button text')
            });

            it('has ADA label', () => {
                expect(screen.getByButton('button text')).toBeDefined();
            });
        });

        describe('and an aria label', () => {
            beforeEach(() => {
                _button = button({ content: "...", ariaLabel: 'this is more descriptive' });
            });

            it('has text', () => {
                expect(_button.innerHTML).toEqual('...')
            });

            it('does not use content for ADA name', () => {
                expect(screen.queryByButton("...")).toBeNull();
            });

            it('has ADA name', () => {
                expect(screen.getByButton("this is more descriptive")).toBeDefined();
            });
        });

        describe('given an on click handler', () => {
            describe('and the button is clicked', () => {
                it('calls the click handler', () => {
                    let fakeValue;
                    const mockClick = () => fakeValue = true;
                    _button = button({ content: "wee", onClick: mockClick })
                    
                    fireEvent.click(_button);

                    expect(fakeValue).toBeTruthy();
                });
            });
        });

        describe('given a class name', () => {
            it('sets the class', () => {
                _button = button({ content: "i need something", className: "my-cool-button" })
                expect(_button).toHaveClass("my-cool-button");
            });
        });
    });

    function button(props) {
        render(<Button {...props} />);
        return screen.getByButton();
    };
});
