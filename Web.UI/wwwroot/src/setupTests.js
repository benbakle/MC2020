import '@testing-library/jest-dom/extend-expect';
import * as RTL from '@testing-library/react';

const { render, screen, fireEvent } = RTL;

let isLoggedIn = true;

//Example of useMock();
let imported = {useAthing:()=>{}} // <== just a fake for example
const useMock = () => {
    jest.spyOn(imported, "useAthing").mockImplementation(() => {
        const _imported = {}
        const _auth = {};

        _auth.logout = () => isLoggedIn = false;

        _imported.auth = _auth

        return _imported;
    })
}

const bypassComponent = (obj, propertyString) => {
    jest.spyOn(obj, propertyString).mockImplementation(props => props.children);
}

const mockNewDateAndReturn = dateString => {
    jest.spyOn(global.Date, "now").mockImplementation(() => new Date(dateString));
}

const _render = (comp, role, name) => {
    const _render = render(comp);

    if (role && !screen.initialLoad)
        screen.initialLoad = screen.getByRole(role, asLabel(name));

    return _render;
}

const asLabel = adaLabel => adaLabel && { name: adaLabel };

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

//attach to screen object
screen.main = () => screen.getByRole("main");

screen.getByAlert = adaLabel => getBy('alert', adaLabel);

screen.getByImage = adaLabel => getBy('img', adaLabel);

screen.getByLabel = adaLabel => getByLabelText(adaLabel);

screen.getByBHeading = adaLabel => getBy('heading', adaLabel);;
screen.queryByHeading = adaLabel => queryBy('heading', adaLabel);

screen.getByButton = adaLabel => getBy('button', adaLabel);;
screen.queryByButton = adaLabel => queryBy('button', adaLabel);;

screen.getByContentInfo = adaLabel => getBy('contentinfo', adaLabel);;

//export modules
export {
    _render as render,
    screen,
    fireEvent,
    bypassComponent,
    mockNewDateAndReturn,
    useMock,
    isLoggedIn,
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


