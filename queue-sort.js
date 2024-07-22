class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  
    sortQueue() {
      for (let i = 0; i < this.items.length - 1; i++) {
        for (let j = 0; j < this.items.length - 1 - i; j++) {
          if (this.items[j] > this.items[j + 1]) {
            let temp = this.items[j];
            this.items[j] = this.items[j + 1];
            this.items[j + 1] = temp;
          }
        }
      }
    }
  }
  
  const queue = new Queue();
  queue.enqueue(3);
  queue.enqueue(1);
  queue.enqueue(4);
  queue.enqueue(2);
  
  console.log("Queue before sorting: ");
  console.log(queue.printQueue());
  
  queue.sortQueue();
  
  console.log("Queue after sorting: ");
  console.log(queue.printQueue());
  