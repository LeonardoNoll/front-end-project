let restaurantes = [
    {nome:"Praça", categoria:"Japonesa", ativo:false},
    {nome:"Solar da Praça", categoria: "Pizza", ativo:true},
    {nome:"Golden Burguer", categoria: "Hamburguer", ativo:false}
]

const BTN_LISTAR_RESTAURANTES = document.getElementById('btnListarRestaurantes');
const DISPLAY = document.getElementById('display');




const listarRestaurantes = () => {
    DISPLAY.innerHTML = '';
    restaurantes.forEach(restaurante => {
        const restauranteDiv = document.createElement('div');
        const restauranteNome = document.createElement('p');
        const restauranteCategoria = document.createElement('p');
        const restauranteAtivo = document.createElement('p');
        const btnMudarSituacao = document.createElement('button');
        
        restauranteNome.innerText = 'Nome: ' + restaurante.nome;
        restauranteCategoria.innerText = 'Categoria: ' + restaurante.categoria;
        restauranteAtivo.innerText = restaurante.ativo ? "Ativo" : "Desativado";
        btnMudarSituacao.innerText = restaurante.ativo ? "Desativar" : "Ativar";
        btnMudarSituacao.addEventListener('click', () => {
            ativarDesativarRestaurente(restaurante);
            listarRestaurantes();
        });
        
        //Style
        restauranteDiv.className = 'bg-white w-3/4 h-fit grid grid-cols-4 gap-10 mx-auto p-3 font-medium';
        btnMudarSituacao.className = 'bg-blue-400 w-fit mx-auto rounded-md text-white px-2';

        restauranteDiv.appendChild(restauranteNome);
        restauranteDiv.appendChild(restauranteCategoria);
        restauranteDiv.appendChild(restauranteAtivo);
        restauranteDiv.appendChild(btnMudarSituacao);
        DISPLAY.appendChild(restauranteDiv);
    });

    const btnCadastrar = document.createElement('button');
    btnCadastrar.innerText = "Cadastrar Restaurante";
    btnCadastrar.className = 'bg-blue-400 w-fit mt-10 translate-x- rounded-md text-white px-2';
    btnCadastrar.addEventListener('click', () => {
        cadastrarRestaurante();
    });
    DISPLAY.appendChild(btnCadastrar);
}

const cadastrarRestaurante = () => {
    const nome = prompt("Digite o nome:");
    const categoria = prompt("Digite a categoria:");
    restaurantes.push({nome:nome, categoria:categoria, ativo:true});
    listarRestaurantes();
}

const ativarDesativarRestaurente = (restaurante) => {
    restaurante.ativo = !restaurante.ativo;
    console.log(restaurante);
}


// BTN_LISTAR_RESTAURANTES.addEventListener('click', listarRestaurantes);

listarRestaurantes();