function calcular() {

    let largura = parseFloat(document.getElementById("largura").value);
    let valorMetro = parseFloat(document.getElementById("tipo").value);
    let formaPagamento = document.getElementById("pagamento").value;

    if (isNaN(largura) || largura <= 0) {
        document.getElementById("resultado").innerHTML = "Digite uma largura válida.";
        return;
    }

    let valorBruto = largura * valorMetro;
    let desconto = 0;

    if (formaPagamento === "avista") {
        desconto = valorBruto * 0.15;
    } else if (formaPagamento === "cartao") {
        desconto = valorBruto * 0.05;
    }

    let valorFinal = valorBruto - desconto;

    let brutoFormatado = valorBruto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let descontoFormatado = desconto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let finalFormatado = valorFinal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let parcelas = (valorFinal / 10).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let resultadoTexto = `
        <strong>Valor Original:</strong> ${brutoFormatado}<br>
        <strong>Desconto:</strong> ${descontoFormatado}<br>
        <strong>Valor Final:</strong> ${finalFormatado}
    `;

    if (formaPagamento === "cartao") {
        resultadoTexto += `<br><strong>Em até 10x de:</strong> ${parcelas}`;
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
}
