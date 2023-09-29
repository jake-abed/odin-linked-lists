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
			next = current.nextNode;
		}
		current = next;
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

	toString() {
		let llString = '';
		let current = this.head;
		let next = current.nextNode;
		for (let i = 0; i < this.size; i++) {
			llString += '( ' + JSON.stringify(current.value) + ' )';
			if (next === null) break;
			llString += ' -> ';
			current = next;
			next = current.nextNode;
		}
		return llString;
	}

	insertAt(value, index) {
		if (index < 0 || index >= this.size)
			throw new Error(`${index} is out of range.`);
		let atIndex = this.at(index);
		let afterIndex = atIndex.nextNode;
		return (atIndex.nextNode = new Node(value, afterIndex));
	}

	removeAt(index) {
		if (index < 0 || index >= this.size)
			throw new Error(`${index} is out of range.`);
		if (index === 0) return (this.head = this.head.nextNode);
		let beforeIndex = this.at(index - 1);
		let afterIndex = this.at(index).nextNode;
		let deletedValue = JSON.stringify(this.at(index).value);
		beforeIndex.nextNode = afterIndex;
		return console.log(`${deletedValue} removed at index ${index}.`);
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

//Quick Tests to Demonstrate Linked Lists

let ll1 = new LinkedList('bonobo');

ll1.append('chipmunk');
ll1.prepend('aardvark');
ll1.append('giraffe');
ll1.insertAt('dog', 2);
console.log(ll1.toString());
