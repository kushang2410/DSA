function create3DArray(depth, rows, cols) {
     let arr = [];

    for (let i = 0; i < depth; i++) {
        let layer = [];
        for (let j = 0; j < rows; j++) {
           let row = [];
            for (let k = 0; k < cols; k++) {
                row.push(0);
            }
            layer.push(row);
        }
        arr.push(layer);
    }

    return arr;
}

const depth = 3;
const rows = 4;
const cols = 5;

let my3DArray = create3DArray(depth, rows, cols);
console.log(my3DArray);
