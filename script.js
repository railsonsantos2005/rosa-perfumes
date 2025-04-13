document.addEventListener('DOMContentLoaded', function() {
    // Função para criar mensagem do WhatsApp
    function createWhatsAppMessage(productName, price) {
        const message = `Olá! Gostaria de comprar o produto: ${productName}\nPreço: R$ ${price}\nPor favor, me envie mais informações.`;
        return encodeURIComponent(message);
    }

    // Função para enviar pedido especial
    function sendCustomOrder(name, phone, perfume, message) {
        const phoneNumber = '5586994353494';
        const orderMessage = `Olá! Recebi um pedido especial:\n\nNome: ${name}\nTelefone: ${phone}\nPerfume: ${perfume}\n${message ? 'Mensagem: ' + message : ''}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
        return whatsappUrl;
    }

    // Adiciona evento de clique nos botões de compra
    const buyButtons = document.querySelectorAll('.whatsapp-button-small');
    buyButtons.forEach(button => {
        const productName = button.parentElement.querySelector('h4').textContent;
        const price = button.parentElement.querySelector('.price').textContent;
        
        button.addEventListener('click', function() {
            const phoneNumber = '5586994353494';
            const message = createWhatsAppMessage(productName, price);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Adiciona evento de clique no botão do WhatsApp fixo
    const whatsappButton = document.querySelector('.whatsapp-button a');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = '5586994353494';
            const message = 'Olá! Gostaria de saber mais sobre seus produtos.';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Formulário de pedido especial
    const orderForm = document.getElementById('customOrderForm');
    if (orderForm) {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Pedido enviado com sucesso! Em breve entraremos em contato.';
        orderForm.parentNode.insertBefore(successMessage, orderForm);

        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loading-spinner';
        orderForm.parentNode.insertBefore(loadingSpinner, orderForm);

        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const perfume = formData.get('perfume');
            const message = formData.get('message');

            // Mostrar spinner
            loadingSpinner.style.display = 'block';
            
            // Criar mensagem do WhatsApp
            const whatsappUrl = sendCustomOrder(name, phone, perfume, message);
            
            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Mostrar mensagem de sucesso
            successMessage.style.display = 'block';
            this.reset();
            
            // Esconder spinner
            setTimeout(() => {
                loadingSpinner.style.display = 'none';
            }, 1000);
        });
    }
});
