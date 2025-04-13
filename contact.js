document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // Construir a mensagem para o WhatsApp
            const whatsappMessage = `Olá! Recebi um novo contato através do site:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

            // Abrir o WhatsApp com o número e mensagem
            const whatsappUrl = `https://wa.me/5586994353494?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');

            // Limpar o formulário
            contactForm.reset();

            // Exibir mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        });
    }
});
