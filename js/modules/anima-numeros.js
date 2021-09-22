export default function initAnimaNumeros(){}

const numeros = document.querySelectorAll('[data-numero]');

function animaNumeros() {
    numeros.forEach((numero) => {
        const total = +numero.innerText
        const incremento = Math.floor(total/100)
    
        let start = 0
        const timer = setInterval(() => {
            start += incremento
            numero.innerText = start
            if(start > total) {
                // quando terminar de contar, tira o valor incrementado e para o contador
                numero.innerText = total
                clearInterval(timer)
            }
        }, 25 * Math.random())
    })
}

let observer
function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
        observer.disconnect();
        animaNumeros();
    }
}
observer = new MutationObserver(handleMutation)
const observerTarget = document.querySelector('.numeros')

observer.observe(observerTarget, {attributes: true});