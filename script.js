let clickCounter = 1;

function changeButtonColor() {
    console.log(clickCounter)
    ++clickCounter;

    const buttonElement = document.getElementById('buton');
    
    if (clickCounter % 3 === 1 ) {
        buttonElement.classList.remove('btn-warning', 'btn-success');
        buttonElement.classList.add('btn-danger');
        buttonElement.innerHTML = 'Red';
    } else if (clickCounter % 3 === 2 || clickCounter === 1) {
        buttonElement.classList.remove('btn-danger', 'btn-success');
        buttonElement.classList.add('btn-warning');
        buttonElement.innerHTML = 'Yellow';
    } else if (clickCounter % 3 === 0) {
        buttonElement.classList.remove('btn-danger', 'btn-warning');
        buttonElement.classList.add('btn-success');
        buttonElement.innerHTML = 'Green';
    }
}
