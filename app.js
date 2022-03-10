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
    strength:5,
    defense:5,
    MP: 100,
}

const goblin = new Enemy("Goblin",500,5,0)

let enemyAction = () => {
if(0<heroHp){
    let damage = Math.floor(Math.random()*6 + 1) + goblin.attack - hero.defense
        if(damage <= 0){
            damage = 1
        }
    heroHp -= damage
    heroHpDisplay.innerText= heroHp
    checkHeroHp()
    log.push(`Hero took ${damage} damage! They now have ${heroHp}`)
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

const attack = (obj1,obj2) =>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push('missed')
        damage = 0
        return damage
    }
    else{
    let damage = Math.floor(Math.random()*10 + 1) + obj1.strength - obj2.defense
    if(damage <= 0){
        damage = 1
    }
    return damage
    }
}

// Fighting Logic
isFightingActive = true 

let playerTurn = () => {
    if(isFightingActive == true){
         let damage = Math.floor(Math.random()*10 + 1) + hero.strength - goblin.defense
        if(damage <= 0){
            damage = 1
        }
        enemyHp -= damage
        enemyHpDisplay.innerText= enemyHp
        checkEnemyHp()
        checkWinner()
        log.push(`Goblin took ${damage} damage! it now has ${enemyHp}`)
        updateLog()
        enemyAction()
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
let log = ["Hero, What will you do?",'']
logDisplay.innerText = `${log}`
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