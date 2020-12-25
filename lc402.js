var removeKdigits = function (num, k) {
    if (num.length <= k) return "0"
    let stack = []
    num = num.split('')
    num.map((char, _) => {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > char) {
            stack.pop()
            k--
        }
        if (char !== '0' || stack.length !== 0) {
            stack.push(char)
        }
    })
    while (k > 0) {
        stack.pop()
        k--
    }
    if (stack.length === 0) {
        return "0"
    }
    return stack.join('')
};
console.log(removeKdigits("1432219",3))