const { addPawnToGrid } = require(".");

test('should add a player pawn to the grid', () => {
    let grid = [["", "", ""],["", "", ""],["", "", ""]];
    let pawn = "x";
    let x = 0;
    let y = 0;
    expect(addPawnToGrid(grid, pawn, x, y)).toBe("");
    expect(grid).toStrictEqual([["x", "", ""],["", "", ""],["", "", ""]])
});

test('should return "Vous ne pouvez pas placer de pion ici" and not add pawn to the list', () => {
    let grid = [["y", "", ""],["", "", ""],["", "", ""]];
    let pawn = "x";
    let x = 0;
    let y = 0;
    expect(addPawnToGrid(grid, pawn, x, y)).toBe("Vous ne pouvez pas placer de pion ici");
    expect(grid).toStrictEqual([["y", "", ""],["", "", ""],["", "", ""]])
});