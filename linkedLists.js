'use strict';

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
		return i + 1;
	}

	#removeTail() {
		let current = this.head;
		let next = current.nextNode;

		while (next.nextNode) {
			current = next;
			next = current.nextNode;
		}
		return (current.nextNode = null);
	}

	pop() {
		let tail = this.tail;
		this.#removeTail();
		return tail;
	}

	append(value) {
		return (this.tail.nextNode = new Node(value));
	}

	prepend(value) {
		let valueNode = new Node(value, this.head);
		return (this.head = valueNode);
	}

	at(index) {
		let current = this.head;
		let nextNode = current.nextNode;
		for (let i = 0; i < index; i++) {
			current = nextNode;
			nextNode = current.nextNode;
		}
		return current;
	}

	contains(value) {
		let current = this.head;
		let nextNode = current.nextNode;
		let found = false;
		while (nextNode) {
			if (JSON.stringify(value) === JSON.stringify(current.value)) {
				found = true;
				break;
			}
			current = nextNode;
			nextNode = current.nextNode;
		}
		if (JSON.stringify(value) == JSON.stringify(current.value)) {
			found = true;
		}
		return found;
	}

	find(value) {
		let current = this.head;
		let nextNode = current.nextNode;
		let found = false;
		let i = 0;
		while (i < this.size - 1) {
			if (JSON.stringify(value) === JSON.stringify(current.value)) {
				found = true;
				break;
			} else {
				current = nextNode;
				nextNode = current.nextNode;
				i++;
			}
		}
		if (JSON.stringify(value) === JSON.stringify(current.value)) {
			found = true;
		}
		if (!found) return null;
		return i;
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
