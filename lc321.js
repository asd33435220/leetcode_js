function maxNumber(nums1, nums2, k) {
    let result = []
    let start = 0
    if (nums1.length < k) {
        start = k - nums1.length
    }
    for (let i = start; i <= k && i <= nums2.length; i++) {

        let arr1 = getMaxStack(nums2, i)
        let arr2 = getMaxStack(nums1, k - i)
        let merged = merge(arr1, arr2)
        if (isBigger(result, merged)) {
            result = merged
        }
    }
    return result
}

function getMaxStack(arr, k) {
    let result = []
    arr.map(((value, i) => {
        while (result.length > 0 && result[result.length - 1] < value && result.length + arr.length >= k + i + 1) {
            result.pop()
        }
        if (result.length < k) {
            result.push(value)
        }
    }))
    return result
}

function isBigger(arr1, arr2) {
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return arr1[i] < arr2[i]
        }
    }
    return arr1.length < arr2.length
}

function merge(arr1, arr2) {
    let result = []
    const length = arr1.length + arr2.length
    for (let i = 0; i < length; i++) {
        if (isBigger(arr1, arr2)) {
            result.push(arr2.shift())
        } else {
            result.push(arr1.shift())
        }
    }
    return result
}

console.log(maxNumber([6,7],
    [6,0,4],
    5
))