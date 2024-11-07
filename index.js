function addPawnToGrid(grid, pawn, x, y) {
    if (!grid[y][x]) {
        grid[y][x] = pawn;
        return "";
    }
    return "Vous ne pouvez pas placer de pion ici";
}

function displayGrid(grid) {
    let result = "";
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            result += (x !== grid[y].length - 1)
                ? grid[y][y] + " | "
                : grid[y][x] + "\n";
        }
    }
    return result;
}

function getWinner(grid, pawns) {
    // on vérifie si y a un gagnant et dans ce cas là on le renvoie
    for (let i = 0; i < pawns.length; i++) {
        const pawn = pawns[i];
        // verif horizontale
        if (grid[0][0] === pawn && grid[0][1] === pawn && grid[0][2] === pawn) return pawn;
        if (grid[1][0] === pawn && grid[1][1] === pawn && grid[1][2] === pawn) return pawn;
        if (grid[2][0] === pawn && grid[2][1] === pawn && grid[2][2] === pawn) return pawn;

        // verif verticale
        if (grid[0][0] === pawn && grid[1][0] === pawn && grid[2][0] === pawn) return pawn;
        if (grid[0][1] === pawn && grid[1][1] === pawn && grid[2][1] === pawn) return pawn;
        if (grid[0][2] === pawn && grid[1][2] === pawn && grid[2][2] === pawn) return pawn;

        // verif diagonale
        if (grid[0][0] === pawn && grid[1][1] === pawn && grid[2][2] === pawn) return pawn;
        if (grid[2][0] === pawn && grid[1][1] === pawn && grid[0][2] === pawn) return pawn;
    }
    return "";
}

module.exports = {
    addPawnToGrid,
    displayGrid,
    getWinner
};