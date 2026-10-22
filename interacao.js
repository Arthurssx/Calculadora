function somar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtrair() {
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let resultado = n3 - n4;
    document.getElementById("resultado2").innerText = "Resultado: " + resultado;
}

function mutiplicar() {
    let n5 = Number(document.getElementById("n5").value);
    let n6 = Number(document.getElementById("n6").value);
    let resultado = n5 * n6;
    document.getElementById("resultado3").innerText = "Resultado: " + resultado;
}

function divisão() {
    let n7 = Number(document.getElementById("n7").value);
    let n8 = Number(document.getElementById("n8").value);

    // Evita erro caso tentem dividir por zero
    let resultado = n8 !== 0 ? n7 / n8 : "Erro (div por 0)";
    document.getElementById("resultado4").innerText = "Resultado: " + resultado;
}