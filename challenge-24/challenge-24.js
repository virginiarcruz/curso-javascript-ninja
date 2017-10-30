( function (win,doc){

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */


  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize() { // a estrutura da calculadora vai iniciar com esta função.
      initEvents(); // vai iniciar todos o eventos que tivermos
  }

  function initEvents (){
      Array.prototype.forEach.call($buttonsNumbers, function(button) {
        button.addEventListener('click', handleClickNumber, false);
      });

      Array.prototype.forEach.call($buttonsOperations, function(button) {
        button.addEventListener('click', handleClickOperation, false);
      });

      $buttonCE.addEventListener('click', handleClickCE, false);
      $buttonEqual.addEventListener('click', handleClickEqual, false);
  }


  function handleClickNumber() {
    $visor.value += this.value; // cada vez que clicar no botão atualiza o visor
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations () { // pega os valores das operacoes +-x%
    return Array.prototype.map.call($buttonsOperations, function(button) {
      return button.value;
    });
  }// como o $buttonOperations não é um array deve converte em array primeiro. Então utilizo o Array.prototype;

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value); // remove o último item se for um operador
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues); // a funcao do reduce vai calcular todos os valores, o valor da funcao vai pra dentro do reduce
  }

  function getRegexOperations (){ // a regex pura não se consegue passar por string
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g'); //  o join pega a string e junta
  }

  function calculateAllValues (accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return doOperation(operator, firstValue, lastValue) + lastOperator; // ja soma o lastOperador no final que não precisa repetir no switch
  }

  function doOperation (operator, firstValue, lastValue) { // funcao que verifica o tipo do operador e dar o resultado
    switch(operator) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
    }
  }


  initialize();


}(window, document));
