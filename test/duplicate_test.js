const assert = require("assert");
const { getFirstDuplicate} = require("./../duplicate");


const numbers1 = [5, 2, 3, 4, 2, 6, 7, 1, 2, 3];
const numbers2 = [5, 9, 3, 4, 2, 6, 7, 1, 2, 3];

describe("duplicated array", () => {
    it("get the first duplicated index in an array", (done) => {
        assert.equal(getFirstDuplicate(numbers1), 1);
        assert.equal(getFirstDuplicate(numbers2), 2);
        done();
    });
});