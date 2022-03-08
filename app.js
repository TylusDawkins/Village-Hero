// Variables/Classes/functions
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

let enemyAction = () => {
if(0<heroHp){
    let damage = goblin.attack
    heroHp -= damage
    heroHpDisplay.innerText= heroHp
    checkHeroHp()
    log.push(`Hero took ${damage} damage! They now have ${heroHp}`)
    updateLog()
}
}

// Fighting Logic
let turn = 1

let playerTurn = () => {
    if(0 < enemyHp){
        let damage = hero.strength-goblin.defense
        enemyHp -= damage
        enemyHpDisplay.innerText= enemyHp
        checkEnemyHp()
        log.push(`Goblin took ${damage} damage! it now has ${enemyHp}`)
        updateLog()
        if(0> enemyHp){
            enemyHp=0
            enemyHpDisplay.innerText= enemyHp
        }
    }
    enemyAction()
}
// if(turn=1){
//     player
// }


//Misc


//Queries and Event Listenters

//Hero displays and variables
const heroHpDisplay = document.querySelector('#herohp')
let heroHp = hero.healthPoints
heroHpDisplay.innerText = `${heroHp} HP`
let checkHeroHp = () => {
    if(0>heroHp){
        heroHp = 0
        heroHpDisplay.innerText= HeroHp
    }
}

//Goblin displays and variables
const enemyHpDisplay = document.querySelector('#enemyhp')
let enemyHp = goblin.healthPoints
enemyHpDisplay.innerText = `${enemyHp} HP`
let checkEnemyHp = () => {
    if(0>enemyHp){
        enemyHp = 0
        enemyHpDisplay.innerText= enemyHp
    }
}

//Button stuff
const attackB = document.querySelector('#attack')
attackB.addEventListener('click',playerTurn)

//Log stuff
let logDisplay = document.querySelector('#log')
let log = ['Hero, What will you do?',]
logDisplay.innerText = `${log}`
let updateLog = () =>{
    logDisplay.innerText = `${log[log.length-2]}
    ${log[log.length-1]}`
}






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