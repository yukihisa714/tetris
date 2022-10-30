class Table {
    constructor(id, tdClass, col, row, fillColor, strokeColor) {
        this.id = id;
        this.tdClass = tdClass;
        this.col = col;
        this.row = row;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;

        this.tableElm = document.getElementById(this.id);
        this.array = [];
        for (let row = 0; row < this.row; row++) {
            const tr = document.createElement("tr");
            this.tableElm.appendChild(tr);
            this.array[row] = [];
            for (let col = 0; col < this.col; col++) {
                const td = document.createElement("td");
                td.style.background = this.fillColor;
                td.style.borderColor = this.strokeColor;
                td.classList.add(this.tdClass);
                tr.appendChild(td);
                this.array[row][col] = { num: 0, elm: td };
            }
        }
    }
    clearColor() {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                this.array[row][col].elm.style.background = this.fillColor;
                // this.array[row][col].elm.style.borderColor = this.strokeColor;
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
    constructor(blockSize, col, row, tableId, tableColor, tdClass) {
        this.blockSize = blockSize;
        this.blocksCol = col;
        this.blocksRow = row;
        this.width = this.blockSize * this.blocksCol;
        this.height = this.blockSize * this.blocksRow;

        this.array = make2dArray(this.blocksCol, this.blocksRow);
        this.tableId = tableId;
        this.tableColor = tableColor;
        // this.tableStrokeColor = tableStrokeColor;
        this.tdClass = tdClass;
        this.table = new Table(this.tableId, this.tdClass, this.blocksCol, this.blocksRow, this.tableColor);

        this.minos = [];
    }
    draw() {
        this.table.clearColor();
        for (let row = 0; row < this.blocksRow; row++) {
            for (let col = 0; col < this.blocksCol; col++) {
                const p = this.array[row][col];
                const k = this.table.array[row][col];
                k.num = p;
                k.elm.style.background = COLORS[p];
            }
        }
        if (!this.minos) return;
        for (const mino of this.minos) {
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    const p = MINO_SHAPE[mino.type][mino.rotate][y][x];
                    if (p) {
                        const k = this.table.array[mino.y + y][mino.x + x];
                        k.num = p;
                        k.elm.style.background = mino.fillColor;
                        // k.elm.style.borderColor = mino.strokeColor;
                    }
                }
            }
        }
    }
}

const FIELDS = {
    hold: new Field(15, 4, 4, "hold-table", "darkgray", "hold-td"),
    main: new Field(20, 10, 20, "main-table", "darkgray", "main-td"),
    future: new Field(15, 4, 20, "future-table", "darkgray", "future-td"),
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
