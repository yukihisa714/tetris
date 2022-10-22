const HOLD_BLOCK_SIZE = 15;
const HOLD_BLOCKS_COL = 4;
const HOLD_BLOCKS_ROW = 4;
const HOLD_FIELD_WIDTH = HOLD_BLOCK_SIZE * HOLD_BLOCKS_COL;
const HOLD_FIELD_HEIGHT = HOLD_BLOCK_SIZE * HOLD_BLOCKS_ROW;

const BLOCK_SIZE = 20;
const BLOCKS_COL = 10;
const BLOCKS_ROW = 20;
const FIELD_WIDtH = BLOCK_SIZE * BLOCKS_COL;
const FIELD_HEIGHT = BLOCK_SIZE * BLOCKS_ROW;

const FUTURE_BLOCK_SIZE = 15;
const FUTURE_BLOCKS_COL = 4;
const FUTURE_BLOCKS_ROW = 20;
const FUTURE_FIELD_WIDTH = FUTURE_BLOCK_SIZE * FUTURE_BLOCKS_COL;
const FUTURE_FIELD_HEIGHT = FUTURE_BLOCK_SIZE * FUTURE_BLOCKS_ROW;


class Canvas {
    constructor(id, width, height, color) {
        this.can = document.getElementById(id);
        this.con = this.can.getContext("2d");
        this.can.width = width;
        this.can.height = height;
        this.can.style.background = color;
    }
}

const hcan = new Canvas("h-canvas", HOLD_FIELD_WIDTH, HOLD_FIELD_HEIGHT, "darkgray");
const can = new Canvas("canvas", FIELD_WIDtH, FIELD_HEIGHT, "darkgray");
const fcan = new Canvas("f-canvas", FUTURE_FIELD_WIDTH, FUTURE_FIELD_HEIGHT, "darkgray");


let holdField = [];
for (let row = 0; row < HOLD_BLOCKS_ROW; row++) {
    holdField[row] = Array(HOLD_BLOCKS_COL).fill(0);
}

let field = [];
for (let row = 0; row < BLOCKS_ROW; row++) {
    field[row] = Array(BLOCKS_COL).fill(0);
}

let futureField = [];
for (let row = 0; row < FUTURE_BLOCKS_ROW; row++) {
    futureField[row] = Array(FUTURE_BLOCKS_COL).fill(0);
}

/**
 * 
 * @param {Number} min 以上
 * @param {Number} max 未満
 */
function makeRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}