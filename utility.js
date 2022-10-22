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

let holdField = make2dArray(HOLD_BLOCKS_COL, HOLD_BLOCKS_ROW);
let field = make2dArray(BLOCKS_COL, BLOCKS_ROW);
let futureField = make2dArray(FUTURE_BLOCKS_COL, FUTURE_BLOCKS_ROW);

/**
 * 範囲を指定して整数の乱数を返す関数
 * @param {Number} min 以上
 * @param {Number} max 未満
 */
function makeRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 二次元配列を作る関数
 * @param {Number} col 横幅
 * @param {Number} row 縦幅
 * @returns 
 */
function make2dArray(col, row) {
    let array = [];
    for (let Row = 0; Row < row; Row++) {
        array[Row] = Array(col).fill(0);
    }
    return array;
}
