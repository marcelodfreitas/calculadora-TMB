function calcularTMB(peso, altura, idade, sexo, nivelAtividade) {
    let tmb;
    
    if (sexo === 'masculino') {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else if (sexo === 'feminino') {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    } else {
        throw new Error("Sexo inválido. Use 'masculino' ou 'feminino'.");
    }
    
    let fatorAtividade;
    
    switch (nivelAtividade) {
        case 'sedentario':
            fatorAtividade = 1.2;
            break;
        case 'levementeAtivo':
            fatorAtividade = 1.375;
            break;
        case 'moderadamenteAtivo':
            fatorAtividade = 1.55;
            break;
        case 'muitoAtivo':
            fatorAtividade = 1.725;
            break;
        case 'extremamenteAtivo':
            fatorAtividade = 1.9;
            break;
        default:
            throw new Error("Nível de atividade inválido.");
    }
    
    return tmb * fatorAtividade;
}

function calcularIngestaoAgua(peso) {
    return peso * 0.04;
}

document.getElementById("formTMB").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const nivelAtividade = document.getElementById("nivelAtividade").value;
    
    const resultado = calcularTMB(peso, altura, idade, sexo, nivelAtividade);
    const ingestaoAgua = calcularIngestaoAgua(peso);
    
    document.getElementById("resultado").textContent = `Gasto calórico diário: ${resultado.toFixed(2)} kcal`;
    document.getElementById("agua").textContent = `Qtnd de água:<br> ${ingestaoAgua.toFixed(2)} L por dia`;
    
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("modal").addEventListener("click", function() {
    location.reload();
});