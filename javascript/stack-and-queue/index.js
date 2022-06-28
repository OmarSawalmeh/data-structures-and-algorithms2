const Stack = require('./stack/Stack');
const Queue = require('./queue/queue');
const PseudoQueue = require('./ pseudo-queue/ pseudo-queue');
const AnimalShelter = require('./stack-queue-animal-shelter/AnimalShelter');

console.log('---------- Stack ---------');
const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.peek()); // 3
newStack.pop();
newStack.pop();
console.log(newStack.peek()); // 1
newStack.pop();
newStack.pop();

console.log('---------- Queue ---------');
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);

console.log('----------  Pseudo Queue ---------');
const pQ = new PseudoQueue();
pQ.enqueue(1);
pQ.enqueue(2);
pQ.enqueue(3);
console.log(pQ);
console.log('peak', pQ.stack1.peek());


let de1 = pQ.dequeue();
console.log('Dequeue-----', de1);

pQ.dequeue();
pQ.dequeue();
pQ.dequeue();
pQ.dequeue();

console.log('---------- AnimalShelter ---------');
const anim = new AnimalShelter();
anim.enqueue('cat');
anim.enqueue('dog');
anim.enqueue('dog');
anim.enqueue('cat');
anim.enqueue('dog');
console.log('Queue Length is', anim.length);

console.log(anim.dequeue());
console.log(anim.dequeue('dog3'));
console.log(anim.dequeue('dog'));
console.log(anim.dequeue('dog'));
console.log(anim.dequeue('cat'));
console.log('Queue Length is', anim.length);

console.log('---------- validateBrackets ---------');

const newStack2 = new Stack();
console.log(newStack2.validateBrackets('{}'));
console.log(newStack2.validateBrackets('{}(){}'));
console.log(newStack2.validateBrackets('()[[Extra Characters]]'));
console.log(newStack2.validateBrackets('(){}[[]]'));
console.log(newStack2.validateBrackets('{}{Code}[Fellows](())'));
console.log(newStack2.validateBrackets('[({}]'));
console.log(newStack2.validateBrackets('(]('));
console.log(newStack2.validateBrackets('{(})'));













