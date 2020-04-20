let input = document.getElementsByClassName('inputTask')[0]
input.addEventListener('keypress', addTask)

function addTask(e){
	if(e.keyCode === 13){
		e.preventDefault();
		let task = document.getElementsByClassName('inputTask')[0].value.trim();
		//createLiElement()
		console.log(task);
		if(task != ""){
			let liElement = document.createElement('li');
			let text = document.createTextNode(task);

			liElement.appendChild(text);
			liElement.classList.add('todo-element');
		  liElement.addEventListener('click', liEventClick);
		  document.getElementsByClassName('todo-list')[0].appendChild(liElement);
		  document.getElementsByClassName('inputTask')[0].value = "";
		//console.log(task);
		}
	}
}

function liEventClick(e) {
	let elementClicked = e.target;
	//console.log(elementClicked)
	if(elementClicked.classList.contains('todo-element')) {
		elementClicked.classList.remove('todo-element');
		elementClicked.classList.add('done-element');
		document.getElementsByClassName('done-list')[0].appendChild(elementClicked);
	} else if(elementClicked.classList.contains('done-element')) {
		elementClicked.classList.remove('done-element');
		elementClicked.classList.add('todo-element');
		document.getElementsByClassName('todo-list')[0].appendChild(elementClicked);
	}
}

function clearList(listClass){
	let list = document.getElementsByClassName(listClass)[0];
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}

function clearBothLists(){
	let lists = document.getElementsByClassName('list');
	for(let i = 0; i<lists.length; i++){
		let list = lists[i];	

		while(list.firstChild){
			list.removeChild(list.firstChild);
		}
	}
}