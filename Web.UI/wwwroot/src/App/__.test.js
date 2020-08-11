import React from 'react';
import { render, screen, bypassComponent } from '../setupTests';
import App from '.';


describe('The MEA app', () => {
    render(<App />, "main");
    
    it('has a main wrapper', () => {
        expect(screen.initialLoad).toHaveClass('smc-main');
    });

    it('shows the loading message', () => {
        expect(screen.initialLoad.firstChild).toHaveClass("loading");
    });
    
    describe('given the page component is loaded', () => {
        it('hides the loading message', () => {
            expect(page()).not.toHaveClass("loading");
        });

        it('shows the landing', () => {
            expect(page()).toHaveClass('landing');
        });
    });

    function page() {
        render(<App />);
        return screen.main().firstChild;
    };
});