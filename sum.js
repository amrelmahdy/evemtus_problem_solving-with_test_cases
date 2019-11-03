module.exports = {
    twoSum: (nums, target_num) => {
        let map = [];
        let indexNum = [];
        for (let x = 0; x < nums.length; x++) {
            if (map[nums[x]] != null) {
                let index = map[nums[x]];
                indexNum[0] = index;
                indexNum[1] = x;
                break;
            } else {
                map[target_num - nums[x]] = x;
            }
        }
        return indexNum;
    }
};




