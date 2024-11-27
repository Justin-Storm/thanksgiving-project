window.addEventListener('scroll', function() {
    const navbar = this.document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const body = document.querySelector('body');
const dateTime = new Date();
const currectHour = dateTime.getHours();
console.log(currectHour);

if (currectHour >= 17) {
    body.classList.add('night');
} else {
    body.classList.remove('night');
}

const secretWordForm = document.getElementById('secretWordForm');
secretWordForm.addEventListener('submit', e => {
    e.preventDefault();

    const secretWordFormInput = document.getElementById('secretWordFormInput').value;
    if (secretWordFormInput === 'Thanksgiving') {
        body.classList.add('secret-word');
        body.classList.remove('secret-word-wrong');
    } else {
        body.classList.add('secret-word-wrong');
        body.classList.remove('secret-word');
        alert('You guessed wrong!');
    }
    
})