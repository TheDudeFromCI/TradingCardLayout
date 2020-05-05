function onDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDragLeave(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    setFiles(e.dataTransfer.files, e.target);
    return false;
}

function register(el) {
    el.addEventListener('dragenter', onDragEnter, false);
    el.addEventListener('dragover', onDragOver, false);
    el.addEventListener('dragleave', onDragLeave, false);
    el.addEventListener('drop', onDrop, false);
}

function setFiles(files, el) {
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            el.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}

function onLoaded() {
    register(document.getElementById('card1'))
    register(document.getElementById('card2'))
    register(document.getElementById('card3'))
    register(document.getElementById('card4'))
    register(document.getElementById('card5'))
    register(document.getElementById('card6'))
    register(document.getElementById('card7'))
    register(document.getElementById('card8'))
    register(document.getElementById('card9'))
}
