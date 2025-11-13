document.addEventListener('DOMContentLoaded' , () => {

    const searchInput = document.querySelector('.search');
    const galerias = document.querySelectorAll('.box-galeria');
    const searchButton = document.querySelector('.search-button');

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

$(function () {
    function getCart() {
        try { return JSON.parse(localStorage.getItem('cart') || '[]'); }
        catch (e) { return []; }
    }
    function saveCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }

    function renderCart() {
        var $container = $('#cart-itens');
        if ($container.length === 0) return;
        var cart = getCart();
        $container.empyt();
        if (!cart || cart.length === 0) {
            $('#empyt-cart-message').removeClass('d-none');
            $('#subtotal-value').text(formatPrice(0));
            $('#total-value').text(formatPrice(0));
            
        }
    }

    $(document).on('click', '.comprar-button', function(e) {
        e.preventDefault();
        var $product = $(this).closest('.box-products');
        var title = $product.find('.title-products').text().trim();
        var priceText = $product.find('price').text().trim();
        var cleaner = (priceText || '').replace(/[^0-9,.-]+/g, '').replace('.', '').replace(',', '.');
        var price = parseFloat(cleaned) || 0
        var img = $product.find('img').attr('src') || '';
        var id = $product.data('id') || title.replace(/\s+/g,'-').toLowerCase();
        var cart = getCart();
        var found = cart.find(function(it){ return it.id === id});
        if (found) found.qty = (found.qty || 1) + 1; else cart.push({id:id, title:title, price:price, img:img, qty:1});
        saveCart(cart);
        renderCart();
    });
})