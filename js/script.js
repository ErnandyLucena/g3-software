
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Lógica da Navegação Mobile ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
        title: 'MÓDULO DE COMPRAS',
        shortDesc: 'Pesquisa de preços dinâmica e crítica automática.',
        fullDesc: `<p>O <strong>Módulo de Compras</strong> permite gerar pesquisas de preços de forma dinâmica, personalizando os filtros conforme sua necessidade e enviando via web. Após a resposta do fornecedor, o sistema já fornece a crítica com indicação do menor preço, agilizando seu processo de compras e garantindo melhores negociações.</p>`
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        title: 'COTAÇÃO DE PREÇOS',
        shortDesc: 'Automatização de promoções e gestão de preços.',
        fullDesc: `<p>Com o <strong>Cotação de Preços</strong>, você gerencia suas promoções de forma automatizada, programando início e fim das campanhas. O sistema altera os preços automaticamente, evitando esquecimentos e prejuízos. Mantenha sua estratégia de preços sempre atualizada e competitiva no mercado.</p>`
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
        title: 'MONITOR DE NOTAS FISCAIS',
        shortDesc: 'Controle e validação de notas fiscais.',
        fullDesc: `<p>O <strong>Monitor de Notas Fiscais</strong> permite que você acompanhe todas as notas emitidas para seu CNPJ de forma simples e prática. Aceite ou rejeite notas não reconhecidas, evitando fraudes contra seu CNPJ e mantendo sua empresa em dia com as obrigações fiscais.</p>`
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
        title: 'PIX INTEGRADO',
        shortDesc: 'Recebimentos instantâneos via Pix.',
        fullDesc: `<p>O <strong>Pix Integrado</strong> permite gerar QR Code diretamente no seu PDV e receber pagamentos instantaneamente, com confirmação automática. A venda só é liberada após a confirmação do pagamento, garantindo segurança nas transações e agilidade no atendimento ao cliente.</p>`
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        title: 'MÓDULO FINANCEIRO',
        shortDesc: 'Controle completo das finanças.',
        fullDesc: `<p>O <strong>Módulo Financeiro</strong> facilita seu controle financeiro com funcionalidades completas: contas a pagar e receber, borderô, conciliação bancária e movimentações financeiras. Tenha uma visão clara do fluxo de caixa e mantenha suas finanças organizadas.</p>`
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
        title: 'MÓDULO DE VENDAS',
        shortDesc: 'Relatórios e controle de vendas.',
        fullDesc: `<p>Com o <strong>Módulo de Vendas</strong>, você tem acesso a relatórios detalhados de faturamento, flash de vendas em tempo real, controle de comissões, pedidos por plataforma, dashboards comparativos e orçamentos rápidos. Tudo para impulsionar suas vendas e melhorar seus resultados.</p>`
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

function startAutoRotation() {
if (intervalId) clearInterval(intervalId);
intervalId = setInterval(nextTab, 3000); 
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
