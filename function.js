// ES5
function cool() {
      console.log('Hello Javascrpt')
}
cool();

// ES6

const cool1 = () => {
      console.log('Hello EcmaScript')
}
cool1()

function fruit(name1,name2) {
      console.log(`Bu ${name1} va ${name2}`)
}
fruit('olma', 'anor');


function nameFruitbyColor(color) {
      if(color === 'red'){
            return 'olma'
      }else if(color === 'yellow'){
            return 'banan'
      }else{
            return false
      }
}

console.log(nameFruitbyColor('yellow'))