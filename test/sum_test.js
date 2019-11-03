const assert = require("assert");
const { twoSum} = require("./../sum");


const numbers = [10,20,10,40,50,60,70];


describe("two sum", () => {
    it("get indexes of values whose sum is the target", (done) => {
        assert.deepEqual(twoSum(numbers, 50), [2,3]);
        done();
    });
});

