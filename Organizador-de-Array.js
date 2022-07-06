var tabela = [15, 11, 10 ,7, 6, 2]
for (contador1 = 0; contador1 < tabela.length; contador1++) {
    var contador2 = contador1 + 1
    for (contador2 ; contador2 < tabela.length; contador2++) {
        var firstValue = tabela[contador1]
        var secondValue = tabela[contador2]
        if (firstValue > secondValue) {
            tabela[contador1] = secondValue
            tabela[contador2] = firstValue
        }
    }
}
console.log(tabela)
