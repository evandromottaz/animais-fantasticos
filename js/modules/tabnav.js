export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    
    tabContent[0].classList.add('ativo')
    
    //  link da posição da imagem com o conteúdo
    function activeTab(index) {
        tabContent.forEach(description => {
            description.classList.remove('ativo')
        })
        
        const direcao = tabContent[index].dataset.anime
        tabContent[index].classList.add('ativo', direcao)
    }
    
    //  se tiver a const tabMenu e tabContent
    if(tabMenu.length && tabContent.length) {
        //  faça o loop pelas imagens - o item[img] e também a posição dele[index]
        tabMenu.forEach((img, index) => {
            img.addEventListener('click', () => {
        
                //  acionar a função e enviar a posição do item[index]
                activeTab(index)
            })
        })
    } 
}