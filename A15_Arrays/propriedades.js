let num = [1, 2, 3];

//cria um espaço no array aonde vc desejar e adiciona o elemento que você declarar
num[4] = 7;

//adiciona elemento no fim do array
num.push(4);

//coloca os elementos do array em forma crescente
num.sort();

//num.length mostra o comprimento do seu array
console.log(`Esse é o tamanho ou comprimento do array ${num.length}`);

//aqui eu pego um elemento especifico do array, puxando pelo seu indicador neste caso o num[1]
console.log(`Aqui eu estou pegando um elemento especifico do array ${num[1]}`);

console.log(`este ${num} é o meu array de objetos/elementos`);
