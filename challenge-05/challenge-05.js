/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [ 'virginia', 2, {a: 1}, true, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var myArr = [ 'virginia', 2987, {a: 1}, true, null  ];

function myFunction (myArg) {
    return myArg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log ( myFunction (myArr)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr, indiceArr) {
    return arr [indiceArr];
}

/* 
function myFuncArr () {
    return {
        prop1: ['vick', 2, 3, 4, 5],
        prop2: 2,
    }
}
//var indiceArray = myFuncArr();
myFuncArr().prop1[myFuncArr().prop2];
 */

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = ['vick', 1, true, [1, 2, 3], NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log ( myFunction2(myVar2,0) );
console.log ( myFunction2(myVar2,1) );
console.log ( myFunction2(myVar2,2) );
console.log ( myFunction2(myVar2,3) );
console.log ( myFunction2(myVar2,4) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (livroName) {
    var todosLivros= {
        livro1: {
            quantidadePaginas: 40,
            autor: 'vick',
            editora: 'Podim',
        },
        'Nome do Livro 2': { 
            quantidadePaginas: 90,
            autor: 'harry',
            editora: 'JusVita',
        }, 
        livro3: {
            quantidadePaginas: 140,
            autor: 'potter',
            editora: 'Saraiva',
        }
    };

    return !livroName ? todosLivros : todosLivros [livroName ]

}

book().livro3;



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var fichaLivro = book();

console.log("O livro" + fichaLivro.livro1 + " tem " + fichaLivro.livro1.quantidadePaginas  + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + fichaLivro.livro1 + "é " +fichaLivro.livro1.autor+ ".")


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro " + fichaLivro.livro1 + "foi publicado pela editora " +fichaLivro.livro1.editora + ".")
