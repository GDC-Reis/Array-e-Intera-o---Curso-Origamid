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



// [].reduce()
// "[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)"
// Executa a função de callback para cada item da Array.
// Um valor especial existe nessa função de callback, ele é chamado de "acumulador", 
// mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];
const total1 = aulas.reduce((acumulador, item) => {
    return acumulador + item;
}, 0); // 0 -> Valor do acumulador 
total1; // 65

// OBS:
/*
    Funciona da seguinte forma (é apresentado no console):
    0 10  -> 0 Valor passado no acumulador, será somado o acumulador + 10 (primeiro index do array)
    10 25 -> Valor do acumulador se torna 10 por conta da soma feita na primeira interação entre os items, agora o valor do acumulador (10) será somado ao segundo item do array (25) sendo o retorno do mesmo 35
    35 30 -> O mesmo processo que ocorre acima, apenas trocando os valores
    65 -> Valor final da iteração entre os items.
*/

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165


// ==== REDUCE PASSO A PASSO 1 ====
/*
    O primerio parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração.
    Nas interações seguintes este valor passa a ser o retornado pela anterior.


    const aulas = [10, 25, 30];

    // 1
    aulas.reduce((0, 10 -> Primeiro Item do Array)) => {
        return 0 + 10;
        // 0 -> Valor declarado da iteração do arrau
        // 10 -> Primeiro item do array
    }, 0); // Retorna 10


    // 2
    aulas.reduce((10, 25 -> Segundo Item do Array) => {
        return 10 + 25;
        // 10 -> Retorno da primeira iteração
        // 25 -> Segundo item do array
    }, 0); // Retorna 35


    // 3
    aulas.reduce((35, 30 -> Terceiro Item do Array) => {
        return 35 + 30;
        // 35 -> Retorno da segunda iteração
        // 30 -> Terceiro item do array
    }, 0); // Retorna 65

*/



// Maior Valor com [].reduce()

const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});

maiorValor; // 60