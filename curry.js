// curry function
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}


function abc(a, b, c) {
  return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}


let curriedABC = curry(abc);
let curriedABDEF = curry(abcdef);

curriedABC('A')('B')('C'); // 'ABC'
curriedABC('A', 'B')('C'); // 'ABC'
curriedABC('A', 'B', 'C'); // 'ABC'

curriedABDEF('A')('B')('C')('D')('E')('F'); // 'ABCDEF'
curriedABDEF('A', 'B', 'C')('D', 'E', 'F'); // 'ABCDEF'

