'strict mode'

const output = document.getElementById('output');
const buttons = document.querySelectorAll('nav button');
const preview = document.getElementById('preview');
const buttonset = document.getElementById('buttonset');

let current = buttons[0];

function showImage() {
    current = this;
    output.src = getImageURL(this.id);
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
        el.addEventListener('mouseover', showPreview);
        el.addEventListener('mouseout', hidePreview);
    }
);

function getImageURL(fileName) {
    return 'img/' + fileName + '.jpg'
}

function showPreview(evt) {
    preview.style.left = evt.pageX + 'px';
    preview.style.top - evt.pageY + 'px';
    preview.style.backgroundImage = 'url(' + getImageURL(this.id) + ')';
    preview.className = 'active';
}

function hidePreview() {
    preview.className = '';
}