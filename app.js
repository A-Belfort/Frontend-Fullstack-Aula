const bg = document.getElementById("quadro");
const empty = document.getElementById("empty");

async function criarCaderno() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    const dados = {
        titulo: titulo,
        descricao: descricao
    }

    try {
        const response = await fetch('https://backend-fullstack-aula.onrender.com/api/caderno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        }); //envia pro backend
        
        const resultado = await response.json();
        console.log('Resposta do backend:', resultado); //respostas no console
        
        if (resultado.success) {
            alert('Caderno criado!');
            setTimeout(() => window.location.href = "index.html", 1000);
        } else {
            alert('Erro ao efetar cadastro: ' + resultado.message);
        } //alerta do browser
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão com o servidor');
    }
}c