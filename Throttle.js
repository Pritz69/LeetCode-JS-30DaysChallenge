/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let called = false;
    let nextargs = null;
    return function(...args) {
        if (called) 
        {
            nextargs=args;
        }
        else
        {
            fn(...args);
            called=true;
            setTimeout(helper,t);
        }
        function helper()
        {
            if(nextargs)
            {
                fn(...nextargs);
                called=true;
                nextargs=null;
                setTimeout(helper,t);
            }
            else
            {
                called=false;
            }
        }
  }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
