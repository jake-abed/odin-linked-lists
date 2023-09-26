"use strict";

//LinkedList class or factory - This is the full list
//with all attached methods

class LinkedList {
    constructor(head = null) {
        this.head = new Node(head);
    }

    get tail() {
        let current = this.head;
        let next = current.nextNode;

        while (next) {
                current = next;
                next = current.nextNode;
            }
        return current;
    }

    get size() {
        let i = 0;
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
            i++;
        }
        return i;
    }

    #removeTail() {
        let current = this.head;
        let next = current.nextNode;

        while (next.nextNode) { 
                current = next;
                next = current.nextNode;
            }
        return current.nextNode = null
    }

    pop () {
        let tail = this.tail;
        this.#removeTail();
        return tail;
    }

    append(value) {
        return this.tail.nextNode = new Node(value);
    }

    prepend(value) {
        let valueNode = new Node(value, this.head);
        return this.head = valueNode;
    }

}

//Node class or factory with value property,
//nextNode property (null if not pointing elsewhere)

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const ll1 = new LinkedList('monkey');

console.log(ll1);

ll1.prepend('cat');

ll1.append('dog');
ll1.append('chicken');
ll1.prepend('human');

console.log(ll1);
console.log(ll1.tail);