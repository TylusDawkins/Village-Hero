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
        resultText.innerText='Hero Wins Please restart!!'
        resultsDisplay.style.display='block';
        clearLog()
        updateLog()
    }
    else if(0==heroHp){
        isFightingActive = false
        resultText.innerText='Enemy Wins! Please restart!'
        resultsDisplay.style.display='block';
        clearLog()
        updateLog()
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

const specialAttack = () =>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push(`${hero.title} missed his special Attack! ${currentEnemy.title} has ${enemyHp} HP!`)
        damage = 0
        return damage
    }
    else{
    let damage = Math.floor(Math.random()*20 + 10) + hero.attack - currentEnemy.defense
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
    log.push(`${hero.title} took ${damage} damage! they now have ${heroHp - damage} HP!`)
    return damage
    }
}

// Fighting Logic
isFightingActive = true 

let playerAction = () => {
    if(isFightingActive == true){
        clearLog()
        damage = attack()
        enemyHp -= damage
        enemyHpDisplay.innerText= enemyHp
        checkEnemyHp()
        checkWinner()
        enemyAction()
        checkHeroHp()
        updateLog()
        checkWinner()
        console.log(log)
    }
}

let playerSpecial = () => {
    if(isFightingActive == true){
        clearLog()
        damage = specialAttack()
        enemyHp -= damage
        enemyHpDisplay.innerText= enemyHp
        heroMp -= 20
        heroMpDisplay.innerText= heroMp
        checkEnemyHp()
        checkWinner()
        enemyAction()
        checkHeroHp()
        updateLog()
        checkWinner()
        console.log(log)
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
        const heroMpDisplay = document.querySelector('#heromp')
        let heroMp = hero.MP
        heroMpDisplay.innerText = `${heroMp} MP`

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
attackB.addEventListener('click',playerAction)

const specialB = document.querySelector('#special')
specialB.addEventListener('click',playerSpecial)

//Log stuff
let logDisplay = document.querySelector('#log')
let logText = document.querySelector('#logtext')
let log = ["Hero, What will you do?"]
logText.innerText = `${log}`
const clearLog = () => {
    log = []
}
let updateLog = () =>{
    logText.innerText = `${log[0]}
    ${log[1]}`
}

//Results stuff
const resultsDisplay = document.querySelector('#resultscreen')
const resultText = document.querySelector('#resultscreentext')







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