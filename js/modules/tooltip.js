export default function initTooltip() {
    const tooltip = document.querySelectorAll('[data-tooltip]')

    tooltip.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(mouseEvent) {
        const tooltipBox = criarTooltipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave)

    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(mouseEvent) {
            this.tooltipBox.style.top = mouseEvent.pageY + 20 + 'px';
            this.tooltipBox.style.left = mouseEvent.pageX + 20 + 'px';
        }
    }

    //a função ela vai criar a box
    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }
}

