// template ID: template_kf3lkwp
// service ID: service_lm55ex7
// user ID/public key: 5cZt_Fo4A1ouF1X4F

const scaleFactor = 1/20;
function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = event.clientX * scaleFactor;
    const mouseY = event.clientY * scaleFactor;
    
    for( let i = 0; i < shapes.length; i++ ) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${mouseX * boolInt}px, ${mouseY * boolInt}px)`;
    }
}


let contrastToggle = false;
function toggleContrast(event) {
    event.preventDefault();
    contrastToggle = !contrastToggle;

    if( contrastToggle ) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}


async function contact(event) {
    event.preventDefault();
    
    // show loading icon
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    const error = document.querySelector('.modal__overlay--error');
    
    loading.classList.add('modal__overlay--visible');
    
    // send the form
    try {
        await emailjs.sendForm('service_lm55ex7', 'template_kf3lkwp', event.target, '5cZt_Fo4A1ouF1X4F');

        throw new Error('error');

        loading.classList.remove('modal__overlay--visible');
        success.classList.add('modal__overlay--visible');
    } catch(e) {
        loading.classList.remove('modal__overlay--visible');
        error.classList.add('modal__overlay--visible');
    }
}


let isModalOpen = false;
function toggleModal() {
    if( isModalOpen ) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    
    isModalOpen = true;
    document.body.classList += ' modal--open';
    window.scrollTo(0, 0);
}