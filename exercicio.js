const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
let primeiroElemetoArray = comidas.slice().shift();
// Remova o ultimo valor de comidas e coloque em uma váriavel
let ultimoElementoArray = comidas.slice().pop();
// Adicione 'Arroz' ao final do array
comidas.push('Arroz');
// Adicione 'Peixe' e 'Batata' ao início do array
comidas.unshift('Peixe', 'Batata');


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
// Invera a ordem dos estudantes
estudantes.reverse();
// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana');
// Verifique se Juliana faz parte dos estudantes
estudantes.includes('Juliana');


let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

// substitua section por ul e div com li, ultilizando split e join
let htmlString = html.split('section');
htmlString = htmlString.join('ul')


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o uíltimo carro, mas antes de remover salve a arry original em outra variável
let newArray = carros.slice();
carros.pop();