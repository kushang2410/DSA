class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) return true;
  
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    let prev = null;
    let curr = slow;
    while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
  
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf) {
      if (firstHalf.value !== secondHalf.value) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    let prev2 = null;
    let curr2 = prev;
    while (curr2) {
      let nextTemp = curr2.next;
      curr2.next = prev2;
      prev2 = curr2;
      curr2 = nextTemp;
    }
  
    return true;
  }
  
  function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  const arr = [1, 2, 3, 2, 1];
  const head = createLinkedList(arr);
  console.log(isPalindrome(head)); 
  