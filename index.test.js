const {
    addPawnToGrid,
    displayGrid,
    getWinner
} = require(".");

/* ADD PLAYER */
test('should add a player pawn to the grid', () => {
    let grid = [["", "", ""], ["", "", ""], ["", "", ""]];
    let pawn = "x";
    let x = 0;
    let y = 0;
    expect(addPawnToGrid(grid, pawn, x, y)).toBe("");
    expect(grid).toStrictEqual([["x", "", ""], ["", "", ""], ["", "", ""]])
});

test('should return Vous ne pouvez pas placer de pion ici and not add pawn to the list', () => {
    let grid = [["y", "", ""], ["", "", ""], ["", "", ""]];
    let pawn = "x";
    let x = 0;
    let y = 0;
    expect(addPawnToGrid(grid, pawn, x, y)).toBe("Vous ne pouvez pas placer de pion ici");
    expect(grid).toStrictEqual([["y", "", ""], ["", "", ""], ["", "", ""]])
});

/* DISPLAY GRID */
test('should display grid', () => {
    let grid = [["y", "x", "x"], ["y", "x", "y"], ["x", "y", "x"]];
    expect(displayGrid(grid)).toBe("y | x | x\ny | x | y\nx | y | x\n");
});

test('should display grid version 2', () => {
    let grid = [["o", "o", "o"], ["x", "x", "x"], ["o", "o", "o"]];
    expect(displayGrid(grid)).toBe("o | o | o\nx | x | x\no | o | o\n");
});

/* GET WINNER */
test('should return o as winner', () => {
    let grid = [["o", "o", "o"], ["x", "o", "o"], ["x", "x", "o"]];
    let pawns = ["o", "x"];
    expect(getWinner(grid, pawns)).toBe("o");
});

test('should return x as winner', () => {
    let grid = [["x", "x", "x"], ["x", "o", "x"], ["x", "o", "x"]];
    let pawns = ["o", "x"];
    expect(getWinner(grid, pawns)).toBe("x");
});

test('should return no winner', () => {
    let grid = [
        ["x", "o", "x"],
        ["o", "x", "o"],
        ["o", "x", "o"]
    ];
    let pawns = ["o", "x"];
    expect(getWinner(grid, pawns)).toBe("");
});

