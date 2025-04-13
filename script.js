document.addEventListener('DOMContentLoaded', function() {
    // Função para abrir WhatsApp com número correto
    function openWhatsApp(phoneNumber, message = '') {
        const fullPhoneNumber = `55${phoneNumber.replace(/\D/g, '')}`;
        const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // Event listener para botões de WhatsApp
    // Botões de produtos
    const whatsappButtons = document.querySelectorAll('.whatsapp-button-small');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.dataset.productName;
            const productPrice = this.dataset.productPrice;
            const message = `Olá! Gostaria de comprar o ${productName} por R$ ${productPrice}. Por favor, me envie mais informações.`;
            openWhatsApp('86994353494', message);
        });
    });

    // Botão de pedido especial
    const specialOrderButton = document.querySelector('[onclick*="wa.me"]');
    if (specialOrderButton) {
        specialOrderButton.addEventListener('click', function(e) {
            e.preventDefault();
            const message = 'Olá! Gostaria de saber se tem o perfume que procuro. Por favor, me informe o nome do perfume e seu contato.';
            openWhatsApp('86994353494', message);
        });
    }

    // Formulário de contato
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(this);
            let message = 'Olá! Recebi um novo contato através do site:\n\n';
            
            // Adicionar todos os campos do formulário à mensagem
            formData.forEach((value, key) => {
                message += `${key}: ${value}\n`;
            });

            // Abrir WhatsApp
            openWhatsApp('86994353494', message);
            
            // Limpar formulário
            this.reset();
            
            // Exibir mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        });
    });

    // Formulário de pedido especial
    const orderForm = document.getElementById('customOrderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(this);
            let message = 'Olá! Recebi um pedido especial:\n\n';
            
            // Adicionar todos os campos do formulário à mensagem
            formData.forEach((value, key) => {
                message += `${key}: ${value}\n`;
            });

            // Abrir WhatsApp
            openWhatsApp('86994353494', message);
            
            // Limpar formulário
            this.reset();
            
            // Exibir mensagem de sucesso
            alert('Pedido enviado com sucesso! Em breve entraremos em contato.');
        });
    }
});
