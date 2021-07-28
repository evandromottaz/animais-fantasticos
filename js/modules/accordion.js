export default function initAccordion() {
    const dt = document.querySelectorAll('[data-anime="accordion"] dt')

    if(dt.length) {
        dt[0].classList.add('ativo');
        dt[0].nextElementSibling.classList.add('ativo');
    
        function accordionActive(index) {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }
    
        dt.forEach((item) => {
            item.addEventListener('click', accordionActive)
        })
    }
}