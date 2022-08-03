function multiply(x) {
    return function (y) {
        if (y) {
            return multiply(x * y);
        }
        return x;
    }
}

console.log(multiply(1)(2)(3)(4));