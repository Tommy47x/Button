let clickCounter = 0;

function changeButtonColor() {
    ++clickCounter
    const buttonElement = document.getElementById('buton');

    if (clickCounter === 1) {
        buttonElement.classList.remove('btn-danger');
        buttonElement.classList.add('btn-warning');
        buttonElement.innerHTML = 'New Color: Yellow';
    }
    if (clickCounter > 1) {
        buttonElement.classList.remove('btn-warning');
        buttonElement.classList.add('btn-success');
        buttonElement.innerHTML = 'New Color: Green';
    }
}
