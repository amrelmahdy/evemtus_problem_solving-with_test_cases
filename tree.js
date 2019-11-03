module.exports = {
    treeSum:  function sum(node) {
        let childSum = node.value || 0;
        if (!node.children) return node.value;
        for (let i = 0; i < node.children.length; i++) {
            childSum += sum(node.children[i]);
        }
        node.value = childSum;
        return childSum;
    }
};

