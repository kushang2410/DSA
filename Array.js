// //Deleting an element from an array without using any additional data structure

function deleteElement(arr, index) {
    if (index < 0 || index >= arr.length) {
        return arr;
    }
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let indexToDelete = 2;
deleteElement(arr, indexToDelete);
console.log(arr);

//Finding the nearest smaller number for every element in an array

function nearestSmallerToLeft(arr1) {
    const result = [];
    const stack = [];

    for (let i = 0; i < arr1.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr1[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(arr1[i]);
    }

    return result;
}

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(nearestSmallerToLeft(arr1));

//Reverse a Stack using Recursion:

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    reverse() {
        if (!this.isEmpty()) {
            let temp = this.pop();
            this.reverse();
            this.insertAtBottom(temp);
        }
    }

    insertAtBottom(item) {
        if (this.isEmpty()) {
            this.push(item);
        } else {
            let temp = this.pop();
            this.insertAtBottom(item);
            this.push(temp);
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.reverse();
console.log(stack.items);

// //Finding the maximum absolute difference between nearest left and right smaller elements

function maxAbsoluteDifference(arr2) {
    let leftSmaller = [];
    let rightSmaller = [];
    let stack = [];

    for (let i = 0; i < arr2.length; i++) {
        while (stack.length > 0 && arr2[stack[stack.length - 1]] >= arr2[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            leftSmaller.push(-1);
        } else {
            leftSmaller.push(stack[stack.length - 1]);
        }
        stack.push(i);
    }

    stack = [];

    for (let i = arr2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr2[stack[stack.length - 1]] >= arr2[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            rightSmaller[i] = arr2.length;
        } else {
            rightSmaller[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let maxDiff = -1;
    for (let i = 0; i < arr2.length; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(rightSmaller[i] - leftSmaller[i]) - 1);
    }

    return maxDiff;
}

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maxAbsoluteDifference(arr2));

//Finding the number of subarrays whose first element is not greater than other elements of the subarray


function countSubarrays(arr3) {
    let count = 0;
    for (let i = 0; i < arr3.length; i++) {
        for (let j = i; j < arr3.length; j++) {
            if (arr3[i] <= arr3[j]) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
}

let arr3 = [1, 2, 3, 4, 5];
console.log(countSubarrays(arr3));