//Variáveis
//let idade = 5;
//console.log(idade);
//let altura = 170;
//console.log(altura);
//Definição de variáveis e imprimindo na tela

///////////////////////////////////////////////////////////////////

//Constantes
//não pode mudar uma varoável constante
//const valorIngressoAdulto = 20;
//console.log(valorIngressoAdulto);

/////////////////////////////////////////////////////////////////////

//Tipos de referencia
//let nome = 'leonardo'; // string
//let idade = 29; // number
//let estaAprovado = true; // boolean
//let sobrenome = undefined; //indefinida
//let corSelecionada = null; //redefinir um valor

///////////////////////////////////////////////////////////////////

//Objetos
//Juntar informações em um lugar só podendo acessar pela propriedade do objeto
//Objeto pessoa
//let pessoa = {
 //   nome: 'Leonardo',
 //   idade: 29,
 //   estaAprovado: true,
 //   sobrenome: 'Gallina'
//};

////////////////////////////////////////////////////////////////////

//Arrays (conjunto de dados que pode ser acessado por um índice)
//let familia = [true,45,'Leonardo',29];
//console.log(familia.length); //length é o tamando do array
//console.log(familia[2]) //O índice que quero buscar dentro do array

//let colegaDeServico = ['Julia',25,'Recife',];
//console.log(colegaDeServico.length);
//console.log(colegaDeServico[0]);
//console.log(colegaDeServico[1]);
//console.log(colegaDeServico[2])

/////////////////////////////////////////////////////////////////////

//Funções (Verbo + Substantivo)
//let corSite = 'azul';
//function resetaCor(cor, tonalidade){
//    corSite = cor + ' ' + tonalidade;
//};
//console.log(corSite);
//resetaCor("vermelho","fogo");
//console.log(corSite)

//tipos de função (Realiza uma terefa e não devolve nada)
//function dizerNome(){
//    console.log('Leonardo');
//}
//dizerNome();

//Faz uma operação e retorna algo
//function multiplicarValor(valor){
//    return valor* 2;
//}
//console.log(multiplicarValor(5))

//let resultado = (multiplicarValor(5));
//console.log(resultado);

//////////////////////////////////////////////////////////

//Operadores aritméticos
//let salario = 100;

// +, -, *, /, **

//console.log(salario + salario);
//console.log(salario - salario);
//console.log(salario * salario);
//console.log(salario / salario);
//console.log(salario ** salario);

// ++, -- (operados de incremento e decremento)
//let idade = 18;
//console.log(++idade);

//let idade = 18;
//console.log(--idade);

//Atribuição
//let valorTecladoGamer = 100;
//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
//valorTecladoGamer += valorTecladoGamer;
//console.log(valorTecladoGamer);

//Operadores igualdade
//igualdede estrita (=== compara os valores e o tipo)
//console.log(1 === 1); true
//console.log(1 === '1'); false

//igualdede solta (== compara os valores, se for tipo diferente ele converte para tipos iguais)
//console.log(1 == 1); true
//console.log(1 == '1'); true

//Operador ternário
//Tem um cliente, + 100 pontos é premium, senao comum
//let pontos = 100;
//let tipo = pontos > 100 ? 'premium' : 'comum';
//console.log(tipo);

//Operadores lógicos e (&&)
//retorna true se os dois operandos são true
//console.log(true && true); (retorna true)
//console.log(false && true); (retorna false)

//let maiorDeIdade = true;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//Operadores lógicos ou (||)
//retorna true se um dos operandos for true
//console.log(true && true); (retorna true)
//console.log(false && true); (retorna false)

//let maiorDeIdade = false;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//Operadores lógicos NOT ( ! )
//let candidatoRecusado = !podeAplicar;
//console.log(candidatoRecusado);