function createEditBtn(id){
	var editBtn = document.createElement('input')
	editBtn.value = "Editar";
	editBtn.name = "editBtn";
	editBtn.classList.add('btn');
	editBtn.classList.add('btnImportant');
	editBtn.setAttribute("type", "button");
	editBtn.setAttribute("id", id);

	return editBtn;
}

function createSaveBtn(id){
	var saveBtn = document.createElement('input')
	saveBtn.value = "Guardar";
	saveBtn.name = "saveBtn";
	saveBtn.classList.add('btn');
	saveBtn.classList.add('btnImportant');
	saveBtn.setAttribute("type", "button");
	saveBtn.setAttribute("id", id);

	return saveBtn;
}

function createDeleteBtn(id){
	var deleteBtn = document.createElement('input')
	deleteBtn.value = "Borrar";
	deleteBtn.name = "deleteBtn";
	deleteBtn.classList.add('btn');
	deleteBtn.classList.add('btnImportant');
	deleteBtn.setAttribute("type", "button");
	deleteBtn.setAttribute("id", id);

	return deleteBtn;
}

function createViewBtn(id){
	var viewBtn = document.createElement('input')
	viewBtn.value = "Ver";
	viewBtn.name = "viewBtn";
	viewBtn.classList.add('btn');
	viewBtn.classList.add('btnImportant');
	viewBtn.setAttribute("type", "button");
	viewBtn.setAttribute("id", id);

	return viewBtn;
}

function createGenericBtn(valueToShow){
	var genericBtn = document.createElement('input')
	genericBtn.value = valueToShow;
	genericBtn.name = "viewBtn";
	genericBtn.classList.add('btn');
	genericBtn.classList.add('btnImportant');
	genericBtn.setAttribute("type", "button");
	return genericBtn;
}
