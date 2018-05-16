class Human{
    constructor(){
      this.gender = "male";
    }
    
    printGender = () => {
      console.log(this.gender);
    }
  }
  
  
  class Person extends Human {
    constructor(){
      super();
      name = "Max";
      gender = "female";
    }
    
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  
  const person = new Person();
  person.printMyName();
  person.printGender();

  
  
  // Spread & Rest Operators
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4];

  // Logs [1, 2, 3, 4]
  console.log(newNumbers);

  /* Rest Operator is used to merge a list of
   function arguments into an array
   function sortArgs(..args){
     return args.sort();
   }*/

  const person = {
    name: "Max"
  }

  const newPerson = {
    ...person,
    age: 28
  }


  /* console logs [object Object]{
    age: 28,
    name: "Max"
  }*/
  console.log(newPerson);
  
  // Rest Operator
  const filter = (...args) => {
    return args.filter(el => el === 1);
  }

  // logs [1]
  console.log(filter(1, 2, 3));


  /* Destructing 
     Easily extract array elements or object properties
     and  store them in variables for arrays and object 

     [a, b] = ["Hello", "Max"]
     console.log(a) --> Hello
     console.log(b) --> Max

     Object Destructing
     {name} = {name: "Max", age: 28}
     console.log(name) //Max
     console.log(age) -->undefined */

     const numbers = [1, 2, 3];
     [num1, num2] = numbers;

     // Logs 1 , 2
     console.log(num1, num2);
    


