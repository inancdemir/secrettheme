function openFilters() {
    document.querySelector('.filter-area-bg').classList.add('active');
  }
  function closeFilters() {
    document.querySelector('.filter-area-bg').classList.remove('active');
  }
  document.querySelector('.filters-toggle').addEventListener('click', (e) => {
    openFilters();
  });
  document.querySelectorAll('.filter-close').forEach((el) => {
    el.addEventListener('click', () => {
      closeFilters();
    });
  })

  
  