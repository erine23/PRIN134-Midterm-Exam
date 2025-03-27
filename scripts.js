document.addEventListener('DOMContentLoaded', () => {
    const petButtons = document.querySelectorAll('.btn-full');
    const cards = document.querySelectorAll('.card');
    const petAllButton = document.querySelector('#btn-select-all');
    const unpetAllButton = document.querySelector('#btn-unselect-all');
    const firstButton = document.querySelector('#btn-select-first');
    const lastButton = document.querySelector('#btn-select-last');
    const nextButton = document.querySelector('#btn-select-next');
    const previousButton = document.querySelector('#btn-select-previous');
    const bannerContent = document.querySelector('.banner-content');
  
    petButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.querySelector('i').classList.toggle('fa-solid');
        button.querySelector('i').classList.toggle('fa-regular');
      });
    });
  
    petAllButton.addEventListener('click', () => {
      petButtons.forEach(button => {
        const icon = button.querySelector('i');
        if (!icon.classList.contains('fa-solid')) {
          icon.classList.add('fa-solid');
          icon.classList.remove('fa-regular');
        }
      });
    });
  
    unpetAllButton.addEventListener('click', () => {
      petButtons.forEach(button => {
        const icon = button.querySelector('i');
        if (!icon.classList.contains('fa-regular')) {
          icon.classList.add('fa-regular');
          icon.classList.remove('fa-solid');
        }
      });
    });
  
    let currentCardIndex = 0;
  
    const highlightCard = (index) => {
      cards.forEach(card => card.classList.remove('active', 'card-selected'));
      cards[index].classList.add('active', 'card-selected');
    };
  
    lastButton.addEventListener('click', () => {
      currentCardIndex = cards.length - 1;
      highlightCard(currentCardIndex);
    });
  
    firstButton.addEventListener('click', () => {
      currentCardIndex = 0;
      highlightCard(currentCardIndex);
    });
  
    nextButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      highlightCard(currentCardIndex);
    });
  
    previousButton.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      highlightCard(currentCardIndex);
    });
  
    bannerContent.addEventListener('click', () => {
      bannerContent.classList.add('animate__animated', 'animate__bounce');
      bannerContent.addEventListener('animationend', () => {
        bannerContent.classList.remove('animate__animated', 'animate__bounce');
      }, { once: true });
    });
  });