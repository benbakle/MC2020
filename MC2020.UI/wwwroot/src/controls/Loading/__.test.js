import React from 'react';
import Loading from './';
import { render, screen } from 'setupTests';

describe('The Loading component', () => {
    it('shows the loading message as an alert', () => {
        expect(loading()).toBeDefined();
    });

    it('marks it as loading', () => {
        expect(loading()).toHaveClass("loading");
    });

    it('asserts the message', () => {
        expect(loading().getAttribute('aria-live')).toEqual("assertive");
    });

    function loading() {
        render(<Loading />);
        return screen.getByAlert("loading");
    };
});
