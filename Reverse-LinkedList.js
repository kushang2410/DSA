class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }
        console.log('null');
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;  
            current.next = prev; 
            prev = current;      
            current = next;
        }
        this.head = prev; 
    }
}
const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

console.log("Original Linked List:");
ll.printList();

ll.reverse();

console.log("Reversed Linked List:");
ll.printList();
