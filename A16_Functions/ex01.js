//n é o parâmetro passado para a função ser executada e verificar se é par ou impar
function parImp(n) {
  if (n % 2 == 0) {
    return "É par";
  } else {
    return "É impar"; //esses return's vão para dentro da variável res
  }
}

//chamada para executar a function parImp de dentro de uma variável
let res = parImp(12); //é daqui que eu disparo o parâmetro para minha função

console.log(res);
