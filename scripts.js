/* modal forms */

/* script to show a modal */

/*
function startModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'to-close') {
                modal.classList.remove('show');
            }
        });
    }
}

const btnForm = document.querySelector('colocar aqui a classe do botão em que deve acontever o evento');
btnForm.addEventListener('click', () => startModal("modal-forms"));
*/


/* animating the sections */

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 4) / 5;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener("scroll", (function () {
        animeScroll();
    }))
}

/* Features for back to top button */

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', hide)

function hide() {
    if (window.scrollY > 10) {
        btn.style.opacity = "1";
        btn.style.cursor = "pointer"
    } else {
        btn.style.opacity = "0"
        btn.style.cursor = "unset"
    }
}

hide()


