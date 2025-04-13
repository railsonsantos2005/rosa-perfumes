document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('custom-order-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Coletar dados do formulário
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                perfume: formData.get('perfume'),
                message: formData.get('message')
            };

            // Simular envio para WhatsApp
            const whatsappMessage = `Olá! Gostaria de fazer um pedido especial:\n\nNome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\nPerfume: ${data.perfume}\nMensagem: ${data.message}`;
            
            // Abrir WhatsApp com a mensagem preenchida
            window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

            // Mostrar mensagem de sucesso
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';

            // Limpar o formulário
            form.reset();

            // Esconder mensagem de sucesso após 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
});
