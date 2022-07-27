const promiseAll = (promises) => {
    if (!Array.isArray(promises)) {
        throw new Error('Expect an array of promises');
    }

    return new Promise((resolve, reject) => {
        let results = [];
        promises.forEach((promise, idx) => {
            promise
                .then(res => {
                    results.push(res);
                })
                .catch(err => {
                    console.log('rejected')
                    reject(`Promise at index ${idx} is rejected`);
                })
        })
        resolve(results);
    })
}

const promises = [Promise.resolve(1), Promise.reject(2)];

const promise_test = promiseAll(promises);

promise_test.then(console.log)