const colors = ["darkgray", "skyblue", "yellow", "green", "red", "blue", "orange", "pink"];

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
    constructor(x, y, type, reality, ctx) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.rotate = 0;
        this.maxStrength = 60 * 1;
        this.strength = this.maxStrength;
        this.deathStart = false;
        this.reality = reality;
        this.ctx = ctx;

        this.fillColor = reality ? colors[this.type] : "silver";
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
    // ミノが動く先に障害物があるかどうか判断する
    /**
     * 
     * @param {Number} mvoeX 左右移動
     * @param {Number} moveY 上下移動
     * @param {Number} rotate 右回転
     * @returns True or False
     */
    check(mvoeX, moveY, rotate) {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (MINO_SHAPE[this.type][(this.rotate + rotate + 4) % 4][y][x]) {
                    if (this.x + mvoeX + x < 0 || BLOCKS_COL <= this.x + mvoeX + x) return false;
                    if (this.y + moveY + y < 0 || BLOCKS_ROW <= this.y + moveY + y) return false;
                    if (field[this.y + moveY + y][this.x + mvoeX + x]) return false;
                }
            }
        }
        return true;
    }
    // ミノを動かす
    /**
     * 
     * @param {Number} mvoeX 左右移動
     * @param {Number} moveY 上下移動
     * @param {Number} rotate 右回転
     * @returns 
     */
    moveMino(mvoeX, moveY, rotate) {
        if (this.check(mvoeX, moveY, rotate)) {
            this.x += mvoeX;
            this.y += moveY;
            this.rotate += rotate;
            this.rotate = (this.rotate + 4) % 4;
        }
    }
    // ミノを下まで一気に落とす
    dropMino() {
        while (this.check(0, 1, 0)) {
            this.moveMino(0, 1, 0);
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
                    drawOneBlock(this.x + x, this.y + y, this.fillColor, this.strokeColor, this.ctx);
                }
            }
        }
    }
    /**
     * 
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

let mino;
let predictMino;

let typeNums = [1, 2, 3, 4, 5, 6, 7];
let futureTypes = [];
let futureMinos = [];

function makeFutureTypes() {
    while (futureTypes.length < 7) {
        const num = makeRandom(0, typeNums.length);
        const type = typeNums[num];
        futureTypes.push(type);
        futureMinos.push(new Mino(0, (futureMinos.length - 1) * 4, type, true, fcon));
        typeNums.splice(num, 1);
        if (typeNums.length === 0) {
            typeNums = [1, 2, 3, 4, 5, 6, 7];
        }
    }
}
makeFutureTypes();

function makeMino() {
    let newMino = futureTypes[0];
    mino = new Mino(3, 0, newMino, true, con);
    predictMino = new Mino(3, 0, newMino, false, con);
    futureTypes.shift();
    futureMinos.shift();
    for (const fMino of futureMinos) {
        fMino.y = futureMinos.indexOf(fMino) * 4;
    }
    makeFutureTypes();
    console.log(futureTypes);
    console.log(newMino);
}

makeMino();
