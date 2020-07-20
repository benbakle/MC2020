import React from 'react';
import { render, screen, bypassComponent } from 'setupTests';
import App from './';


describe('The Money Clip App', () => {

    describe('given the page component is loaded', () => {
        it('hides the loading message', () => {
            expect(page()).not.toHaveClass("loading");
        });

        it('shows the main app', () => {
            expect(page()).toHaveClass('money-clip-app');
        });
    });

    function page() {
        render(<App />);
        return screen.main("Money Clip App");
    };
});