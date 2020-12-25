function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    },
}
var zigzagLevelOrder = function (root) {
    var res = []
    var queue = []
    queue.push(root)
    for (let level = 0; queue.length > 0; level++) {
        const levelQue = queue
        const levelRes = []
        queue = []
        levelQue.map(node => {
            levelRes.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        })
        if (level % 2 !== 0) {
            levelRes.reverse()
        }
        res.push(levelRes)
    }
    return res

};
const res = zigzagLevelOrder(root)
console.log(res)
