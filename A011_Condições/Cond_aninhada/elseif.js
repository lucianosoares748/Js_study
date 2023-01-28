var idade = 65;

if (idade < 16) {
  console.log("não vota");
} else if (idade < 18 || idade >= 65) {
  console.log("voto opcional");
} else {
  console.log("voto obrigatório");
}

/*
depende da situação em condições aninhadas podemos colocar o if do segundo bloco na frente do else
utilizando então o else if que deixa o código mais limpo
*/
