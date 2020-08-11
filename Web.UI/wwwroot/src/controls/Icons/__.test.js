import React from 'react';
import { Logout } from './';
import { render } from '../../../setupTests';

describe('The Icons library', () => {
    it('has a logout icon', () => {
        expect(icon(<Logout />)).toHaveClass("fa-sign-out-alt");
    });

    function icon(icon) {
        const { container } = render(icon);
        return container.querySelector("svg");
    }
});
