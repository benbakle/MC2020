import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { render, screen, act } = RTL;


//:: MOCK CALLBACK
let mockCallbackValue = "";
const mockCallback = jest.fn(() => { mockCallbackValue = "called!"; });


//:: MOCK LOCAL STORAGE
let localStore = {};
const mockLocalStorage = () => {
    Object.defineProperty(global.window, "localStorage", {
        writable: true,
        value: {
            getItem: (key) => {
                return localStore[key];
            },
            setItem: (key, value) => {
                localStore[key] = value;
            },
            clear: () => { localStore = {}; },
            removeItem: (key) => { delete localStore[key]; }
        }
    });
}

const bypassComponent = (obj, propertyString) => {
    jest.spyOn(obj, propertyString).mockImplementation(props => props.children);
}

const mockNewDateAndReturn = dateString => {
    jest.spyOn(global.Date, "now").mockImplementation(() => new Date(dateString));
}

const getBy = (role, adaLabel) => {
    let _name;
    if (adaLabel) _name = { name: adaLabel };
    return screen.getByRole(role, _name);
}

const queryBy = (role, adaLabel) => {
    let _name;
    if (adaLabel) _name = { name: adaLabel };
    return screen.queryByRole(role, _name);
}

const queryAllBy = (role, adaLabel) => {
    let _name;
    if (adaLabel) _name = { name: adaLabel };
    return screen.queryAllByRole(role, _name);
}


//LIST OF ELEMENT ADA ROLES 
//https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

//attach to screen object
screen.main = adaLabel => screen.getByRole("main", adaLabel);

screen.getByAlert = adaLabel => getBy('alert', adaLabel);

screen.getByNavigation = adaLabel => getBy('navigation', adaLabel);

screen.getByImage = adaLabel => getBy('img', adaLabel);

screen.getByLabel = adaLabel => screen.getByLabelText(adaLabel);
screen.queryByLabel = adaLabel => screen.queryByLabelText(adaLabel);

screen.getByHeading = adaLabel => getBy('heading', adaLabel);;
screen.queryByHeading = adaLabel => queryBy('heading', adaLabel);

screen.getByButton = adaLabel => getBy('button', adaLabel);;
screen.queryByButton = adaLabel => queryBy('button', adaLabel);
screen.queryAllByButton = adaLabel => queryAllBy('button', adaLabel);

screen.getByTextbox = adaLabel => getBy('textbox', adaLabel);
screen.queryByTextbox = adaLabel => queryBy('textbox', adaLabel);

screen.getByContentInfo = adaLabel => getBy('contentinfo', adaLabel);

screen.getByRegion = adaLabel => getBy('region', adaLabel);
screen.queryByRegion = adaLabel => queryBy('region', adaLabel);
screen.queryAllByRegion = adaLabel => queryAllBy('region', adaLabel);

screen.getByStatus = adaLabel => getBy('status', adaLabel);

//export modules
export {
    render,
    screen,
    act,
    userEvent as fireEvent,
    mockCallback,
    mockCallbackValue,
    bypassComponent,
    mockNewDateAndReturn,
    mockLocalStorage,
}

//Promise helpers
export function response(data) {
    return { json: () => data };
}
export function promise() {
    return new Promise((resolve, reject) => { });
}
export function resolved(data) {
    return Promise.resolve(data);
}
export function rejected(data) {
    return Promise.reject(data);
}


