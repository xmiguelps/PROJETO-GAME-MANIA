document.addEventListener('DOMContentLoaded' , () => {

    const searchInput = document.querySelector('.search');
    const galerias = document.querySelectorAll('.box-galeria');
    const searchButton = document.querySelector('.search-button');

    // Só adiciona o listener se o botão de busca existir na página
    if (searchButton) {
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
    }
    
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

    let cont = 0;
    const contCarrinho = document.querySelector('.numero-produtos');
    const comprarButton = document.querySelectorAll('.comprar-button');

    // Atacha listeners somente se existirem botões de comprar na página
    if (comprarButton && comprarButton.length) {
        comprarButton.forEach(img => {
            img.addEventListener('click', (event) => {
                event.preventDefault();
                if (img.src.includes('comprar-button.png')) {
                    img.src = 'assets/imgs/icons/comprar-button-check.png'
                    img.classList.remove('comprar-button')
                    img.classList.add('comprar-button-2')
                    cont++
                    if (contCarrinho) contCarrinho.innerText = `${cont}`
                } else {
                    img.src = 'assets/imgs/icons/comprar-button.png'
                    img.classList.remove('comprar-button-2')
                    img.classList.add('comprar-button')
                    cont--
                    if (contCarrinho) contCarrinho.innerText = `${cont}`
                }
            });
        });
    }

    const inputLogin = document.querySelectorAll('.input-login')
    inputLogin.forEach(input => {
        input.addEventListener('keyup', (event) => {
            if (event.target.value.length < 3) {
                event.target.style.outlineColor = '#ff6b6b'
            } else {
                event.target.style.outlineColor = '#28a745'
            }
        })
    })
});