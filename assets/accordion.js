function initializeAccordion() {
  const accordionItems = document.querySelectorAll('.accordion');

  accordionItems.forEach((item) => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}
initializeAccordion();
