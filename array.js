// OBS: FUNÇÃO SEM "return" É "undefined" SEMPRE.


// [].forEach()
// "[].forEach(callback(itemAtual, index, array))" a função de callback é executada para cada item do array.
// Ela possui três argumetos, itemAtual (valor do item da array), index(index do valor na array) e array (array original).

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array){
    console.log(item.toUpperCase());
});

// Com arrow function

carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
})

/*
    O método sempre retorna undefind.
    Na interação com o forEach o item do array não muda.
*/



// Arrow Function

const li = document.querySelector('li');

li.forEach( i => i.classList.add('ativa')); // Arrow Function

li.forEach(function(item){         // Forma convencional
    item.classList.add('ativa');
})



// Modificar o Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

const carros1 = ['Ford', 'Fiat', 'Honda'];

carros1.forEach((item, index, array) => {
    array[index] = 'Carro' + item;
});

carros1; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

/*
    É melhor utilizarmos o map para isso.
*/



// [].map()
// "[].map(callback(itemAtual, index, array))" funciona da mesma forma que o forEach(),
// porém ao invés de retorar undefined, retorna uma NOVA array com valores atualizados de acordo com o return de cada interação.

const carros2 = ['Ford', 'Fiat', 'Honda'];

const newCarros2 = carros2.map((item) => {
    return 'Carro ' + item; 
});

carros2; // ['Ford', 'Fiat', 'Honda'];
newCarros2; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];



// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, 
// o valor retornado como de qualquer função que não possui return, será undefined.

const carros3 = ['Ford', 'Fiat', 'Honda'];

const newCarros3 = carros.map((item) => {
    const novoValor = 'Carro ' + item;
});

newCarros3; // [undefined, undefined, undefined];



// Arrow Function e [].map()
// Uma Arrow Function de linha única e sem chave íra retornar o valor após a fat arrow "=>".

const numeros = [2,4,6,8,10,12,14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// ====================================================================================================================
// [].map() vs [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize map, pois assim uma nova array com os valores modificados é retornada
// e você pode imediatamente iterar novamente sobre os valores.
// ====================================================================================================================

// [].map() com Objetos
// Map pode ser muito útil para interagirmos com uma array de objetos,
// onde desejamos isolar um valor único de cada objeto.

const aulas = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
]

const tempoAulas = aulas.map((aula => aula.min));

console.log(tempoAulas) // [15, 10, 20, 25];

function nomeAulas (aula) {
    return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);

// Explicando o que acontece aqui ->  const arrayNomeAulas = aulas.map(nomeAulas);
/*
1 - Criamos uma função que recebe um objeto com o nome aula (poderia ser qualquer nome);
2 - A função retorna o objeto que passaremos como parâmetro retornando o atributo "nome" dentro desse objeto
3 - Criamos a constante "arrayNomeAulas" que recebe o array "aulas", usamos o map para percorrer esse array e passaremos como callback a função "nomeAulas", nisso ocorre o seguinte processos:
    
    ° No primeiro item percorrido pelo map ele passaram para nossa função callback "nomeAulas" o index 0 do array "aulas", sendo assim, a função "nomeAulas" tem como retorno o item "nome" do objeto "aula".
    OBS: caso não existisse o valor "nome" no array "aulas", a nossa função retornaria "(4) [undefined, undefined, undefined, undefined]"
*/

console.log(arrayNomeAulas);

/*
resultado do console: 

    4) ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
    0: "HTML 1"
    1: "HTML 2"
    2: "CSS 1"
    3: "JS 1"
*/