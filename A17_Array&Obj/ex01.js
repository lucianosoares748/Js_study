//Objeto amigo, que consegue guardar vários atributos e até function (métodos)
let amigo = {
  nome: "José",
  sexo: "Masculino",
  peso: 85.4,
  //function engordar(método)dentro do Obg amigo
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};

//chamada para o método dentro do OBJ amigo
amigo.engordar(2);

console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`);
