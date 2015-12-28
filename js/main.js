function todoList() {
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("LI")	
	newItem.className = "todoClass"
	newItem.setAttribute("onclick", "remove()")
	newItem.appendChild(text)
	document.getElementById("todoList").appendChild(newItem)
}  

function remove() {
	this.parentNode.removeChild(this)
}