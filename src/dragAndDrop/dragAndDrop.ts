function onDragStart(event: { target: HTMLInputElement; dataTransfer: DataTransfer}) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event: DragEvent){
    event.preventDefault()
}

function onDrop(event: { target: HTMLInputElement; dataTransfer: DataTransfer}) {
    console.log("drop")
    const id = event.dataTransfer.getData('text');

    console.log(id)
    let draggableElement
    if(id) draggableElement = document.getElementById(id);
    
    console.log(draggableElement)
    const dropzone = event.target;
    if(draggableElement) dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}
