/* --------------- Profissional --------------- */
const nomeProf = document.querySelector('#nome');

const opcaoNomeSocial = [];
opcaoNomeSocial[0] = document.querySelector('#nome-social');
opcaoNomeSocial[1] = document.querySelector('#sem-nome-social');

const nomeSocial = document.querySelector('#entrada-nome-social');
const emailProf = document.querySelector('#email');
const senhaProf = document.querySelector('#senha');
const telefoneProf = document.querySelector('#tel');
const genero = document.querySelector('#select-genero');
const cpf = document.querySelector('#cpfProf');

const categorias = [];

const hardSkill = document.querySelector('#categoria');
const tempoExperiencia = document.querySelector('#tempoExperiencia');
const formaPagamento = document.querySelector('#cadastro-forma-pagamento');

const modalidade = [];
modalidade[0] = document.querySelector('#presencial');
modalidade[1] = document.querySelector('#homeOffice');
modalidade[2] = document.querySelector('#hibrido');
modalidade[3] = document.querySelector('#flexivel');

const opcaoPCD = [];
opcaoPCD[0] = document.querySelector('#radio-prof-deficiente');
opcaoPCD[1] =document.querySelector('#radio-prof-sem-deficiente');

const tipoPCD = [];
tipoPCD[0] = document.querySelector('#fisica');
tipoPCD[1] = document.querySelector('#mental');
tipoPCD[2] = document.querySelector('#auditiva');
tipoPCD[3] = document.querySelector('#visual');

export  {
    nomeProf,
    nomeSocial,
    emailProf,
    telefoneProf,
    genero,
    cpf,
    categorias,
    hardSkill,
    tempoExperiencia,
    formaPagamento,
    modalidade,
    opcaoPCD,
    tipoPCD,
    senhaProf
};







