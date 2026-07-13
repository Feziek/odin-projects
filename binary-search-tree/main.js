import Tree from './src/Bst.js';
import prettyPrint from './src/prettyPrint.js';

const t = new Tree([1, 8, 9, 45, 90, 99, 66, 12, 4, 20, 22, 11, 18, 54, 45]);

console.log(t.isBalanced()); // true

console.log('--------------------------');
console.log('Level Order:');
t.levelOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Pre-Order:');
t.preOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Inorder:');
t.inOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Post-Order:');
t.postOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');

t.insert(101);
t.insert(102);
t.insert(103);
t.insert(104);
t.insert(105);

console.log(t.isBalanced()); // false
t.rebalance();
console.log(t.isBalanced()); // true

console.log('--------------------------');
console.log('Level Order:');
t.levelOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Pre-Order:');
t.preOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Inorder:');
t.inOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');
console.log('Post-Order:');
t.postOrderForEach((x) => {
  console.log(x);
});
console.log('--------------------------');

//use the code below to clearly visualize the tree:
//prettyPrint(t.root);
