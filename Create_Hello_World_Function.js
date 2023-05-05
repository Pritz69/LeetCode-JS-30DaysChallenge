# Function Syntax

var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

# Arrow Syntax

var createHelloWorld = function() {
    return () => "Hello World";
};

# Arrow Syntax + Rest Arguments

var createHelloWorld = function() {
    return (...args) => "Hello World";
};
