// Dados iniciais
let receitas = [];
let despesas = [];
let metas = [];

// Elementos do DOM
const totalReceitas = document.getElementById('total-receitas');
const totalDespesas = document.getElementById('total-despesas');
const saldoAtual = document.getElementById('saldo-atual');
const listaMetas = document.getElementById('lista-metas');

// Formulários
const formReceita = document.getElementById('form-receita');
const formDespesa = document.getElementById('form-despesa');
const formMeta = document.getElementById('form-meta');

// Gráfico
const ctx = document.getElementById('despesasChart').getContext('2d');
const despesasChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Moradia', 'Alimentação', 'Transporte', 'Lazer', 'Saúde'],
        datasets: [{
            label: 'Despesas por Categoria',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ]
        }]
    }
});

// Função para atualizar o resumo
function atualizarResumo() {
    const totalR = receitas.reduce((sum, r) => sum + r.valor, 0);
    const totalD = despesas.reduce((sum, d) => sum + d.valor, 0);
    const saldo = totalR - totalD;

    totalReceitas.textContent = `R$ ${totalR.toFixed(2)}`;
    totalDespesas.textContent = `R$ ${totalD.toFixed(2)}`;
    saldoAtual.textContent = `R$ ${saldo.toFixed(2)}`;
}

// Função para atualizar o gráfico
function atualizarGrafico() {
    const categorias = ['moradia', 'alimentacao', 'transporte', 'lazer', 'saude'];
    const dados = categorias.map(cat => despesas.filter(d => d.categoria === cat).reduce((sum, d) => sum + d.valor, 0));
    despesasChart.data.datasets[0].data = dados;
    despesasChart.update();
}

// Cadastro de Receita
formReceita.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = parseFloat(document.getElementById('valor-receita').value);
    const data = document.getElementById('data-receita').value;
    const categoria = document.getElementById('categoria-receita').value;

    receitas.push({ valor, data, categoria });
    atualizarResumo();
    formReceita.reset();
});

// Cadastro de Despesa
formDespesa.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = parseFloat(document.getElementById('valor-despesa').value);
    const data = document.getElementById('data-despesa').value;
    const categoria = document.getElementById('categoria-despesa').value;

    despesas.push({ valor, data, categoria });
    atualizarResumo();
    atualizarGrafico();
    formDespesa.reset();
});

// Cadastro de Meta
formMeta.addEventListener('submit', (e) => {
    e.preventDefault();
    const descricao = document.getElementById('descricao-meta').value;
    const valor = parseFloat(document.getElementById('valor-meta').value);
    const data = document.getElementById('data-meta').value;

    metas.push({ descricao, valor, data, valorAtual: 0 });
    atualizarListaMetas();
    formMeta.reset();
});

// Atualizar Lista de Metas
function atualizarListaMetas() {
    listaMetas.innerHTML = metas.map(meta => `
        <li>
            <strong>${meta.descricao}</strong>
            <p>Valor Total: R$ ${meta.valor.toFixed(2)}</p>
            <p>Data Limite: ${meta.data}</p>
            <div class="progresso">
                <div class="barra" style="width: ${(meta.valorAtual / meta.valor) * 100}%;"></div>
            </div>
            <p>Progresso: ${((meta.valorAtual / meta.valor) * 100).toFixed(2)}%</p>
        </li>
    `).join('');
}