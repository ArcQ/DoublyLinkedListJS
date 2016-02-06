window = {};
var expT = [];
var assert = require('assert'),
    expect = require('chai').expect,
    DLinkedList = require('../../DLinkedList.js');

process.env.NODE_ENV = 'test';

var linkedListTest = new window.dLinkedList();

var getCurOut = function(){
    var currentNode = linkedListTest.head;
    
    var output = currentNode.obj;
    currentNode = currentNode.next;
    while(currentNode != null){
        output = output + "," + currentNode.obj;
        currentNode = currentNode.next;
    }
    return output;
};


before(function(){
    expT[0] = "1"; 
    expT[1] = "1,2,3,4";
    expT[2] = "6,1,5,2,3,7,4";    
    expT[3] = "6,9,1,5,8,2,3,7,4,10";
    expT[4] = "9,1,8,2,3,7,4";   
    expT[5] = "0,0,0,0,0,0,0";
    expT[6] = "0,0,0,2,1,0,0";
    expT[7] = "2,2,2,3,2,2,2";           
})

//Note: Due to time limits, these tests only ensure the very basic scope of functionality, many required tests still need to be written
describe('DLinkedListTest', function () {
    //T0
    it('should allow input of new values', function()
        {
            linkedListTest.push("1");
            expect(linkedListTest.head).to.exist;
            expect(expT[0]).equal(getCurOut());
        }
    );
    //T1
    it('should allow output of new values', function()
        {
            linkedListTest.push("2");
            linkedListTest.push("3");            
            linkedListTest.push("4");
            expect(expT[1]).equal(getCurOut());
        }
    );
    //T2
    it('should allow inserting "v1" before "v2"', function()
        {
            //insert 5 before 2
            var searchCB = function(node){
                return (node.obj == "2");
            };

            var twoNode = linkedListTest.findFirst(searchCB);
            if (twoNode !== undefined)
            {
                linkedListTest.insertBefore(twoNode,"5");
            }
            //insert 6 before head
            var headNode = linkedListTest.head;
            if (twoNode !== undefined)
            {
                linkedListTest.insertBefore(headNode,"6");
            }
            //insert 7 before tail
            var tailNode = linkedListTest.tail;
            if (tailNode !== undefined)
            {
                linkedListTest.insertBefore(tailNode,"7");
            }

            expect(expT[2]).equal(getCurOut());
        }
    );
    //T3
    it('should allow inserting "v1" after "v2"', function()
        {
            var searchCB = function(node){
                return (node.obj == "5");
            };
            //insert 8 after 5
            var fiveNode = linkedListTest.findFirst(searchCB);
            if (fiveNode !== undefined)
            {
                linkedListTest.insertAfter(fiveNode,"8");
            }
            //insert 9 after head
            var headNode = linkedListTest.head;
            if (headNode !== undefined)
            {
                linkedListTest.insertAfter(headNode,"9");
            }
            //insert 10 after tail
            var tailNode = linkedListTest.tail;
            if (tailNode !== undefined)
            {
                linkedListTest.insertAfter(tailNode,"10");
            }
            expect(expT[3]).equal(getCurOut());
        }
     );
    //T4
    it('should allow the removal of nodes based on value', function()
        {
            var searchCB = function(node){
                return (node.obj == "5");
            };
            //remove 5
            fiveNode = linkedListTest.findFirst(searchCB);
            linkedListTest.remove(fiveNode);
            //remove head
            headNode = linkedListTest.head;
            linkedListTest.remove(headNode);
            //remove tail
            tailNode = linkedListTest.tail;
            linkedListTest.remove(tailNode);
            expect(expT[4]).equal(getCurOut());
        }
    );
    //T5
    it('should allow automatic application of a function on every node`', function()
        {
            var makeNodeZero = function(currentNode){
                currentNode.obj = 0;
                return true;
            }

            linkedListTest.applyToEveryNode(makeNodeZero);
            expect(expT[5]).equal(getCurOut());
        }
    );
    //T5
    it('should allow automatic backwards application of a function on a subset of the nodes`', function()
        {   var i = 0;
            var iterateCallback = function(currentNode){
                currentNode.obj = i;
                i++;
                if(i<3){
                    return true;
                }
                else{
                    return false;
                }
            }
            var startingNode = linkedListTest.tail.prev;
            linkedListTest.iterate(iterateCallback,false,startingNode,false);
            expect(expT[6]).equal(getCurOut());
        }
    );
    //T6
    it('should allow iteration in a circular manner`', function()
        {   var i = 0;
            var makeNodeTwo = function(currentNode){
                if(currentNode.obj == 2){
                    currentNode.obj = 3;
                    return false;
                }
                else{
                    currentNode.obj = 2;
                    return true;
                }
            }
            var startingNode = linkedListTest.tail.prev.prev;
            linkedListTest.iterate(makeNodeTwo,true,startingNode,true);
            expect(expT[7]).equal(getCurOut());
        }
    );
    
});
