// Variables
class Enemy {
    constructor(enemyName,healthPoints,attack,defense){
        this.enemyName=enemyName
        this.healthPoints=healthPoints
        this.attack=attack
        this.defense=defense
    }
}

let hero = {
    heroName: "Hero",
    healthPoints: 250,
    attack:10,
    defense:10,
    MP: 100,
}

const goblin = new Enemy("Goblin",50,5,0)
console.log(goblin)

// Fighting Logic
let turn = 1

// if(turn=1){
//     player
// }


//Misc

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
           //Left Key
          block()
          break;
       case 38:
           //Up key
          dUp()
          break;
       case 39:
           //Right key
          attack()
          break;
       case 40:
           //Down Key
          dDown()
          break;
    }
 };

const attack = () =>{
    console.log("Attack")
}
const block = () =>{
    console.log("Block")
}
const dUp = () =>{
    console.log("Dodge up")
}
const dDown = () =>{
    console.log("Dodge Down")
}