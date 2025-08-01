
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Lógica da Navegação Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fecha o menu mobile ao clicar em um link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Lógica do Modal de Contato ---
    const contactModal = document.getElementById('contactModal');
    const modalPanel = document.getElementById('modal-panel');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const openModalBtns = [
        document.getElementById('openModalBtnDesktop'),
        document.getElementById('openModalBtnMobile'),
        document.getElementById('openModalBtnCta')
    ];

    function openModal() {
        contactModal.classList.remove('invisible', 'opacity-0');
        modalPanel.classList.remove('scale-95');
        modalPanel.classList.add('scale-100');
    }

    function closeModal() {
        modalPanel.classList.remove('scale-100');
        modalPanel.classList.add('scale-95');
        contactModal.classList.add('opacity-0');
        setTimeout(() => {
            contactModal.classList.add('invisible');
        }, 300);
    }

    openModalBtns.forEach(btn => {
        if(btn) btn.addEventListener('click', openModal);
    });
    
    closeModalBtn.addEventListener('click', closeModal);

    // Fecha o modal ao clicar fora do painel
    contactModal.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            closeModal();
        }
    });

    // --- Lógica de Animação de Scroll (Fade-in) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

});

document.addEventListener('DOMContentLoaded', () => {

// --- Dados dos Softwares ---
const softwareData = [
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>`,
title: 'GTECH GESTAO INTEGRADO',
shortDesc: 'Ideal para micro e pequenas empresas.',
fullDesc: `<p>O <strong>GTECH Gestão Integrado</strong> é a ferramenta perfeita para centralizar as operações da sua empresa. Controle de estoque, financeiro, vendas e emissão de notas fiscais em um só lugar. Simplifique sua rotina e ganhe tempo para focar no que realmente importa: o crescimento do seu negócio.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5" /></svg>`,
title: 'GTECH GESTAO ++',
shortDesc: 'Para operações extensas e multifiliais.',
fullDesc: `<p>Gerencie múltiplas filiais com total controle e visão unificada. O <strong>GTECH Gestão ++</strong> oferece recursos avançados de logística, relatórios consolidados e gestão de transferências, garantindo que sua operação, não importa o tamanho, funcione de forma sincronizada e eficiente.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 3V9H3V3m18 0l-8.29 8.29a2 2 0 01-2.83 0L3 3m18 0V1h-2v2h-2v2h2v2h2V5h2V3zM3 3V1H1v2H-1v2H1v2H3V5H1V3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5m18-4l-8.29 8.29a2 2 0 01-2.83 0L3 10" /></svg>`,
title: 'GTECH GESTAO CHEFF',
shortDesc: 'Para delicatessens, bares e restaurantes.',
fullDesc: `<p>Com o <strong>GTECH Gestão Cheff</strong>, você tem controle total do seu estabelecimento. Gestão de mesas e comandas, controle de insumos por ficha técnica, integração com iFood e um PDV ágil para garantir o melhor atendimento. Transforme a gestão do seu negócio gastronômico.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
title: 'GTECH GESTAO MOBILE',
shortDesc: 'Software via celular compatível com Android.',
fullDesc: `<p>A gestão da sua empresa na palma da sua mão! O <strong>GTECH Gestão Mobile</strong> permite que vendedores externos tirem pedidos, consultem estoque e clientes de onde você estiver. Totalmente integrado ao seu sistema principal, agiliza as vendas e reduz erros.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`,
title: 'GTECH GESTAO NFC-e',
shortDesc: 'Sistema PDV básico para MEI\'s e EPP\'s.',
fullDesc: `<p>Foque no essencial. O <strong>GTECH Gestão NFC-e</strong> é um Ponto de Venda (PDV) rápido e descomplicado, ideal para Microempreendedores Individuais (MEI) e Empresas de Pequeno Porte (EPP). Emita suas notas fiscais ao consumidor de forma rápida e esteja em dia com o fisco sem complicação.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>`,
title: 'DASHBOARD',
shortDesc: 'Informações em tempo real para decisões.',
fullDesc: `<p>Visualize a saúde do seu negócio em tempo real. Nossos <strong>Dashboards</strong> transformam dados brutos em gráficos intuitivos sobre faturamento, produtos mais vendidos, ticket médio e muito mais. Tome decisões estratégicas baseadas em informações precisas e atualizadas.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>`,
title: 'GTECH BACKUP CLOUD',
shortDesc: 'Segurança e armazenamento em nuvem.',
fullDesc: `<p>Proteja o ativo mais valioso da sua empresa: suas informações. Com o <strong>GTECH Backup Cloud</strong>, seus dados são salvos automaticamente em servidores seguros na nuvem, protegendo contra falhas de hardware, vírus, ataques virtuais ou imprevistos. Durma tranquilo sabendo que seu negócio está seguro.</p>`
},
{
icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
title: 'CONCILIAÇÃO BANCÁRIA',
shortDesc: 'Controle financeiro automatizado.',
fullDesc: `<p>Diga adeus às planilhas manuais. Nossa ferramenta de <strong>Conciliação Bancária</strong> importa extratos e aponta divergências em seus recebíveis. Identifique divergências com facilidade e mantenha seu fluxo de caixa sempre preciso e atualizado.</p>`
}
];

// --- Elementos do DOM ---
const softwareGrid = document.getElementById('software-grid');
const modal = document.getElementById('software-modal');
const modalPanel = document.getElementById('modal-panel');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContactBtn = document.getElementById('modal-contact-btn');


// Função para abrir o modal
function openModal(index) {
const software = softwareData[index];
if (!software) return;

modalIcon.innerHTML = software.icon;
modalTitle.textContent = software.title;
modalContent.innerHTML = software.fullDesc;

modal.classList.remove('hidden');
setTimeout(() => {
modalPanel.classList.remove('scale-95', 'opacity-0');
modalPanel.classList.add('scale-100', 'opacity-100');
}, 10); 
}

// Função para fechar o modal
function closeModal() {
modalPanel.classList.remove('scale-100', 'opacity-100');
modalPanel.classList.add('scale-95', 'opacity-0');
setTimeout(() => {
modal.classList.add('hidden');
}, 300); 
}

// --- Event Listeners ---

softwareGrid.addEventListener('click', (e) => {
const card = e.target.closest('.software-card');
if (card) {
const index = card.dataset.index;
openModal(index);
}
});

closeModalBtn.addEventListener('click', closeModal);

modalContactBtn.addEventListener('click', (e) => {
closeModal();
});


modal.addEventListener('click', (e) => {
if (e.target === modal) {
closeModal();
}
});

window.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
closeModal();
}
});

});

document.addEventListener('DOMContentLoaded', () => {
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tab-content');
let currentIndex = 0;
let intervalId = null;

// Função para ativar uma tab específica
function activateTab(index) {
currentIndex = (index + tabs.length) % tabs.length;

tabContents.forEach(tabContent => {
    tabContent.classList.add('hidden');
});

tabs.forEach(t => {
    t.classList.remove('active-tab');
});

tabs[currentIndex].classList.add('active-tab');
const target = document.querySelector(tabs[currentIndex].dataset.tabTarget);
target.classList.remove('hidden');
}


function nextTab() {
activateTab(currentIndex + 1);
}

// Configura o intervalo para alternar automaticamente
function startAutoRotation() {
if (intervalId) clearInterval(intervalId);
intervalId = setInterval(nextTab, 3000); // 3 segundos
}

tabs.forEach((tab, index) => {
tab.addEventListener('click', () => {
    activateTab(index);
    startAutoRotation();
});
});

startAutoRotation();

const tabsContainer = document.querySelector('.tabs-container'); 
if (tabsContainer) {
tabsContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});
tabsContainer.addEventListener('mouseleave', () => {
    startAutoRotation();
});
}

activateTab(0);
});
