const COLORS = ["darkgray", "skyblue", "yellow", "green", "red", "blue", "orange", "pink"];

const MINO_SHAPE = [
    // none
    undefined,
    // I
    [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
        ], [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ], [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
    ],
    // O
    [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
    ],
    // S
    [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [3, 3, 0, 0],
        ], [
            [0, 0, 0, 0],
            [3, 0, 0, 0],
            [3, 3, 0, 0],
            [0, 3, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 3, 3, 0],
            [3, 3, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 3, 0],
            [0, 0, 3, 0],
        ],
    ],
    // Z
    [
        [
            [0, 0, 0, 0],
            [4, 4, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 4, 0],
            [0, 4, 4, 0],
            [0, 4, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [4, 4, 0, 0],
            [0, 4, 4, 0],
        ], [
            [0, 0, 0, 0],
            [0, 4, 0, 0],
            [4, 4, 0, 0],
            [4, 0, 0, 0],
        ],
    ],
    // J
    [
        [
            [0, 0, 0, 0],
            [5, 0, 0, 0],
            [5, 5, 5, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [5, 5, 5, 0],
            [0, 0, 5, 0],
        ], [
            [0, 0, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [5, 5, 0, 0],
        ],
    ],
    // L
    [
        [
            [0, 0, 0, 0],
            [0, 0, 6, 0],
            [6, 6, 6, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 6, 6, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [6, 6, 6, 0],
            [6, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [6, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 6, 0, 0],
        ],
    ],
    // T
    [
        [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 7, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 7, 0],
            [0, 7, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [7, 7, 7, 0],
            [0, 7, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 0, 0],
            [0, 7, 0, 0],
        ],
    ],
];


class Mino {
    /**
     * 
     * @param {Number} x 出現位置
     * @param {Number} y 出現位置
     * @param {Number} blockSize ブロック一つのサイズ
     * @param {Number} type 1~7までの整数
     * @param {Boolean} reality 実体があるかどうか
     * @param {Object} ctx 描画するCanvasクラスのctx
     */
    constructor(x, y, blockSize, type, reality, ctx) {
        this.x = x;
        this.y = y;
        this.blockSize = blockSize;
        this.type = type;
        this.rotate = 0;
        this.maxStrength = 60 * 1;
        this.strength = this.maxStrength;
        this.deathStart = false;
        this.reality = reality;
        this.ctx = ctx;

        this.fillColor = reality ? COLORS[this.type] : "silver";
        this.strokeColor = reality ? "black" : "lightgray";

        this.keyCount = {
            "ArrowUp": 0,
            "ArrowDown": 0,
            "ArrowLeft": 0,
            "ArrowRight": 0,
            "z": 0,
            "x": 0,
        };
    }
    // ミノをフィールドに固定する
    setMino() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                const p = MINO_SHAPE[this.type][this.rotate][y][x];
                if (p) {
                    field[this.y + y][this.x + x] = p;
                }
            }
        }
    }
    /**
     * ミノが動く先に障害物があるかどうか判断するメソッド
     * @param {Number} mvoeX 左右移動
     * @param {Number} moveY 上下移動
     * @param {Number} rotate 右回転
     * @returns True or False 移動が出来るかどうか
     */
    check(moveX, moveY, rotate) {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (MINO_SHAPE[this.type][(this.rotate + rotate + 4) % 4][y][x]) {
                    const newX = this.x + moveX + x;
                    const newY = this.y + moveY + y;
                    if (newX < 0 || BLOCKS_COL <= newX) return false;
                    if (newY < 0 || BLOCKS_ROW <= newY) return false;
                    if (field[newY][newX]) return false;
                }
            }
        }
        return true;
    }
    /**
     * ミノを動かすメソッド
     * @param {Number} mvoeX 左右移動
     * @param {Number} moveY 上下移動
     * @param {Number} rotate 右回転
     * @returns True or False 移動が出来たかどうか
     */
    moveMino(mvoeX, moveY, rotate) {
        if (this.check(mvoeX, moveY, rotate)) {
            this.x += mvoeX;
            this.y += moveY;
            this.rotate = (this.rotate + rotate + 4) % 4;
            if (this.reality) {
                dropPredictMino();
            }
            drawMain();
            return true;
        }
        else {
            return false;
        }
    }
    // ミノを下まで一気に落とす
    dropMino() {
        while (true) {
            if (!this.moveMino(0, 1, 0)) {
                break;
            }
        }
        if (this.reality) {
            this.setMino();
            removeLine();
            makeMino();
        }
    }
    draw() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                const p = MINO_SHAPE[this.type][this.rotate][y][x];
                if (p) {
                    drawOneBlock(this.x + x, this.y + y, this.blockSize, this.fillColor, this.strokeColor, this.ctx);
                }
            }
        }
    }
    /**
     * キーをカウントするメソッド
     * @param {String} key 例) "ArrowUp"
     * @param {Number} often 
     * @param {Number} x x変異
     * @param {Number} y y変異
     * @param {Number} r rotate変異
     */
    keyControl(key, often, x, y, r) {
        this.keyCount[key] = keyOpe[key] ? this.keyCount[key] + 1 : 0;
        if (this.keyCount[key] % often === 1) this.moveMino(x, y, r);
    }
    update() {

        this.keyControl("ArrowUp", 15, 0, 0, 1);
        this.keyControl("ArrowDown", 10, 0, 1, 0);
        this.keyControl("ArrowLeft", 10, -1, 0, 0);
        this.keyControl("ArrowRight", 10, 1, 0, 0);
        this.keyControl("z", 15, 0, 0, -1);
        this.keyControl("x", 15, 0, 0, 1);

        if (!this.check(0, 1, 0)) {
            if (this.deathStart) {
                this.strength--;
                if (!this.strength) {
                    this.setMino();
                    removeLine();
                    makeMino();
                }
            }
            else {
                this.deathStart = true;
            }
        }
    }
}

function dropPredictMino() {
    predictMino.x = mino.x;
    predictMino.y = mino.y;
    predictMino.rotate = mino.rotate;
    predictMino.type = mino.type;
    predictMino.dropMino();
}

let mino;
let predictMino;
let holdMino;

let typeNums = [1, 2, 3, 4, 5, 6, 7];
let futureMinos = [];

function makeFutureTypes() {
    while (futureMinos.length < FUTURE_BLOCKS_ROW / 4) {
        const num = makeRandom(0, typeNums.length);
        const type = typeNums[num];
        futureMinos.push(new Mino(0, 0, FUTURE_BLOCK_SIZE, type, true, fcan.con));
        typeNums.splice(num, 1);
        if (typeNums.length === 0) {
            typeNums = [1, 2, 3, 4, 5, 6, 7];
        }
    }
}

function makeMino() {
    let newType = futureMinos[0].type;
    mino = new Mino(3, 0, BLOCK_SIZE, newType, true, can.con);
    predictMino = new Mino(3, 0, BLOCK_SIZE, newType, false, can.con);

    futureMinos.shift();
    makeFutureTypes();
    for (const fMino of futureMinos) {
        fMino.y = futureMinos.indexOf(fMino) * 4;
    }
    drawFuture();
    dropPredictMino();
}

makeFutureTypes();
makeMino();

function makeHoldMino() {
    const tmpMino = mino;
    if (holdMino) {
        mino = new Mino(3, 0, BLOCK_SIZE, holdMino.type, true, can.con);
        dropPredictMino();
    }
    else {
        makeMino();
    }
    holdMino = new Mino(0, 0, HOLD_BLOCK_SIZE, tmpMino.type, true, hcan.con);
}

function drawOneBlock(x, y, blockSize, fillColor, strokeColor, ctx) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function drawAllBlocks() {
    for (let y = 0; y < BLOCKS_ROW; y++) {
        for (let x = 0; x < BLOCKS_COL; x++) {
            drawOneBlock(x, y, BLOCK_SIZE, COLORS[field[y][x]], "dimgray", can.con);
        }
    }
}

function drawHold() {
    hcan.clear();
    holdMino.draw();
}

function drawFuture() {
    fcan.clear();
    for (const fMino of futureMinos) {
        fMino.draw();
    }
}

function drawMain() {
    can.clear();
    drawAllBlocks();
    predictMino.draw();
    mino.draw();
}