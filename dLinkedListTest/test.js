var linkedListTest = new window.dLinkedList();

function echoEntireList(){
	var currentNode = linkedListTest.head;
	while(currentNode != null){
		document.write(currentNode.obj + " ");
		currentNode = currentNode.next;
	}
};