// Variables/Classes/functions
class Enemy {
    constructor(title,healthPoints,attack,defense){
        this.title=title
        this.healthPoints=healthPoints
        this.attack=attack
        this.defense=defense
    }
}

let hero = {
    title: "Hero",
    healthPoints: 250,
    attack:5,
    defense:5,
    MP: 100,
}




const goblin = new Enemy("Goblin",100,5,0)

const skeleton = new Enemy("Skeleton", 150,10,5)

const enemies = [
    goblin,
    skeleton,
]

let currentEnemy = enemies[0]

let enemyAction = () => {
if(0<heroHp){

    damage = enemyAttack()
    heroHp -= damage
    heroHpDisplay.innerText= heroHp
    checkHeroHp()
    updateLog()
}}

const checkWinner = ()=>{
    if(0==enemyHp){
        isFightingActive = false
        resultsDisplay.innerText='Hero Wins Please Re-start!!'
        resultsDisplay.style.display='block';
    }
    else if(0==heroHp){
        isFightingActive = false
        resultsDisplay.innerText='Enemy Wins! Please Re-start!'
        resultsDisplay.style.display='block';
    }
}

const attack = () =>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push(`${hero.title} missed! ${currentEnemy.title} has ${enemyHp} HP!`)
        damage = 0
        return damage
    }
    else{
    let damage = Math.floor(Math.random()*10 + 1) + hero.attack - currentEnemy.defense
    if(damage <= 0){
        damage = 1
    }
    log.push(`${currentEnemy.title} took ${damage} damage! it now has ${enemyHp - damage} HP!`)
    return damage
    }
}

const enemyAttack = () =>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push(`${currentEnemy.title} missed! ${hero.title} has ${heroHp} HP!`)
        damage = 0
        return damage
    }
    else{
    let damage = Math.floor(Math.random()*10 + 1) + currentEnemy.attack - hero.defense
    if(damage <= 0){
        damage = 1
    }
    log.push(`${hero.title} took ${damage} damage! it now has ${heroHp - damage} HP!`)
    return damage
    }
}

// Fighting Logic
isFightingActive = true 

let playerTurn = () => {
    if(isFightingActive == true){
        damage = attack()
        enemyHp -= damage
        enemyHpDisplay.innerText= enemyHp
        checkEnemyHp()
        checkWinner()
        enemyAction()
        updateLog()
        checkHeroHp()
        checkWinner()
    }
}

//Queries and Event Listenters

//Hero displays and variables
    const heroHpDisplay = document.querySelector('#herohp')
    let heroHp = hero.healthPoints
    heroHpDisplay.innerText = `${heroHp} HP`
    let checkHeroHp = () => {
        if(0>heroHp){
            heroHp = 0
            heroHpDisplay.innerText= heroHp
        }
    }

//Goblin displays and variables
const enemyHpDisplay = document.querySelector('#enemyhp')
let enemyHp = currentEnemy.healthPoints
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
let log = ["Hero, What will you do?",'']

// Do a for each loop appending each item in the array to the log display
// Or a for loop.
// Remember that empty strings are falsey in JS
// So you can literally do something like "if (log[i]){}"
// logDisplay.innerText = `${log}`
// let updateLog = () =>{
//     for(let i=0; log.length; i++){
//     logDisplay.innerText = `
//     ${log[log.length-5]}
//     ${log[log.length-4]}
//     ${log[log.length-3]}
//     ${log[log.length-2]}
//     ${log[log.length-1]}`
//     }
// }

let updateLog = () =>{
    logDisplay.innerText = `
    ${log[log.length-5]}
    ${log[log.length-4]}
    ${log[log.length-3]}
    ${log[log.length-2]}
    ${log[log.length-1]}`
}

//Results stuff
const resultsDisplay = document.querySelector('#resultscreen')






document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
           //Left Key
          blockKey()
          break;
       case 38:
           //Up key
          dUpKey()
          break;
       case 39:
           //Right key
          attackKey()
          break;
       case 40:
           //Down Key
          dDownKey()
          break;
    }
 };

const attackKey = () =>{
    console.log("Attack")
}
const blockKey = () =>{
    console.log("Block")
}
const dUpKey = () =>{
    console.log("Dodge up")
}
const dDownKey = () =>{
    console.log("Dodge Down")
}