// script.js

// Função para emitir a mensagem de sucesso
function salvarCadastro(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const endereco = document.getElementById('endereco').value;

    if (nome && dataNascimento && endereco) {
        // Exibe a mensagem de sucesso
        alert('Usuário cadastrado com sucesso!');
        
        // Aqui você pode fazer algo como enviar os dados para um servidor

    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Função para voltar para a página inicial (index)
function voltar() {
    window.location.href = urlVoltar;  // Redireciona para a URL da view 'index'
}

// Adiciona o evento de submit ao formulário
document.getElementById('formCadastro').addEventListener('submit', salvarCadastro);
