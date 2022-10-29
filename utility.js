class Canvas {
    /**
     * キャンバスクラス
     * @param {String} id canvasId
     * @param {Number} width 横幅(px)
     * @param {Number} height 縦幅(px)
     * @param {String} color backgroundcolor
     */
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

class Table {
    constructor(id, tdId, col, row, color) {
        this.id = id;
        this.tdId = tdId;
        this.col = col;
        this.row = row;
        this.color = color;

        this.tableElm = document.getElementById(this.id);
        this.array = [];
        for (let row = 0; row < this.row; row++) {
            const tr = document.createElement("tr");
            this.tableElm.appendChild(tr);
            this.array[row] = [];
            for (let col = 0; col < this.col; col++) {
                const td = document.createElement("td");
                td.style.background = this.color;
                td.classList.add(this.tdId);
                tr.appendChild(td);
                this.array[row][col] = { num: 0, elm: td };
            }
        }
    }
    clearColor() {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                this.array[row][col].elm.style.background = this.color;
            }
        }
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
    constructor(blockSize, col, row, canvasId, canvasColor, tableId, tableColor, tdId) {
        this.blockSize = blockSize;
        this.blocksCol = col;
        this.blocksRow = row;
        this.width = this.blockSize * this.blocksCol;
        this.height = this.blockSize * this.blocksRow;

        this.canvasId = canvasId;
        this.canvasColor = canvasColor;
        this.canvas = new Canvas(this.canvasId, this.width, this.height, this.canvasColor);
        this.array = make2dArray(this.blocksCol, this.blocksRow);
        this.tableId = tableId;
        this.tableColor = tableColor;
        this.tdId = tdId;
        this.table = new Table(this.tableId, this.tdId, this.blocksCol, this.blocksRow, this.tableColor);

        this.minos = [];
    }
    draw() {
        this.table.clearColor();
        fusionArrays(this);
        // this.table.reflectColor();
    }
}

const FIELDS = {
    hold: new Field(15, 4, 4, "h-canvas", "darkgray", "hold-table", "darkgray", "hold-td"),
    main: new Field(20, 10, 20, "canvas", "darkgray", "main-table", "darkgray", "main-td"),
    future: new Field(15, 4, 20, "f-canvas", "darkgray", "future-table", "darkgray", "future-td"),
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
