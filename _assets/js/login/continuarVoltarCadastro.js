
// Esse arquivo é responsável pela FUNCIONALIDADE dos botões de prosseguir e voltar da página de LOGIN e CADASTRO 
/* 1º a justificativa é pela redundância e extenção do código, por conta disso fiz essa separação, para manter a 
    legibilidade das outras funções da página */

/*
    Explicação da função:
    1º todas as seções que correspondem a uma etapa do processo de cadastro são recuperadas pelo queryselector
  
    2º criei uma automatização que recebesse como parâmetro o ID da seção, de forma que se for clicado em prosseguir
    a seção atual irá perder a classe ATIVO, que permite atribui a seção um display FLEX, e a seção seguinte recebe a 
    classe ATIVO... Essa é a mesma lógica usado na volta 
        2.1  Toda seção de cadastor tem um ID que segue a seguinte sequência #cadastro-etapa x (valor correspondente)   
        2.2  Todas as seção recebem um ATIVO em sua classe, que está destacado no CSS ( telaCadastro )

    Obs:. Não é uma das soluções mais escaláveis, porém permite um controle maior da atividade
*/


const btnContinuarEtapa2 = document.querySelector('#btn-continuar-etapa2').addEventListener('click', (e) => {
    e.preventDefault();
    recuperandoContainer('cadastro-etapa2', 'cadastro-etapa3'); 
});

const btnVoltarEtapa2 =  document.querySelector('#btn-voltar-etapa2').addEventListener('click', (e) => {
    e.preventDefault();
    recuperandoContainer('cadastro-etapa3', 'cadastro-etapa2'); 
});

const btnFinalizarCadastro = document.querySelector('#btn-continuar-etapa3').addEventListener('click', (e) => {
    e.preventDefault();
    recuperandoContainer('cadastro-etapa3', 'finalizando-cadastro');
});

function recuperandoContainer (seCaoUm, seCaoDois) {
    const secaoAtual = document.querySelector(`#${seCaoUm}`)
    const secaoAtualDesejada = document.querySelector(`#${seCaoDois}`)

    //Aqui também deveria passar uma validação se todas as informações estão preenchidas 

    secaoAtual.classList.remove('ativo'); 
    secaoAtualDesejada.classList.add('ativo'); 
}