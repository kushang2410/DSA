//Remove Duplicates from an Array

let arr = [3, 4, 5, 2, 3, 4, 5, 6];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);






//Reverse Array in Sorted Order using Bubble Sort

// let arr = [3, 4, 5, 6, 1, 8];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);







// Transpose the Matrix

// let matrix = [
//     [0, 0, 0, 0],
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3],
//     [4, 4, 4, 4]
// ];

// let transposed = [];

// for (let i = 0; i < matrix[0].length; i++) {
//     transposed[i] = [];
//     for (let j = 0; j < matrix.length; j++) {
//         transposed[i][j] = matrix[j][i];
//     }
// }

// console.log(transposed);





//Rotate By 90

// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];

// let rotated = [];

// for (let i = 0; i < matrix[0].length; i++) {
//     rotated[i] = [];
//     for (let j = 0; j < matrix.length; j++) {
//         rotated[i][j] = matrix[matrix.length - j - 1][i];
//     }
// }

// console.log(rotated);






//Z Traversal

// function zTraversal(matrix) {
//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let result = [];
//     let i = 0,
//         j = 0;
//     let direction = 1; // 1 for upward traversal, -1 for downward traversal

//     while (i < rows && j < cols) {
//         result.push(matrix[i][j]);
//         if (direction === 1) {
//             if (j === cols - 1) {
//                 i++;
//                 direction = -1;
//             } else if (i === 0) {
//                 j++;
//                 direction = -1;
//             } else {
//                 i--;
//                 j++;
//             }
//         } else {
//             if (i === rows - 1) {
//                 j++;
//                 direction = 1;
//             } else if (j === 0) {
//                 i++;
//                 direction = 1;
//             } else {
//                 i++;
//                 j--;
//             }
//         }
//     }
//     return result;
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(zTraversal(matrix));





//Print the elements without the border

// let matrix = [
//     [11, 12, 13, 14],
//     [15, 16, 17, 18],
//     [19, 20, 21, 22],
//     [23, 24, 25, 26]
// ];

// for (let i = 1; i < matrix.length - 1; i++) {
//     for (let j = 1; j < matrix[i].length - 1; j++) {
//         console.log(matrix[i][j] + " ");
//     }
//     console.log();
// }
