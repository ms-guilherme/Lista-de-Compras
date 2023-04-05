var itens = [];
//alert('Olá! Seja bem vindo(a) ao esboço do programa de "Carrinho de compras"!');

function NovoItem() {

    if (document.getElementById("produto").value != "" && document.getElementById("valor").value != "") {
        let nomeProduto = document.getElementById("produto");
        let valorProduto = document.getElementById("valor");
        let quantProduto = document.getElementById("quantidade");
        let saldoAtual = document.getElementById("saldo");
        let total = document.getElementById("total_price");

        itens.push({
            nome: nomeProduto.value,
            valor: valorProduto.value,
            quant: quantProduto.value,
            saldo: saldoAtual.value
        })

        let soma = 0;
        let section = document.getElementById("product_div");

        if (document.getElementById("product_section").hidden == true) {document.getElementById("product_section").hidden = false}

        section.innerHTML = "";
        itens.map(function(val) {
            if (val.quant == "" || val.quant == 1) {
                val.quant = 1;
                section.innerHTML += `
                <div class="products">
                <h3 class="name">${val.nome} (x${val.quant})</h3>
                <h3 class="prices" id="prices"><span id="span_prices">${parseFloat(val.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')}</span></h3>
                </div>`;
            } else {
                section.innerHTML += `
                <div class="products">
                <h3 class="name">${val.nome} (x${val.quant})</h3>
                <h3 class="prices" id="prices"><span id="span_prices">${parseFloat(val.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')} / Total: ${parseFloat(val.valor * val.quant).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')}</span></h3>
                </div>`;
            }
            soma += parseFloat(val.valor) * val.quant;
        })
        
        if (saldoAtual.value != "") {
            total.innerHTML = `Total: ${soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')}<br>Seu saldo agora é de ${(saldoAtual.value - soma).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')}`;
        } else {total.innerHTML = `Total: ${soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\s/g,'')}`}
        


        nomeProduto.value = "";
        valorProduto.value = "";
        quantProduto.value = "";
        SubmitIn();
    
    }
}

function AlterarValor() {
    alert("OI");
}



function SubmitIn() {

    let nomeProduto = document.getElementById("produto");
    let valorProduto = document.getElementById("valor");
    let quantProduto = document.getElementById("quantidade");

    if (nomeProduto.value != "" && valorProduto.value != "" && quantProduto.value != "") {   
        document.getElementById("submit").style.backgroundColor = "#43b143"; 
    } else if (nomeProduto.value != "" && valorProduto.value != "") {   
        document.getElementById("submit").style.backgroundColor = "yellow" //"#fdeb5d"; 
    } else {
        document.getElementById("submit").style.backgroundColor = "red";
    }

}

function SubmitOut() {
    document.getElementById("submit").style.backgroundColor = "#eee7b1"
}