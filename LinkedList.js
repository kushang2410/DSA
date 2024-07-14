    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
        }

        reverse() {
            let prev = null;
            let current = this.head;
            let next = null;

            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            this.head = prev;
        }

        isPalindrome() {
            let reversedList = new LinkedList();
            let current = this.head;

            while (current != null) {
                reversedList.insertAtStart(current.data);
                current = current.next;
            }

            let temp1 = this.head;
            let temp2 = reversedList.head;

            while (temp1 != null && temp2 != null) {
                if (temp1.data !== temp2.data) {
                    return false;
                }
                temp1 = temp1.next;
                temp2 = temp2.next;
            }

            return true;
        }

        deleteNode(data) {
            let current = this.head;
            let prev = null;

            while (current != null) {
                if (current.data === data) {
                    if (prev == null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    return;
                }
                prev = current;
                current = current.next;
            }
        }

        insertAtPosition(data, position) {
            let newNode = new Node(data);

            if (position === 0) {
                newNode.next = this.head;
                this.head = newNode;
                return;
            }

            let current = this.head;
            let count = 0;
            let prev = null;

            while (current != null && count < position) {
                prev = current;
                current = current.next;
                count++;
            }

            if (count < position) {
                console.log("Position out of bounds");
                return;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        removeFromPosition(position) {
            if (this.head == null) {
                console.log("List is empty");
                return;
            }

            if (position === 0) {
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            let count = 0;
            let prev = null;

            while (current != null && count < position) {
                prev = current;
                current = current.next;
                count++;
            }

            if (current == null) {
                console.log("Position out of bounds");
                return;
            }

            prev.next = current.next;
        }

        insertAtStart(data) {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
        }

        display() {
            let current = this.head;
            let result = '';
            while (current != null) {
                result += current.data + " -> ";
                current = current.next;
            }
            console.log(result + "null");
        }
    }

    let list = new LinkedList();
    list.insertAtStart(1);
    list.insertAtStart(2);
    list.insertAtStart(3);
    list.insertAtStart(2);
    list.insertAtStart(1);

    console.log("Original Linked List:");
    list.display();

    console.log("Is Palindrome:", list.isPalindrome());

    list.reverse();
    console.log("Reversed Linked List:");
    list.display();

    list.deleteNode(3);
    console.log("Linked List after deleting node with data 3:");
    list.display();

    list.insertAtPosition(2, 3);
    console.log("Linked List after inserting 4 at position 2:");
    list.display();

    list.removeFromPosition(2);
    console.log("Linked List after removing element at position 2:");
    list.display();
