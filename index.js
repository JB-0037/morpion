function addPawnToGrid(grid, pawn, x, y) {
    // on vérifie qu'il n'y a pas déjà un pion à cette case
    if (!grid[y][x]) {
        grid[y][x] = pawn;
        return "";
    }
    return "Vous ne pouvez pas placer de pion ici";
}

module.exports = {addPawnToGrid};

// function playMove(grid, pawn) {

// }

// function displayGrid(grid) {
//     for (rows in grid) {
//         for (let i = 0; i < rows.length; i++) {
//             console.log(i != rows.length ? rows[i] + " |" : rows[i] + "\n");
//         }
//     }
// }

// function checkIfPawnPresent(grid, x, y, pawn) {
//     return grid[x][y] === pawn;
// }

// function gridChecker(grid, x, y) {
//     for (let x = 0; x < grid.length; x++) {
//         for (let y = 0; y < x.length; y++) {

//         }
//     }
// }

// function getWinner(grid, pawns) {
//     // on vérifie si y a un gagnant et dans ce cas là on le renvoie
//     for (let pawn in pawns) {
//         // verif horizontale
//         if (grid[0][0] === pawn && grid[1][0] === pawn && grid[2][0] === pawn) return pawn;
//         if (grid[0][1] === pawn && grid[1][1] === pawn && grid[2][1] === pawn) return pawn;
//         if (grid[0][2] === pawn && grid[1][2] === pawn && grid[2][2] === pawn) return pawn;

//         // verif verticale
//         if (grid[0][0] === pawn && grid[0][1] === pawn && grid[0][2] === pawn) return pawn;
//         if (grid[1][0] === pawn && grid[1][1] === pawn && grid[1][2] === pawn) return pawn;
//         if (grid[2][0] === pawn && grid[2][1] === pawn && grid[2][2] === pawn) return pawn;

//         // verif diagonale
//         if (grid[0][0] === pawn && grid[1][1] === pawn && grid[2][2] === pawn) return pawn;
//         if (grid[0][2] === pawn && grid[1][1] === pawn && grid[0][0] === pawn) return pawn;
//     }
// }

// function main() {
//     let grid;
//     let pawns = ["x", "o"];
//     let isFirstPlayer = true;
//     let isWinner = false;

//     while(isWinner) {
        
//     }

// }