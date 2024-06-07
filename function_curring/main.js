// cuuring by using bind method

let multiplyByBind = function name(x, y) {
  console.log(x * y);
};

let bindMultiplyByTwo = multiplyByBind.bind(this, 2);
bindMultiplyByTwo(10);

let bindMultiplyByFive = multiplyByBind.bind(this, 5);
bindMultiplyByFive(10);

// Curring by using closure

let multiplyByClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let closureMultiplyByTwo = multiplyByBind.bind(2);
bindMultiplyByTwo(10);

let closureMultiplyByFive = multiplyByBind.bind(5);
bindMultiplyByFive(10);
