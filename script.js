let clickCounter = 0;

function changeButtonColor() {
    const colors = ['btn-danger', 'btn-warning', 'btn-success'];

    clickCounter = (clickCounter + 1) % 3;

    const buttonElement = document.getElementById('buton');
    buttonElement.className = `btn ${colors[clickCounter]}`;
    
    const colorNames = ['Red', 'Yellow', 'Green'];
    buttonElement.innerHTML = colorNames[clickCounter];
}

setInterval(changeButtonColor, 10000);
