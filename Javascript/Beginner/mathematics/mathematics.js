function main(){

    console.log(simpleAdding(12));
    console.log(simpleAdding(16));
    console.log(simpleAdding(20));
    console.log(simpleAdding(100));
    console.log(simpleAdding(1000));

    console.log(factorial(10));
    console.log(factorial(5));
    console.log(factorial(16));

    var numberset = [12, 16, 20, 100, 1000]
    console.log(findLargest(numberset));
    console.log(findSmallest(numberset));
    console.log(findMean(numberset));
    console.log(findRange(numberset));

    console.log(contains(numberset, 20));
    console.log(contains(numberset, 50));

}

/*Adds every number leading up to that number together. E.g. simpleAdding(4)
  returns 10 (because 1+2+3+4 = 10).
  Use the for loop to go through every number.*/
  function simpleAdding(number){
      var result = 0;
      for (i = 0; i <= number; i++){
        result = result + i;
      }
        return result;
  }

/*Returns the factorial of the given number. E.g. factorial(4)
  returns 24 (because 4*3*2*1 = 24)
  Use the for loop to go through every number.*/
  function factorial(number){
      var result = 1;
      for (i = 1; i <= number; i++){
      result = result * i;
    }
      return result;
  }

  function findLargest(numberset){
    var largest = numberset[0];

    for (let i = 1; i<numberset.length; i++){
      if(numberset[i]> largest){
        largest = numberset[i];
      }
    }
    return largest;
  }

  function findSmallest(numberset){
    var Maxnumber = numberset[0];
    var number = numberset.length;

    for (var i = 0; i<number; i++){
      if(numberset[i]< Maxnumber){
        Maxnumber = numberset[i];
      }
    }
    return Maxnumber;
  }

  function findMean(numberset){
    var total = 0, i;

    for (i = 0; i < numberset.length; i++){
      total += numberset[i];
    }
    return total / numberset.length;
  }

  function findRange(numberset){
    var range = findLargest(numberset) - findSmallest(numberset);{

      return range;
    }
}

function contains(numberset, number) {

    for (i = 0; i < numberset.length; i++){
      if (numberset[i] == number) {
        return true;
      }
    }
    return false;

  }
