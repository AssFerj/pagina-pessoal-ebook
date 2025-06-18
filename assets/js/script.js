document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensagem-sucesso').textContent = 'Mensagem enviada com sucesso!';
});