// Métodos de Acesso [].concat()

// Os métodos abaixo não modificam a array original, apenas retornam uma array modificafa.
// "[].concat()" irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransporte = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];



// [].includes(), [].indexOf() e [].lastIndexOf()
// "[].includes(valor)" verifica se a array possui o valor e retorna true ou false.
// "[].indexOf(valor)" verifica se a array possui o valor e retorna o index do primeiro valor na array. 
// Já o "[].lastIndexOf(valor)" retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5



// [].join()
// "[].join(separador)" junta todos os valores da array e retorna uma string com eles.
// Se você passar um valor com parâmetro, este será utilizado durante a junção de cada item do array.

linguagens.join(); // 'html,css,js,php,python,js'
linguagens.join(' '); // 'html css js php python js'
linguagens.join('-_-') // 'html-_-css-_-js-_-php-_-python-_-js'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']

htmlString = htmlString.join('h1');
// '<h1>Título Principal</h1>'



// [].slice()
// "[].slice(início, fim)" retorna os itens da array começando pelo início e indo até o valor de final.

linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice(); // Clone de array