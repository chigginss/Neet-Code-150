/**
@param {number[]}
@param {boolean}
*/

const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

const containsDuplicate = function(nums) {
    const numbersCount = {};

    for (let i = 0; i < nums.length; i++) {
        if (numbersCount.hasOwnProperty(nums[i])) {
            return true;
        } else {
            return false;
        }
    }
};

// Typescript 
function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
};
