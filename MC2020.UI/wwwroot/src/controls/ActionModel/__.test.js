import React from "react";
import { render, screen,fireEvent } from 'setupTests';
import ActionModel from './';

describe("The Action Model component", () => {

    describe("when rendering", () => {

        describe("inactive", () => {

            beforeEach(() => {
                start({ title: "My Model", active: false });
            });

            it("starts inactive", () => {
                expect(screen.getByRegion("My Model")).not.toHaveClass("active")
            });

            it(" has a close button", () => {
                expect(screen.getByButton("Close Model")).toBeDefined();
            });

            it("uses the name", () => {
                expect(screen.getByRegion("My Model")).toBeDefined();
            });

            it("has a screen overlay", () => {
                expect(screen.getByButton("Screen Overlay")).toBeDefined();
            });

        });

        describe("active", () => {
            let spyFn;
            beforeEach(() => {
                spyFn = jest.fn();
                start({ title: "My Model", active: true, closeCallback: spyFn });
            });

            describe("when close button is clicked", () => {
                it("closes the model", () => {
                    fireEvent.click(screen.getByButton("Close Model"));
                    expect(spyFn).toHaveBeenCalled();    
                });
            });

            describe("when the screen overlay is clicked", () => {
                it("closes the model", () => {
                    fireEvent.click(screen.getByButton("Screen Overlay"));
                    expect(spyFn).toHaveBeenCalled();
                });
            });


            describe("when given children", () => {
                it("populates the children", () => {
                    start({ children: "My Children" });
                    expect(screen.getByRegion("Model").textContent).toEqual("My Children");
                });
            });

            it("it becomes active", () => {
                expect(screen.getByRegion("My Model")).toHaveClass("open")
            });
        });
    });

    function start(props) {
        render(<ActionModel {...props} />);
    }
});