// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso'); // NodeList

// Transformando em um array
const arrayCursos = Array.from(cursos);

/*OBS: Sempre que usarmos "retorno de array", será utilizado o método .map() */
const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const qtdAulas = curso.querySelector('.aulas').innerText;
  const horasCurso = curso.querySelector('.horas').innerText;
  return {
    titulo: titulo,
    descricao: descricao,
    qtdAulas: qtdAulas,
    horasCurso: horasCurso,
  };
});

objetosCurso;

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosMaiores100 = numeros.filter((n) => n > 100);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((item) => item === 'Baixo');


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompra =  compras.reduce((acc, item) => {
    const numeroLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
    return acc + numeroLimpo
}, 0);