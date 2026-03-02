function calcular() {

    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let valorMetro = parseFloat(document.getElementById("tipo").value);
    let formaPagamento = document.getElementById("pagamento").value;

    if (isNaN(largura) || largura <= 0 || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Digite largura e altura válidas.";
        return;
    }

    let area = largura * altura;
    let valorBruto = area * valorMetro;
    let desconto = 0;

    if (formaPagamento === "avista") {
        desconto = valorBruto * 0.15;
    } else if (formaPagamento === "cartao") {
        desconto = valorBruto * 0.05;
    }

    let valorFinal = valorBruto - desconto;

    let formatar = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    let resultadoTexto = `
        <strong>Área Total:</strong> ${area.toFixed(2)} m²<br>
        <strong>Valor Original:</strong> ${formatar(valorBruto)}<br>
        <strong>Desconto:</strong> ${formatar(desconto)}<br>
        <strong>Valor Final:</strong> ${formatar(valorFinal)}
    `;

    if (formaPagamento === "cartao") {
        let parcelas = valorFinal / 10;
        resultadoTexto += `<br><strong>Em até 10x de:</strong> ${formatar(parcelas)}`;
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
}
