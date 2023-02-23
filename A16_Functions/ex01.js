//n é o parâmetro passado para a função ser executada e verificar se é par ou impar
function parImp(n) {
  if (n % 2 == 0) {
    return "é par";
  } else {
    return "é impar"; //esses return's vão para dentro da variável res
  }
}

//chamada para executar a function parImp de dentro de uma variável
let res = parImp(1354); //é daqui que eu disparo o parâmetro para minha função

console.log(`O seu res ${res}`);
