const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

let pessoa = new Pessoa("Maria", 24, new Date(1998, 5, 6));
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.dataNascimento)

let pessoaf = new Pessoa("José", 22, new Date(2000, 3, 9), "12345679800");
console.log(pessoaf.nome)
console.log(pessoaf.idade)
console.log(pessoaf.dataNascimento)
console.log(pessoaf.cpf)


let pessoaj = new Pessoa("Maria Atacado", 20, new Date(2002, 1, 1), "12345678000001");
console.log(pessoaj.nome)
console.log(pessoaj.idade)
console.log(pessoaj.dataNascimento)
console.log(pessoaj.cnpj)


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
