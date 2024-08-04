function nextGreaterElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = []; 

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = arr[stack[stack.length - 1]];
        }
        stack.push(i);
    }

    return result;
}

const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElements(arr)); 
