/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const ans = [];
    for (const i in arr)
    {
        ans.push(fn(arr[i],Number(i)));
    }
    return ans;
};
