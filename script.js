const orderButton = document.getElementById('orderButton');

if (orderButton) {
  orderButton.addEventListener('click', () => {
    const menuSection = document.getElementById('menu');

    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
