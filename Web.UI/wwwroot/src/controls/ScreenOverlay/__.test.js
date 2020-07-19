import React from 'react';
import { render, screen, fireEvent, mockCallbackValue, mockCallback } from 'setupTests';
import ScreenOverlay from './';


describe('The Overlay component', () => {
    it('is marked as overlay', () => {
        expect(overlay()).toHaveClass("screen-overlay");
    });

    describe('given a class name', () => {
        it('adds to the class list', () => {
            expect(overlay({ className: "customClass" })).toHaveClass("screen-overlay customClass")
        });
    });

    describe('given no ada label', () => {
        it('sets the label to "Screen Overlay"', () => {
            render(<ScreenOverlay />)
            expect(screen.queryByButton("Screen Overlay")).not.toBeNull()
        });
    });

    describe('given an ada label', () => {
        it('sets the label to the given value', () => {
            render(<ScreenOverlay ariaLabel="label" />)
            expect(screen.queryByButton("label")).not.toBeNull()
        });
    });

    describe('given the overlay is clicked', () => {
        it('calls the onClick callback', () => {
            fireEvent.click(overlay({ onClick: mockCallback }));
            expect(mockCallbackValue).toEqual("called!");
        });
    });

    function overlay(props) {
        render(<ScreenOverlay {...props} />);
        return screen.getByButton();
    }
});