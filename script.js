const buttons = document.querySelectorAll('.btn');
const products = document.querySelectorAll('.product');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        products.forEach(p => {
            p.style.display = (filter === 'all' || p.getAttribute('data-category') === filter) ? 'block' : 'none';
        });
    });
});
/* ajustes */