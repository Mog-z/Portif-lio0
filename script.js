const profissoes = [
    "Desenvolvedor Full Stack", 
    "Especialista em Automação e IA", 
    "Engenheiro de Integrações"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === profissoes.length) {
        count = 0;
    }
    currentText = profissoes[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("efeito-digitacao").textContent = letter + "|";

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); 
    } else {
        setTimeout(type, 80);
    }
})();