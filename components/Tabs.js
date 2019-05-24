class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      
      
      this.tabData = document.querySelector(`.tab[data-tab='${this.tabElement.dataset.tab}']`);
      
      
       
      
      
      if(this.tabData.dataset.tab === 'all') {
        
    
        this.cards = document.querySelectorAll('.card');
      } else {
       
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabElement.dataset.tab}']`);
      }
      
  
    
      this.cards = Array.from(this.cards).map(element => new TabCard(element));
      //console.log(this.cards);
  
     
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
     
      const tabs = document.querySelectorAll('.tab');
      console.log(tabs);
      
     
      tabs.forEach(element => element.classList.remove('active-tab'));
  
      
      const cards = document.querySelectorAll('.card');
  
      
      cards.forEach(element => element.style.display = 'none');
      
      
      this.tabElement.classList.add('active-tab');
    
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
    
      this.cardElement = cardElement;
     
    }
    selectCard(){
      
      this.cardElement.style.display = 'flex';
    }
  
  }
  
  
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(element => new TabLink(element));
  