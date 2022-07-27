// implement a cache function that will cache previous result of the same input

function add(num_1, num_2) {
    for (let i = 0; i < 100000000; i++) { }
    return num_1 + num_2;
};

function cacheFn(fn, context) {
    const res = {};
    return function (...agrs) {
        let key = JSON.stringify(agrs);
        if (!res[key]) {
            res[key] = fn.call(context || this, ...agrs);
            return res[key];
        }
        return res[key];
    }
};

const cached = cacheFn(add)

console.time('first')
console.log(cached(100, 200))
console.timeEnd('first')

console.time('second')
console.log(cached(100, 200))
console.timeEnd('second')


