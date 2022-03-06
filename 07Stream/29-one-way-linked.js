class Node {
    constructor(ele,next) {
        this.element = ele;
        this.next = next;
    }
}

class LinkedList {
    constructor(head,size) {
        this.head = null;
        this.size = 0;
    }

    _getNode(index) {
        if(index < 0 || index >= this.size) {
            throw new Error('越界了');
        }
        let currentNode = this.head;
        for(let i = 0; i < index ; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    add(index,element) {
        if(arguments.length === 1) {
            element = index;
            index = this.size;
        }

        if(index < 0 || index > this.size) {
            throw new Error('cross the border');
            return;
        }

        if(index === 0) {
            let head = this.head;//保存原有head的指向
            this.head = new Node(element,head);
        }else {
            let preNode = this._getNode(index - 1);
            preNode.next = new Node(element,preNode.next);
        }
        this.size ++;
    }

    remove(index) {
        let rmNode = null;
        if(index === 0) {
            rmNode = this.head;
            if(!rmNode) {
                return undefined;
            }
            this.head = rmNode.next;
        }else {
            let preNode = this._getNode(index - 1);
            rmNode = preNode.next;
            preNode.next = rmNode.next;
        }
        this.size --;
        return rmNode;
    }

    set(index,element) {
        let currentNode = this._getNode(index);
        currentNode.element = element;
    }

    get(index) {
        return this._getNode(index);
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}


// const l1 = new LinkedList();
// l1.add('node1');
// l1.add('node2');
// l1.add(1,'node3');

// l1.set(1,'node3-3');
// l1.remove(1);
// console.log(l1);
// console.log(l1.get(1));


class Queue{
    constructor() {
        this.linkedList = new LinkedList();
    }

    enQueue(data) {
        this.linkedList.add(data);
    }

    deQueue() {
        return this.linkedList.remove(0);
    }
}

// const q = new Queue();

// q.enQueue('node1');
// q.enQueue('node2');

// let a = q.deQueue();
// a = q.deQueue();
// a = q.deQueue();


// console.log(a);

module.exports = Queue;