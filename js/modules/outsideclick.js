export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outsite = 'data-outside';

    if(!element.hasAttribute(outsite)) {
        events.forEach(userEvents => {
            setTimeout(() => {
                html.addEventListener(userEvents, handleOutsideClick)
            })
        });
        element.setAttribute(outsite, '')
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outsite);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            callback();
        }
    }
}