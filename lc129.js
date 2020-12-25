function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1)
root.left = {
    val:3,
    left:{
        val:5,
        left:null,
        right:null,
    },
    right:null,
}
root.right = {
    val:2,
    left:{
        val:7,
        left:null,
        right:null,
    },
    right:{
        val:9,
        left:null,
        right:null,
    },
}
var sumNumbers = function(root) {
    var paths = []
    function dfs(root,path){
        if(root.left===null && root.right === null){
            path += String(root.val)
            paths.push(path)
        }else if(root.left === null){
            path += String(root.val)
            dfs(root.right,path)
        }else if(root.right === null){
            path += String(root.val)
            dfs(root.left,path)
        }else{
            path += String(root.val)
            dfs(root.left,path)
            dfs(root.right,path)
        }
        path.slice(0,path.length-2)
    }
    dfs(root,"")
    let result = 0
    paths.map(item=>{
        result += Number(item)
    })
    return result
};
console.log(sumNumbers(root))
