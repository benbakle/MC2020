
import * as api from './';
import { resolved, mockLocalStorage } from 'setupTests';
import logger from 'services/logger';

describe("The api service", () => {
    let error_message;
    const err = e => error_message = e.message;

    const testToken = "faketoken";
    mockLocalStorage();
    localStorage.setItem("okta-token-storage", JSON.stringify({ accessToken: { value: testToken } }));

    it("sets the headers content type to application/json", () => {
        const headers = api.headers();
        expect(headers)
            .toEqual({
                'Content-Type': 'application/json',
               // "Authorization": `Bearer ${testToken}`
            });
    });

    describe("when fetching data", () => {

        beforeEach(() => { spyOn(global, "fetch").and.stub() });

        describe("given no uri", () => {

            beforeEach(() => fetchAndCatch("with-no-properties"));

            it("does not call to fetch data", () => {
                expect(global.fetch).not.toHaveBeenCalled();
            });

            it("returns an error", () => {
                expect(error_message).toEqual("No uri was provided");
            })
        });

        describe("given a uri", () => {
            describe("and no options", () => {
                it("calls the uri with the 'GET' method and default heaeders ", () => {
                    fetchAndCatch();
                    expect(global.fetch).toHaveBeenCalledWith("/", { method: "GET", headers: { ...api.headers() } });
                });
            });

            describe("given options", () => {
                describe("without a method", () => {
                    it("calls the uri with the 'GET' method", () => {
                        fetchAndCatch({});
                        expect(global.fetch).toHaveBeenCalledWith("/", { method: "GET", headers: { ...api.headers() } });
                    });
                });

                describe("with a method", () => {
                    it("calls the api with the provided method", () => {
                        fetchAndCatch({ method: "SCHNITZEL" })
                        expect(global.fetch).toHaveBeenCalledWith("/", { method: "SCHNITZEL", headers: { ...api.headers() } });
                    });
                });

                describe("with headers", () => {
                    it("calls the api with the provided headers", () => {
                        fetchAndCatch({ headers: { 'AThing': 'that is in the header' } })
                        expect(global.fetch).toHaveBeenCalledWith("/", { method: "GET", headers: { 'AThing': 'that is in the header' } });
                    });
                });
            });
        });
    });

    describe("given a call to fetch data responds with", () => {
        describe("not ok", () => {
            let error_message;

            const _failure = ({
                ok: false,
                status: 500,
                statusText: "Bad things",
            });

            beforeEach(() => {
                spyOn(logger, "error").and.stub();
                spyOn(global, "fetch").and.returnValue(resolved(_failure));

                api.fetch("/").catch(e => { error_message = e.message });
            });

            it("logs the error", () => {
                expect(logger.error).toHaveBeenCalledWith("500 : Bad things");
            });

            it("throws an error", () => {
                expect(error_message).toEqual("500 : Bad things");
            });
        });

        describe("ok", () => {
            describe('without content', () => {
                let _response = ""

                beforeEach(() => {
                    spyOn(global, "fetch").and.returnValue(success(204));
                    api.fetch("/").then(json => { _response = json; }).catch(err);
                });

                it("returns without data", () => {
                    expect(_response).toEqual("");
                });
            });

            describe('with content', () => {
                let _response = "test";

                const _responseData = { data: "stuff" };

                const _success = ({
                    ok: true,
                    status: 200,
                    statusText: "Good things",
                    json: () => { return _responseData },
                });

                beforeEach(() => {
                    spyOn(global, "fetch").and.returnValue(resolved(_success));
                    api.fetch("/").then(json => { _response = json; }).catch(err);
                });

                it("returns the data", () => {
                    expect(_response).toEqual(_responseData);
                });
            });
        });
    });


    function success(status) {
        return resolved({
            ok: true,
            status: status,
            statusText: "Good things",
            json: () => responseData(status),
        });
    }

    function responseData(status) {
        return status === 204 ? "no-content" : { data: "stuff" };
    }

    async function  fetchAndCatch(options) {
        const isEmpty = options === "with-no-properties";

        return await api.fetch(!isEmpty && "/", !isEmpty && options).catch(err);
    }
});