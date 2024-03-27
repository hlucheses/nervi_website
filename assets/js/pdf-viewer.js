// Inicialização de variáveis globais
var iframe = document.getElementById('pdf-viewer');
var currentPage = 1; // Começa na primeira página
var totalPages = 9; // Substitua pelo número total de páginas no seu PDF

// Atualiza o src do iframe para a página atual do PDF
function updateIframeSrc() {
    iframe.src = `nervi-catalogo-compressed.pdf#page=${currentPage}`;
    document.getElementById('page-number').textContent = `${currentPage}/${totalPages}`;
}

// Navega para a página anterior do PDF
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateIframeSrc();
    }
}

// Navega para a próxima página do PDF
function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updateIframeSrc();
    }
}

// Evento de carregamento da janela para iniciar a visualização do PDF
window.onload = function() {
    updateIframeSrc();
};