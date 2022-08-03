/**
 * invoke throtted fn at most 1 time after X wait ms
 */
const throttle = (fn, wait) => {
    let allow = true;
    return function () {
        if (allow) {
            allow = false;
            setTimeout(() => {
                fn();
                allow = true;
            }, wait)
        };
    }
};

const log = () => {
    console.log("test")
}

const throttled = throttle(log, 1000);

const btn = document.querySelector('#btn');

btn.addEventListener('click', throttled)
