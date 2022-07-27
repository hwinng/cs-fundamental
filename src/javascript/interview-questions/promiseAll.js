
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;
        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[idx] = value;
                    pending--;
                    if (pending === 0) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err))
        });
    });
};

const case_1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]; // [1, 2, 3]
const case_1_1 = ['DONE!', Promise.resolve(2), Promise.resolve(3)]; // ['DONE!', 2, 3]
const case_1_2 = [Promise.resolve(1), Promise.resolve(2), 3]; // [1, 2, 3]

const case_2 = [Promise.reject('REJECTED_2'), Promise.resolve('Phillip'), Promise.resolve('Nguyen')]; // REJECT_2
const case_2_1 = [Promise.resolve('a_2_1'), Promise.resolve('b'), Promise.reject('REJECT_3'), Promise.resolve('c')]; // REJECT_3
const case_2_2 = [Promise.resolve('a_2_2'), Promise.resolve('Phillip'), Promise.reject('CASE')]; // CASE

promiseAll(case_1).then(console.log).catch(console.log);
promiseAll(case_1_1).then(console.log).catch(console.log);
promiseAll(case_1_2).then(console.log).catch(console.log);
promiseAll(case_2).then(console.log).catch(console.log);
promiseAll(case_2_1).then(console.log).catch(console.log);
promiseAll(case_2_2).then(console.log).catch(console.log);

