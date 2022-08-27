'use strict';

let  HashTable  = require('../Hash-Tables/index');


function tree_intersection(tree1, tree2) {
  let treeResults1 = tree1.postOrder(tree1.root);
  let treeResults2 = tree2.postOrder(tree2.root);

  let Repeated = [];
  let hashMap = new HashTable();
   
  for (let index = 0; index < treeResults1.length; index++) {
    hashMap.set(treeResults1[index], 1);
  }

  for (let index = 0; index < treeResults2.length; index++) {
    if (hashMap.contains(treeResults2[index])) {
      Repeated.push(treeResults2[index]);
    }
  }
  
  return Repeated;
}

module.exports = tree_intersection;