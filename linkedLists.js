"use strict";

//LinkedList class or factory - This is the full list
//with all attached methods

//Node class or factory with value property,
//nextNode property (null if not pointing elsewhere)

function Node(value, nextNode = 'null') {
    return { value, nextNode };
}

const testNode = Node({dog: 'Woof', cat: 'Meow'});

console.log(testNode);