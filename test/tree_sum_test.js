const assert = require("assert");
const { treeSum } = require("./../tree");

const tree = {
    value: 1,
    children: [{
        value: 4,
        children: [
            {
                value: 1,
                children: null
            },
            {
                value: 1,
                children: null
            }]
    }]
};


describe("tree sum", () => {
    it("get the sum of a value in a tree", (done) => {
        assert.equal(treeSum(tree), 7);
        done();
    });
});