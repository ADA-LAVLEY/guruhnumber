// const komp = {
//     nomi:"acer",
//     plus() {
//         console.log("komp");
//     }

// }
// const tel = {
//     nomi:"iphone",
//     narx:200,
//         plus() {
//         console.log("tel");
//     }
// }
// if('nomi' in tel)
//     console.log('bor');

// const clone = {}
// for(let key in komp)
//     console.log(key,komp[key]);

// const clone = Object.assign({tel},komp)
//     console.log(clone);

// const clone = {...tel,komp}
// console.log(clone);
// const obj = ["sitora","istora","setora"];
// const win = obj[Math.floor(Math.random() * obj.length)];
// console.log(win);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
// console.log(person.fullName());

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather.firstName);