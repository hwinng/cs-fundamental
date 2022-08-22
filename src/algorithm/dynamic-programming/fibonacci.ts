// Implement fibonacci sequence in different way
// 0, 1, 1, 2, 3, 5, 8, 13

// SOLUTION 1: Recursion
/**
 *                  f(5)
 *           f(4)              f(3)
 *      f(3)     f(2)       f(2)  f(1)
 *    f(2)  f(1)
 *  
 * Time complexity: O(2^n)
 * @param n 
 * @returns 
 * 
 */
function fibRecursion(n: number): number {
    if (n == 1 || n == 2) return 1;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

// SOLUTION 2: Using memoize recursion
/**
 * Time complexity: O(n)
 * Drawback: if we pass too big n, for example n = 10000, we will get the RangeError: Maximum call stack size exceeded because of callstack size is not big enough
 * to store recursion function to call 
 * @param n 
 * @returns 
 * 
 */
function memoizeFib(n: number, cache=[0, 1, 1]): number {
    if (cache[n]) return cache[n];

    cache[n] = memoizeFib(n - 1, cache) + memoizeFib(n - 2, cache)
    return cache[n]
}

// SOLUTION 3: Using for loop
/**
 * Time complexity: O(n)
 * Solve the problem of maximum callstack call 
 * @param n 
 * @returns 
 * 
 */
function basicLoopFib(n: number, cache=[0, 1, 1]): number {
    if (n == 1 || n == 2) return n;

    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[n];
}

// SOLUTION 3: Using for loop
/**
 * Time complexity: O(n)
 * Instead of using a cache array to store cache value, we will define two variable to cache the resule for each loop
 * 0     1       1                  2       3   5
 *      prev    next
 *          prev=(next-prev)       next
 * @param n 
 * @returns 
 * 
 */
function fastLoopFib(n: number): number {
    if (n== 0 || n == 1 || n == 2) return n;

    let pre = 1, next = 1;
    for (let i = 3; i <= n; i++) {
        next = pre + next;
        pre = next - pre;
    }

    return next;
}

console.time('fastLoopFib')
console.log(fastLoopFib(100))
console.timeEnd('fastLoopFib')
