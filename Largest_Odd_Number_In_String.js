/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let x=-1;
    for ( let i=num.length-1; i>=0;i--)
    {
        if (parseInt(num[i])%2 == 1)
        {
            x=i;
            break
        }
    }
    return num.substring(0,x+1);
};
