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
     * テトリミノクラス
     * @param {Number} x 出現位置
     * @param {Number} y 出現位置
     * @param {Number} blockSize ブロック一つのサイズ
     * @param {Number} type 1~7までの整数
     * @param {Boolean} reality 実体があるかどうか
     * @param {Object} ctx 描画するCanvasクラスのctx
     */
    constructor(x, y, blockSize, type, reality) {
        this.x = x;
        this.y = y;
        this.blockSize = blockSize;
        this.type = type;
        this.rotate = 0;
        this.maxStrength = 60 * 1;
        this.damage = 0;
        this.deathStart = false;
        this.reality = reality;

        this.fillColor = reality ? COLORS[this.type] : "#ccc";
        this.strokeColor = reality ? "black" : "lightgray";

        this.keyCount = {
            "ArrowUp": {
                count: 0,
                often: 15,
                x: 0,
                y: 0,
                rotate: 1,
            },
            "ArrowDown": {
                count: 0,
                often: 9,
                x: 0,
                y: 1,
                rotate: 0,
            },
            "ArrowLeft": {
                count: 0,
                often: 9,
                x: -1,
                y: 0,
                rotate: 0,
            },
            "ArrowRight": {
                count: 0,
                often: 9,
                x: 1,
                y: 0,
                rotate: 0,
            },
            "z": {
                count: 0,
                often: 15,
                x: 0,
                y: 0,
                rotate: -1,
            },
            "x": {
                count: 0,
                often: 15,
                x: 0,
                y: 0,
                rotate: 1,
            },
        };
    }
    // ミノをフィールドに固定する
    setMino() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                const p = MINO_SHAPE[this.type][this.rotate][y][x];
                if (p) {
                    FIELDS.main.array[this.y + y][this.x + x] = p;
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
                    if (newX < 0 || FIELDS.main.col <= newX) return false;
                    if (newY < 0 || FIELDS.main.row <= newY) return false;
                    if (FIELDS.main.array[newY][newX]) return false;
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
            FIELDS.main.draw();
            return true;
        }
        else {
            return false;
        }
    }
    // ミノを下まで一気に落とす
    dropMino() {
        while (this.moveMino(0, 1, 0)) { }
        if (this.reality) {
            this.setMino();
            removeLine();
            makeMino();
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
    keyControl(key) {
        const p = this.keyCount[key];
        p.count = keyOpe[key] ? p.count + 1 : 0;
        if (p.count % p.often === 1) this.moveMino(p.x, p.y, p.rotate);
    }
    update() {

        this.keyControl("ArrowUp");
        this.keyControl("ArrowDown");
        this.keyControl("ArrowLeft");
        this.keyControl("ArrowRight");
        this.keyControl("z");
        this.keyControl("x");

        if (!this.check(0, 1, 0)) {
            if (this.deathStart) {
                this.damage++;
                if (this.damage === this.maxStrength) {
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
    const normalMino = FIELDS.main.minos[1];
    const predictMino = FIELDS.main.minos[0];
    predictMino.x = normalMino.x;
    predictMino.y = normalMino.y;
    predictMino.rotate = normalMino.rotate;
    predictMino.type = normalMino.type;
    predictMino.dropMino();
}

let typeNums = [1, 2, 3, 4, 5, 6, 7];

function makeFutureTypes() {
    while (FIELDS.future.minos.length < FIELDS.future.row / 4) {
        const num = makeRandom(0, typeNums.length);
        const type = typeNums[num];
        FIELDS.future.minos.push(new Mino(0, 0, FIELDS.future.blockSize, type, true));
        typeNums.splice(num, 1);
        if (!typeNums.length) {
            typeNums = [1, 2, 3, 4, 5, 6, 7];
        }
    }
}

function makeMino() {
    const newType = FIELDS.future.minos[0].type;
    FIELDS.main.minos[1] = new Mino(3, 0, FIELDS.main.blockSize, newType, true);
    FIELDS.main.minos[0] = new Mino(3, 0, FIELDS.main.blockSize, newType, false);

    FIELDS.future.minos.shift();
    makeFutureTypes();
    for (const fMino of FIELDS.future.minos) {
        fMino.y = FIELDS.future.minos.indexOf(fMino) * 4;
    }
    FIELDS.future.draw();
    dropPredictMino();
}

makeFutureTypes();
makeMino();

function makeHoldMino() {
    const tmpMino = FIELDS.main.minos[1];
    if (FIELDS.hold.minos[0]) {
        FIELDS.main.minos[1] = new Mino(3, 0, FIELDS.main.blockSize, FIELDS.hold.minos[0].type, true);
        dropPredictMino();
    }
    else {
        makeMino();
    }
    FIELDS.hold.minos[0] = new Mino(0, 0, FIELDS.hold.blockSize, tmpMino.type, true);
}
