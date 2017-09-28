
( function (){

    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {
      name: 'Vick',
      lastname: 'Cruz',
      age: 30
    }


    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(person.name);
    console.log(person.lastname);
    console.log(person.age);



    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books.push (
      book1 = {
        name: 'Maus',
        pages: 100
      },
      book2 = {
        name: 'Novo livro',
        pages: 50
      },
      book3 = {
        name: 'Pipas',
        pages: 150
      }
  )
  /*
  Mostre no console todos os livros.
  */

  console.log(books);

  /*
  Remova o último livro, e mostre-o no console.
  */

  console.log(books.pop());

  /*
  Mostre no console os livros restantes.
  */
  console.log(books);


    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var booksStr = JSON.stringify(books);
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */

    console.log(booksStr);


    /*
    Converta os livros novamente para objeto.
    */

    JSON.parse(booksStr);

    console.log( '\nAgora os livros são objetos novamente:' );


    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */

    for (var i=0; i < books.length; i++) {
      for (var prop in books[i]) {
          console.log(prop + ' : ' + books[i][prop] );
      }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */

    var myName = ['V', 'i', 'c', 'k'];


    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log(myName.join(''));


    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */

    console.log('Meu nome invertido: ' + myName.reverse());

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    console.log('Em ordem alfabetica: ' + myName.sort());

    // REVISAO

  })();
