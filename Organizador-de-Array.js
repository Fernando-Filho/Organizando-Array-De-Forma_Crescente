var tabela = [9,10,3,5,15]
var a = 0
var b = 1
for (c = 0; c <tabela.length; c++){
    a = tabela[c]
    b = tabela[c+1]
    for(b;b <=tabela.length; b++){
        tabela[c] = b
        tabela[c+1] = a
    }

}
console.log(tabela)