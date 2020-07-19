import React from 'react';
import { render } from 'setupTests';
import { Logout } from './';

describe('The Icons library', () => {
    it('has a logout icon', () => {
        expect(icon(<Logout />)).toHaveClass("fa-sign-out-alt");
    });

    function icon(icon) {
        const { container } = render(icon);
        return container.querySelector("svg");
    }
});
