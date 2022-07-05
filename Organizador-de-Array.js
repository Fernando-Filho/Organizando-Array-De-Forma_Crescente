var tabela = [9,10,3,5,15]
for (c = 0; c <tabela.length; c++){
    var a = c
    for(b = c+1;b <=tabela.length; b++){
        if(a > b){
            tabela[c] = b
            tabela[c+1] = a
        }
    }

    console.log(tabela)
}
console.log(tabela[c+1] = a)
