function filter(categoria) {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(p => {
        if (categoria === 'todos' || p.classList.contains(categoria)) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
}