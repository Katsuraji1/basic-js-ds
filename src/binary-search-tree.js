const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
constructor(){
  this.mainRoot = null
}

  root() {
    return this.mainRoot
  }

  add(data) {
  this.mainRoot = addWithin(this.mainRoot,data)
  function addWithin(node,data){
    if(!node){
      return new Node(data)
    }
    if(node.data == data){
      return node
    }
    if(node.data>data){
      node.left = addWithin(node.left,data)
    }else{
      node.right = addWithin(node.right,data)
    }
    return node;
  }
  }

  has(data) {
    return search(this.mainRoot,data)
    function search(node,data){
      if(!node){
        return false
      }
      if(node.data === data){
        return true
      }

      return node.data>data ? search(node.left,data) : search(node.right,data)
    }
  }

  find(data) {
    return searchWithin(this.mainRoot,data)

    function searchWithin(node,data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node
      }

      return node.data>data ? searchWithin(node.left,data) : searchWithin(node.right,data)
    }
  }

  remove(data) {
    this.mainRoot = removeNode(this.mainRoot,data)

    function removeNode(node,data){
      if(!node){
        return null;
      }
      if(node.data>data){
        node.left = removeNode(node.left,data)
        return node;
      }else if(node.data<data){
        node.right = removeNode(node.right,data)
        return node;
      }else{
        if(!node.right && !node.left){
          return null;
        }
        if(!node.right){
          node = node.left
          return node
        }
        if(!node.left){
          node = node.right
          return node
        }

        let mimFromRight = node.right
        while(mimFromRight.left){
          mimFromRight = mimFromRight.left
        }
        
        node.data = mimFromRight.data

        node.right = removeNode(node.right,mimFromRight.data)
        return node;
      }
    }
  }

  min() {
    if(!this.mainRoot){
      return;
    }
    let node = this.mainRoot
    while(node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    if(!this.mainRoot){
      return;
    }
    let node = this.mainRoot
    while(node.right){
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};