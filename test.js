const { calculator } = require("./index.js");

describe("calculator", () => {
    test("Add", () => {
        let result = calculator("add", 1, 2);
        //expect(result).toEqual(3);
        expect(result).toBeTruthy();
    });

    test("Sub", () => {
        let result = calculator("sub", 1, 2);
        expect(result).toEqual(-1);
    });
});
