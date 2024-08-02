function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const array = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(array, target);
console.log(result); 
