function calcularIMC() {
    // cria referência aos elementos da página
    var inPeso = document.getElementById("peso");
    var inAltura = document.getElementById("altura");
    var outSituacao = document.getElementById("outSituacao");
    var outIMC = document.getElementById("outIMC");

    // obtém os conteúdos dos campos de edição da página
    var peso = Number(inPeso.value);
    var altura = Number(inAltura.value);
    
    // calcula o IMC
    var IMC = (peso)/Math.pow(altura,2);

    if ((peso <= 0 || isNaN(peso)) || (altura <= 0 || isNaN(altura))) {
        alert("Por favor, informe o peso/altura corretamente...");
        inPeso.focus();
        return;
      }

    outIMC.textContent = IMC.toFixed(1) + " de IMC"

    // cria a condição
    if (IMC < 18.5) {
        
        outSituacao.textContent = "Magreza";

    } else if (IMC >= 18.5 || IMC <= 24.9) {
        outSituacao.textContent = "Normal";
        
    } else if (IMC >= 25 || IMC <= 29.9) {
        outSituacao.textContent = "Sobrepeso";
        
    } else if (IMC >= 30 || IMC <= 39.9) {
        outSituacao.textContent = "Obesidade";
        
    } else {
        outSituacao.textContent = "Obesidade Grave";
        
    }

}
// cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btn-calcular");
// registra um evento associado ao botão, para carregar uma função
btResultado.addEventListener("click", calcularIMC)