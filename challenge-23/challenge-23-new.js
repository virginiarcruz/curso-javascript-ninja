( function(win, doc){
  'user strict';


  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $visor = document.querySelector('[data-js="visor"]');
  var $numbers = document.querySelectorAll('[data-js="number"]');
  var $operators = document.querySelectorAll('[data-js="operator"]');
  var $clear = document.querySelector('[data-js="clear"]');
  var $equal = document.querySelector('[data-js="equal"]');


    Array.prototype.forEach.call($numbers, function(number){
      number.addEventListener('click', numberVisor, false);
    });

    Array.prototype.forEach.call($operators, function(operator) {
      operator.addEventListener('click', operation, false);
    });


    $equal.addEventListener('click', resultEqual, false);


    function numberVisor(){
      $visor.value +=this.value;
    }

    function operation () {
        $visor.value = removeLastOperator($visor.value);
        $visor.value += this.value;
    }

    function lastItemoperator () {
      var operators = ['+', '-', 'x', '%'];
      var lastItem = $visor.value.split('').pop();
      return operators.some( function (operator){
        return operator === lastItem;
      })
    }

    function removeLastOperator(visorValue) {
      if(lastItemoperator(visorValue))
        return visorValue.slice(0, -1);
      return visorValue;
    }


    function resultEqual (){
      $visor.value = removeLastOperator($visor.value);
      var visorAll = $visor.value.match(/(\d+)([+x%-])?/g);

      $visor.value = visorAll.reduce(function (acc, value){
          var firstValue = acc.slice(0, -1);
          var operator = acc.split('').pop();
          var lastValue = removeLastOperator(value);
          var lastOperator = lastItemoperator(value) ? value.split('').pop() : '';
          switch (operator) {
            case '+' :
              return Number(firstValue) + Number(lastValue) + lastOperator;
            case '-' :
              return Number(firstValue) - Number(lastValue) + lastOperator;
            case 'x' :
              return Number(firstValue) * Number(lastValue) + lastOperator;
            case '%' :
              return Number(firstValue) / Number(lastValue) + lastOperator;
          }
      });
    }

    function clear() {
      $visor.value = 0;
    }

    $clear.addEventListener('click', clear, false);












})(window, document);




