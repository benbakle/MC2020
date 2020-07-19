import React from 'react';
import { render, screen } from 'setupTests';
import Heading from './';

describe('The Heading component', () => {
    let _heading;

    describe('given no heading', () => {
        it('does not show the heading', () => {
            render(<Heading />);
            expect(screen.queryByHeading()).toBeNull();
        });
    });

    describe('given a heading', () => {

        beforeAll(() => {
            _heading = heading({ heading: "A display heading" });
        });

        it('shows the heading as text', () => {
            expect(_heading).toHaveTextContent("A display heading")
        });

        it('marks element as a heading', () => {
            expect(_heading).toHaveClass("heading")
        });

        describe('without a heading level', () => {

            beforeAll(() => {
                _heading = heading({ heading: "sumptum" });
            });

            it('shows without an aria level', () => {
                expect(_heading.tagName).toEqual("DIV");
            });

            it('marks element as a heading', () => {
                expect(_heading).toHaveClass("heading")
            });
        });

        describe('with a aria level of 1', () => {
            beforeAll(() => {
                _heading = heading({ heading: "sumptum", ariaLevel: "1" });
            });

            it('shows heading as aria level 1', () => {
                expect(_heading.tagName).toEqual("H1");
            });

            it('marks element as a heading', () => {
                expect(_heading).toHaveClass("heading")
            });

        });
    });

    function heading(props) {
        render(<Heading {...props} />);
        return screen.getByHeading();
    };
});