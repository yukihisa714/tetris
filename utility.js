const BLOCK_SIZE = 20;
const BLOCKS_COL = 10;
const BLOCKS_ROW = 20;
const FIELD_WIDtH = BLOCK_SIZE * BLOCKS_COL;
const FIELD_HEIGHT = BLOCK_SIZE * BLOCKS_ROW;

const can = document.createElement("canvas");
const con = can.getContext("2d");
can.width = FIELD_WIDtH;
can.height = FIELD_HEIGHT;
// can.style.background = "lightgray";
document.body.appendChild(can);

const fcan = document.createElement("canvas");
const fcon = fcan.getContext("2d");
fcan.width = BLOCK_SIZE * 4;
fcan.height = BLOCK_SIZE * 4 * 5;
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