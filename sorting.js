class SortedArray {
    constructor(arr) {
        this.array = arr;
    }

    // Find the missing element in a sorted array
    findMissingElement() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== i) {
                return i;
            }
        }
        return this.array.length;
    }

    // Find the smallest number that is greater than or equal to a given target value and is a perfect square
    findSmallestPerfectSquare(target) {
        for (let num of this.array) {
            if (num >= target && Math.sqrt(num) % 1 === 0) {
                return num;
            }
        }
        return null;
    }

    // Find the largest number that is less than or equal to a given target value and is a prime number
    
     largestPrime(target) {
        function isPrime(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;
    
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
    
        let num = target;
        while (num >= 2) {
            if (isPrime(num)) return num;
            num--;
        }
        return null;
    }
    

    // Find the smallest number that is greater than or equal to a given target value and is a Fibonacci number
    findSmallestFibonacci(target) {
        let a = 0,
            b = 1;
        while (b < target) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }

    // Find the largest number that is less than or equal to a given target value and is a power of two

     largestPowerOfTwo(target) {
        let power = 1;
        while (power * 2 <= target) {
            power *= 2;
        }
        return power;
    }
}


const sortedArray = new SortedArray([0, 1, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(sortedArray.findMissingElement());
console.log(sortedArray.findSmallestPerfectSquare(9));
console.log(sortedArray.largestPrime(10));
console.log(sortedArray.findSmallestFibonacci(9));
console.log(sortedArray.largestPowerOfTwo(9));