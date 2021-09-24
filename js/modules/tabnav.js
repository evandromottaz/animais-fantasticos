export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  //  link da posição da imagem com o conteúdo
  activeTab(index) {
    this.tabContent.forEach(description => {
        description.classList.remove(this.activeClass)
    })
    
    const direcao = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.activeClass, direcao)
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    })
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0); // Ativar primeiro item
      this.addTabNavEvent();
    }
  }
}