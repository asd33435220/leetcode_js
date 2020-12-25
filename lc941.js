/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    function findMax(A){
        let index = 0
        for(let i = 0;i<A.length-1;i++){
            if(A[i+1]<=A[i]){
                index = i
                break
            }
        }
        return index
    }
    const index = findMax(A)
    if(index===0)return false
    for(let i = A.length-1;i>index;i--){
        if(A[i-1]<=A[i]){
            return false
        }
    }
    return true
};