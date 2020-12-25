/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => {
        return a - b;
    })
    s.sort((a, b) => {
        return a - b;
    })
    let res = 0, i = 0, j = 0;
    for (; i < g.length && j < s.length;) {
        if (g[i] <= s[j]) {
            res++;
            j++;
            i++;
        } else {
            j++;
        }
    }
    return res;
};
let g = [1, 2, 3];
let s = [1, 1];
let res = findContentChildren(g, s);
console.log(res)