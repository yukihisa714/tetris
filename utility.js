class Canvas {
    constructor(id, width, height, color) {
        this.can = document.getElementById(id);
        this.con = this.can.getContext("2d");
        this.can.width = width;
        this.can.height = height;
        this.can.style.background = color;
    }
    clear() {
        this.con.clearRect(0, 0, this.can.width, this.can.height);
    }
}

class Field {
    /**
     * フィールドクラス
     * @param {Number} blockSize ブロック一つのサイズ
     * @param {Number} col 横
     * @param {Number} row 縦
     * @param {String} canvasId キャンバスのID
     * @param {String} color キャンバスの色
     */
    constructor(blockSize, col, row, canvasId, canvasColor) {
        this.blockSize = blockSize;
        this.blocksCol = col;
        this.blocksRow = row;
        this.width = this.blockSize * this.blocksCol;
        this.height = this.blockSize * this.blocksRow;

        this.canvasId = canvasId;
        this.canvasColor = canvasColor;
        this.canvas = new Canvas(this.canvasId, this.width, this.height, this.canvasColor);
        this.array = make2dArray(this.blocksCol, this.blocksRow);
    }
}

const FIELDS = {
    hold: new Field(15, 4, 4, "h-canvas", "darkgray"),
    main: new Field(20, 10, 20, "canvas", "darkgray"),
    future: new Field(15, 4, 20, "f-canvas", "darkgray"),
};

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
