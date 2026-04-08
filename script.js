document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-contact-header');
    const header = document.getElementById('header');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Header fixo com sombra
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Integração do WhatsApp para a São Lucas Agropet
    const formWhatsapp = document.getElementById('form-whatsapp');

    if (formWhatsapp) {
        formWhatsapp.addEventListener('submit', function(e) {
            e.preventDefault();

            // Substitua com o número correto da loja
            const numeroWhatsApp = '5554900000000'; 

            const nome = document.getElementById('nome').value;
            const pet = document.getElementById('pet').value;
            const pedido = document.getElementById('pedido').value;

            // Montagem lúdica da mensagem
            const mensagem = `Olá, Agropet! 🐾 Meu nome é ${nome}.%0A%0A*Sobre meu pet:* ${pet}%0A*Meu pedido / dúvida:* ${pedido}%0A%0AAguardo o retorno!`;

            const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
            window.open(url, '_blank');
        });
    }
});