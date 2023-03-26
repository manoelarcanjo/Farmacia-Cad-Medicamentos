const cadastro = (e) => {
    e.preventDefault();

    const nomeMedicamento = document.getElementById('nomeMedicamento');

    const quantidadeDisponivel = document.getElementById('quantidadeDisponivel');

    const precoUnidade = document.getElementById('precoUnidade');

    const classeMedicamento = document.getElementById('classeMedicamento');

    const formMedicamento = document.getElementById('formMedicamento');
    formMedicamento.style.display = "none";

    const infoMedicamento = document.getElementById('infoMedicamento');
    infoMedicamento.style.display = 'flex'


const infoNomeMedicamento = document.getElementById("infoNomeMedicamento");
const infoQuantidadeMedicamento = document.getElementById("infoQuantidadeMedicamento");
const infoPrecoMedicamento = document.getElementById("infoPrecoMedicamento");
const infoClasseMedicamento = document.getElementById("infoClasseMedicamento");


infoNomeMedicamento.innerHTML = nomeMedicamento.value;
infoQuantidadeMedicamento.innerHTML = `${quantidadeDisponivel.value} Unidades disponíveis`;
infoPrecoMedicamento.innerHTML = `${precoUnidade.value} Reais por unidade`;
infoClasseMedicamento.innerHTML = classeMedicamento.value;
}; 


const esconderInfo = () => {
    const formMedicamento = document.getElementById('formMedicamento');
    formMedicamento.style.display = "flex";

    const infoMedicamento = document.getElementById('infoMedicamento');
    infoMedicamento.style.display = 'none'
};




