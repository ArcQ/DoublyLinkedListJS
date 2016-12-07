var expT = [];

var Dlinkedlist = require('../../src/dlinkedlist');

var linkedListTest = new Dlinkedlist();

var searchForThreeCb, getCurOut;

describe('DLinkedListTest', function () {
  describe('should do basic input and output', function () {
    beforeEach(function(){
      searchForThreeCb = function(node){
        return (node.obj == '3');
      };

      getCurOut = function(){
        var currentNode = linkedListTest.head;

        var output = currentNode.obj;
        currentNode = currentNode.next;
        while(currentNode !== null){
          output = output + ',' + currentNode.obj;
          currentNode = currentNode.next;
        }
        return output;
      };

      linkedListTest = new Dlinkedlist();
    })
    it('should allow input of new values', function()
      {
        linkedListTest.push('1');
        expect(linkedListTest.head).toEqual(jasmine.anything());
        expect(getCurOut()).toEqual('1');
      }
    );
    it('should allow output of new values', function()
      {
        linkedListTest.push('2');
        linkedListTest.push('3');            
        linkedListTest.push('4');
        expect(getCurOut()).toEqual('2,3,4');
      }
    );
  });
  describe('should allow other methods of modifying an initiated list', function () {
    beforeEach(function(){
      linkedListTest = new Dlinkedlist();
      linkedListTest.push('1');
      linkedListTest.push('2');
      linkedListTest.push('3');            
      linkedListTest.push('4');
    })
    it('should allow inserting "v1" before "v2"', function()
      {

        var twoNode = linkedListTest.findFirst(searchForThreeCb);
        if (twoNode !== undefined)
        {
          linkedListTest.insertBefore(twoNode,'5');
        }

        expect(getCurOut()).toEqual('1,2,5,3,4');
      }
    );
    it('should allow inserting "v1" before head', function()
      {
        //insert 6 before head
        var headNode = linkedListTest.head;
        if (headNode !== undefined)
        {
          linkedListTest.insertBefore(headNode,'6');
        }
        expect(getCurOut()).toEqual('6,1,2,3,4');

      }
    );
    it('should allow inserting "v1" before tail', function()
      {
        //insert 7 before tail
        var tailNode = linkedListTest.tail;
        if (tailNode !== undefined)
        {
          linkedListTest.insertBefore(tailNode,'7');
        }
        expect(getCurOut()).toEqual('1,2,3,7,4');
      }
    );

    it('should allow inserting "v1" after "v2"', function()
      {
        //insert 8 after 3
        var threeNode = linkedListTest.findFirst(searchForThreeCb);
        if (threeNode !== undefined)
        {
          linkedListTest.insertAfter(threeNode,'8');
        }
        expect(getCurOut()).toEqual('1,2,3,8,4');
      }
    );
    it('should allow inserting "v1" after head', function()
      {
        //insert 9 after head
        var headNode = linkedListTest.head;
        if (headNode !== undefined)
        {
          linkedListTest.insertAfter(headNode,'9');
        }
        expect(getCurOut()).toEqual('1,9,2,3,4');
      }
    );
    it('should allow inserting "v1" after tail', function()
      {
        //insert 10 after tail
        var tailNode = linkedListTest.tail;
        if (tailNode !== undefined)
        {
          linkedListTest.insertAfter(tailNode,'10');
        }
        expect(getCurOut()).toEqual('1,2,3,4,10');
      }
    );
    it('should allow the removal of nodes based on value', function()
      {
        //remove 3
        var threeNode = linkedListTest.findFirst(searchForThreeCb);
        linkedListTest.remove(threeNode);
        expect(getCurOut()).toEqual('1,2,4');
      }
    );
    it('should allow the removal head node', function()
      {
        //remove head
        var headNode = linkedListTest.head;
        linkedListTest.remove(headNode);
        expect(getCurOut()).toEqual('2,3,4');
      }
    );
    it('should allow the removal of the tail node', function()
      {
        //remove tail
        var tailNode = linkedListTest.tail;
        linkedListTest.remove(tailNode);
        expect(getCurOut()).toEqual('1,2,3');
      }
    );
    it('should allow automatic application of a function on every node`', function()
      {
        var makeNodeZero = function(currentNode){
          currentNode.obj = 0;
        };

        linkedListTest.applyToEveryNode(makeNodeZero);
        expect(getCurOut()).toEqual('0,0,0,0');
      }
    );
    it('should allow automatic backwards application of a function on a subset of the nodes`', function()
      {   
        var i = 0;
        var iterateCallback = function(currentNode){
          currentNode.obj = i;
          i++;
          if(i<3){
            return true;
          }
          else{
            return false;
          }
        };
        var startingNode = linkedListTest.tail.prev;
        linkedListTest.iterate(iterateCallback,false,startingNode,false);
        expect(getCurOut()).toEqual('2,1,0,4');
      }
    );
    it('should allow iteration in a circular manner`', function()
      {   
        var makeNodeTwo = function(currentNode){
          if(currentNode.obj == 2){
            currentNode.obj = 3;
            return false;
          }
          else{
            currentNode.obj = 2;
            return true;
          }
        };
        var startingNode = linkedListTest.tail.prev.prev;
        linkedListTest.iterate(makeNodeTwo,true,startingNode,true);
        expect(getCurOut()).toEqual('2,2,3,2');
      }
    );
    it('should allow removal of all items in list', function()
      {   
        var i = 0;
        linkedListTest.removeAll();
        expect(linkedListTest.tail).toEqual(null);
        expect(linkedListTest.head).toEqual(null);
      }
    );

  });
});
