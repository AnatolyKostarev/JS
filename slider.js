'strict mode'

const output = document.getElementById('output');
const buttons = document.querySelectorAll('nav button');

let current = buttons[0];

function showImage() {
    current = this;
    output.src = 'img/' + this.id + '.jpg';
    buttons.forEach((el) => {
        if (el == this) {
            el.className = 'navButtons active';
        }
        else {
            el.className = 'navButtons';
        }        
    });
}

buttons.forEach(
    (el) => {
        el.addEventListener('click', showImage);
    }
);