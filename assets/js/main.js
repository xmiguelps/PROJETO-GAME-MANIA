document.addEventListener('DOMContentLoaded' , () => {
    document.querySelectorAll('.favorite-icon').forEach(img => {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            if (img.src.includes('favorite-button.png')) {
                img.src = 'assets/imgs/icons/favorite-button-hover.png'
            } else {
                img.src = 'assets/imgs/icons/favorite-button.png'
            }
        });
    });
    
    const searchInput = document.querySelector('.search');
    const galerias = document.querySelectorAll('.box-galeria');

    if (searchInput && galerias) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            galerias.forEach(galeria => {
                const products = galeria.querySelectorAll('.box-products')
                products.forEach(product => {
                    const productName = product.querySelector('.title-products').textContent.toLocaleLowerCase();
                    if (productName.includes(searchTerm)) {
                        product.style.visibility = 'visible';
                        product.style.position = 'static';
                    } else {
                        product.style.visibility = 'hidden';
                        product.style.position = 'absolute';
                    }
                });
            })
        });
    }
});