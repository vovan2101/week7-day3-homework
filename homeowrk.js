// exersise 1

function createAdder(x) {
    return function(y) {
      return x + y;
    };
  };

const addEight = createAdder(8)
console.log(addEight(10)); 
console.log(addEight(17)); 
console.log(addEight(50)); 
console.log(addEight(100)); 
console.log(addEight(92)); 

const addThree = createAdder(3)
console.log(addThree(10)); 
console.log(addThree(17)); 
console.log(addThree(50)); 
console.log(addThree(100)); 
console.log(addThree(92))