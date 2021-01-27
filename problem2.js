/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var l1 = [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
  ],
  l2 = [5, 6, 4];
var target = -8;

var output = [];

function problem() {
  const list1 = createListNode(l1); //new ListNode(1, new ListNode(0, new ListNode(9)));
  const list2 = createListNode(l2); ////new ListNode(5, new ListNode(7, new ListNode(8)));

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  function createListNode(input) {
    let a = null;
    let pointer;

    input.forEach((i) => {
      if (a == null) {
        a = new ListNode(i);
        pointer = a;
      } else {
        pointer.next = new ListNode(i);
        pointer = pointer.next;
      }
    });

    return a;
  }

  function readValues(input) {
    let current = input;
    const result = [];

    while (current) {
      let val = current.val;
      let next = current.next;
      current = next;
      if (val || val === 0) result.push(val);
    }

    return BigInt(result.reverse().join(""));
  }

  var a = readValues(list1);
  var b = readValues(list2);

  let finalResult;
  let pointer = null;

  String(a + b)
    .split("")
    .reverse()
    .forEach((item) => {
      if (!finalResult) {
        finalResult = new ListNode(item);
        pointer = finalResult;
      } else if (pointer) {
        pointer.next = new ListNode(item);
        pointer = pointer.next;
      }
    });

  return finalResult;
}

console.log(problem());
