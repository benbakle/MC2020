import logger from './';

describe("The logger service", () => {
    beforeEach(() => {
        spyOn(console, "log").and.stub();
    })

    describe("when logging a message", () => {
        describe("given no message", () => {
            it("does not log the message", () => {
                logger.log();
                expect(console.log).not.toHaveBeenCalled();
            });
        });

        describe("given a message", () => {
            describe("without a type", () => {
                it("logs the message without the type prefix", () => {
                    logger.log("message without a type");
                    expect(console.log).toHaveBeenCalledWith("message without a type");
                });
            });

            describe("with a type", () => {
                it("logs the message with the type prefix", () => {
                    logger.log("message with type", "THINGSTOKNOW");
                    expect(console.log).toHaveBeenCalledWith("THINGSTOKNOW : message with type");
                });
            });
        });
    });

    describe("when logging an informational message", () => {
        it("logs the message with the 'INFO' prefix", () => {
            logger.info("here is important information");
            expect(console.log).toHaveBeenCalledWith("INFO : here is important information")
        });
    });

    describe("when logging an error message", () => {
        it("logs the message with the 'ERROR' prefix", () => {
            logger.error("Oh no! An error!");
            expect(console.log).toHaveBeenCalledWith("ERROR : Oh no! An error!");
        });
    });

});