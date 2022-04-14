// FILTER SECTION


// coleta todos os botões e todas as divs do grid
const filter_btns = document.querySelectorAll('.filter-btn');
const itemsDivs = document.querySelectorAll('.grid-item')

// deixa todas as divs visiveis no início do site
itemsDivs.forEach((div) => div.classList.add('show'));


// faz a logica de deixar o botao clicado ativo e filtrar as divs correspondentes
filter_btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // deixa todos os botoes inativos, e na sequencia deixa ativado apenas o botao clicado
        filter_btns.forEach((button) => button.classList.remove('active'));
        btn.classList.add('active');
    
        // deixa todas as divs invisiveis
        itemsDivs.forEach((div) => div.classList.remove('show'));

        // coleta o filtro selecionado
        let filterValue = btn.dataset.filter;

        // trata o caso do filter = "all"
        if (filterValue == '*') {
            itemsDivs.forEach((div) => div.classList.add('show'));
        }

        // realiza o filtro das divs
        itemsDivs.forEach((div) => {
            if (div.classList.contains(filterValue)) {
                div.classList.add('show');
            }
        });
    });
})

