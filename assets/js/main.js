document.addEventListener('DOMContentLoaded' , () => {

    const searchInput = document.querySelector('.search');
    const galerias = document.querySelectorAll('.box-galeria');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (searchInput && galerias) {
        
            const searchTerm = searchInput.value.toLowerCase();
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
            });
        }    
    });
    
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

    const contagem = document.querySelector('.numero-produtos');
    const comprarButton = document.querySelectorAll('.comprar-button');
    comprarButton.forEach(img => {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            if (img.src.includes('comprar-button.png')) {
                img.src = 'assets/imgs/icons/comprar-button-check.png'
                img.classList.remove('comprar-button')
                img.classList.add('comprar-button-2')
            } else {
                img.src = 'assets/imgs/icons/comprar-button.png'
                img.classList.remove('comprar-button-2')
                img.classList.add('comprar-button')
            }
        });
    });
    
});

