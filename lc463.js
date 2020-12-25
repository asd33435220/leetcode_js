/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    if (grid.length === 0) return 0
    let result = 0
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 1) {
                result += getOne(grid, x, y)
            }
        }
    }
    return result
};

function getOne(grid, x, y) {
    let result = 0
    if (y - 1 < 0 || grid[y - 1][x] === 0) {
        result++
    }
    if (y + 1 >= grid.length || grid[y + 1][x] === 0) {
        result++
    }
    if (x - 1 < 0 || grid[y][x - 1] === 0) {
        result++
    }
    if (x + 1 >= grid[0].length || grid[y][x + 1] === 0) {
        result++
    }
    return result
}

const grid =
    [
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]]
console.log(islandPerimeter(grid))