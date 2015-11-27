window = {};
var expT = [];
var assert = require('assert'),
    expect = require('chai').expect,
    DLinkedList = require('../../DLinkedList/DLinkedList.js');

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
    
})
 
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
            var twoNode = linkedListTest.findFirst("2");
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
            //insert 8 after 5
            var fiveNode = linkedListTest.findFirst("5");
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
            //remove 5
            fiveNode = linkedListTest.findFirst("5");
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
});
