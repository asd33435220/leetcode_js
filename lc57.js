/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    const res = []
    const len = intervals.length
    let i = 0
    while(i<len && intervals[i][1]<newInterval[0]){
        res.push(intervals[i])
        i++
    }
    while(i<len && intervals[i][0]<=newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0],newInterval[0])
        newInterval[1] = Math.max(intervals[i][1],newInterval[1])
        i++
    }
    res.push(newInterval)

    while(i<len){
        res.push(intervals[i])
        i++
    }
    return res
}

let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
insert(intervals, newInterval)