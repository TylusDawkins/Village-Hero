// Variables
const logDisplay = document.querySelector('#log')
let log = []
logDisplay.innerText = `${log[0]}`


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
    strength:10,
    defense:10,
    MP: 100,
}

const goblin = new Enemy("Goblin",50,5,2)
console.log(goblin)





const heroHpDisplay = document.querySelector('#herohp')
const heroHp = hero.healthPoints
heroHpDisplay.innerText = `${heroHp} HP`

const enemyHpDisplay = document.querySelector('#enemyhp')
let enemyHp = goblin.healthPoints
enemyHpDisplay.innerText = `${enemyHp} HP`

// Fighting Logic
let turn = 1

let playerTurn = () => {
    if(0 < enemyHp){
        enemyHp -= hero.strength-goblin.defense
        enemyHpDisplay.innerText= enemyHp
        if(0> enemyHp){
            enemyHp=0
            enemyHpDisplay.innerText= enemyHp
        }
    }
    else enemyHp=0, enemyHpDisplay.innerText= enemyHp

}
// if(turn=1){
//     player
// }


//Misc


//Queries and Event Listenters
const attackB = document.querySelector('#attack')
attackB.addEventListener('click',playerTurn)



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