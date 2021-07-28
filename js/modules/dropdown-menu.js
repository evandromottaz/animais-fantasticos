import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    const mouseEvents = ['touchstart','click']; // array de eventos

    dropdownMenus.forEach((menu) => {
        mouseEvents.forEach((userEvents) => {
            menu.addEventListener(userEvents, handleClick)
        })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active');
        outsideClick(this, mouseEvents, () => {
            this.classList.remove('active')
        });
    }
}