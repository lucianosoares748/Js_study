//AQUI VAMOS USAR O 'FOR' PARA VISUALIZAR TODOS ELEMENTOS DO ARRAY
let num = [4, 8, 5, 2, -1, 7];
num.sort();

/*
posso utilizar o for para me mostrar todos o elementos do array 
sem precisar dar um console.log em cada um
*/

for (pos = 0; pos < num.length; pos++) {
  //e para ver basta eu atribuir o 'pos' ao 'num' para visualizar todos os elementos que ele mapeou
  console.log(num[pos]);
  //aqui ele irá me mostrar cada posição(pos) com cada elemento(num)
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

/*
LEMBRANDO QUE TEMOS SEMPRE ESSA OPÇÃO DE FOR IN QUE SERVE APENAS 
PARA OBJETOS E ARRAYS

for(let pos in num) {
  console.log(num[pos]);

}
*/
console.log(`Vetor: ${num}`);
