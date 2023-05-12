/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let f=0;
    return function(...args){
        if (f==0)
        {
            f=1;
            return fn(...args);
        }
        else
        {
            return undefined;
        }
    }
};
