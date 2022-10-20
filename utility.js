const BLOCK_SIZE = 20;
const BLOCKS_COL = 10;
const BLOCKS_ROW = 20;
const FIELD_WIDtH = BLOCK_SIZE * BLOCKS_COL;
const FIELD_HEIGHT = BLOCK_SIZE * BLOCKS_ROW;

const can = document.getElementById("canvas");
const con = can.getContext("2d");
can.width = FIELD_WIDtH;
can.height = FIELD_HEIGHT;
// can.style.background = "lightgray";
document.body.appendChild(can);

const FUTURE_BLOCKS_COL = 4;
const FUTURE_BLOCKS_ROW = 20;
const FUTURE_FIELD_WIDTH = BLOCK_SIZE * FUTURE_BLOCKS_COL;
const FUTURE_FIELD_HEIGHT = BLOCK_SIZE * FUTURE_BLOCKS_ROW;

const fcan = document.getElementById("f-canvas");
const fcon = fcan.getContext("2d");
fcan.width = FUTURE_FIELD_WIDTH;
fcan.height = FUTURE_FIELD_HEIGHT;
fcan.style.background = "black";
document.body.appendChild(fcan);

/**
 * 
 * @param {Number} min 以上
 * @param {Number} max 未満
 */
function makeRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}