class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
    push(element) {
        this.items.unshift(element); 
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.shift(); 
    }

    // Sort elements in ascending order
    sort() {
        if (this.isEmpty()) return;

        const sortedStack = new Stack();
        while (!this.isEmpty()) {
            const temp = this.items.pop();

            while (!sortedStack.isEmpty() && sortedStack.peek() > temp) {
                this.items.push(sortedStack.pop());
            }

            sortedStack.push(temp);
        }

        while (!sortedStack.isEmpty()) {
            this.items.push(sortedStack.pop());
        }
    }



    // Reverse elements of the stack
    reverse() {
        const reversedStack = new Stack();
        while (!this.isEmpty()) {
            reversedStack.push(this.items.pop());
        }
        this.items = reversedStack.items;
    }



    // Find maximum & minimum element in the stack
    findMax() {
        if (this.isEmpty()) return null;
        return Math.max(...this.items);
    }

    findMin() {
        if (this.isEmpty()) return null;
        return Math.min(...this.items);
    }


    // Count all stack elements
    count() {
        return this.items.length;
    }



    // Find common elements between two stacks

    findCommonElements(stack2) {
        const commonElements = [];
        const tempStack = new Stack();

        while (!this.isEmpty()) {
            const item = this.pop();
            tempStack.push(item);
            if (stack2.items.includes(item)) {
                commonElements.push(item);
            }
        }

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }

        return commonElements;
    }

}

const stack = new Stack();

stack.push(4);
stack.push(2);
stack.push(6);
stack.push(1);
stack.push(5);

console.log("Original stack:", stack.items);

stack.sort();
console.log("Sorted stack:", stack.items);

stack.reverse();
console.log("Reversed stack:", stack.items);

console.log("Maximum element:", stack.findMax());
console.log("Minimum element:", stack.findMin());

console.log("Number of elements:", stack.count());

const stack2 = new Stack();
stack2.push(5);
stack2.push(2);
stack2.push(8);

console.log("Second stack:", stack2.items);

console.log("Common elements:", stack.findCommonElements(stack2));