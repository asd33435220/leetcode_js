var removeDuplicateLetters = function (s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) - 1)
        if (stack.indexOf(s[i]) !== -1) {
            continue
        }
        while (stack.length > 0 && stack[stack.length - 1] > s[i] && map.get(stack[stack.length - 1]) > 0) {
            stack.pop()

        }
        stack.push(s[i])
    }
    return stack.join('')
};
const s = "cbacdcbc"
console.log(removeDuplicateLetters(s))