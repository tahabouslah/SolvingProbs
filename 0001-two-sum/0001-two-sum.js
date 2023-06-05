/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let indice1;
     let indice2;
    for(let i = 0; i<nums.length;i++){
        for(let j=0; j<nums.length;j++){
            if(j!=i){
                if(nums[i] + nums[j] == target){
                   indice1 = i;
                   indice2 = j;
                }
            }
        }
    }
    arr.push(indice1);
    arr.push(indice2);
    return arr;
};