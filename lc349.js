/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const map = new Map()
    const result = []
    if (nums1.length >= nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            map.set(nums1[i], nums1[i])
        }
        for (let i = 0; i < nums2.length; i++) {
            if (map.has(nums2[i])) {
                result.push(map.get(nums2[i]))
            }
        }
    } else {
        for (let i = 0; i < nums2.length; i++) {
            map.set(nums2[i], nums2[i])
        }
        for (let i = 0; i < nums1.length; i++) {
            if (map.has(nums1[i])) {
                result.push(map.get(nums1[i]))
            }
        }
    }
    return Array.from(new Set(result))

};