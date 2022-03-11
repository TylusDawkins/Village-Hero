// Variables/Classes/functions
class Enemy {
    constructor(title,healthPoints,attack,defense,img){
        this.title=title
        this.healthPoints=healthPoints
        this.attack=attack
        this.defense=defense
        this.img=img
    }
}

let hero = {
    title: "Hero",
    healthPoints: 250,
    attack:5,
    defense:5,
    MP: 100,
}

const goblin = new Enemy("Goblin",100,5,0,"<img src='./assets/goblin.gif'>")

const skeleton = new Enemy("Skeleton", 150,10,5, "<img src='./assets/skeleton.gif'>")

const enemies = [
    goblin, 
    skeleton,
    "end"
]

let currentEnemy = enemies[0]

let updateEnemy = () =>{
    enemyHp = currentEnemy.healthPoints
    enemyHpDisplay.innerText= enemyHp
    hitSplat.forEach(hitSplatNone)
    enemyImg.innerHTML=(`${currentEnemy.img}`)
}

let enemyAction = () => {
if(0<heroHp){
    damage = enemyAttack()
    heroHp -= damage
    heroHpDisplay.innerText= heroHp
    checkHeroHp()
    updateLog()
}}

let checkWinner = ()=>{
    if(0==enemyHp){
        if(currentEnemy === enemies[0]){
            currentEnemy =enemies[1]
            updateEnemy()
        }
        else if(currentEnemy === enemies[1]){
            isFightingActive = false
            hitSplat.forEach(hitSplatNone)
            resultText.innerText='Hero Wins Please restart!!'
            resultsDisplay.style.display='block';
            clearLog()
            updateLog()
        }
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
    const hitChance = Math.floor(Math.random()*5)
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
    const hitChance = Math.floor(Math.random()*10)
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
    heroHitSplat.innerText=damage
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
        enemyHitSplat.innerText=damage
        hitSplat.forEach(hitSplatFunction)
        goblinSound.play()
        checkEnemyHp()
        checkWinner()
        enemyAction()
        checkHeroHp()
        updateLog()
        checkWinner()
    }
}

let playerSpecial = () => {
    if(isFightingActive == true){
        if(heroMp>0){
            clearLog()
            damage = specialAttack()
            enemyHp -= damage
            enemyHpDisplay.innerText= enemyHp
            heroMp -= 20
            heroMpDisplay.innerText= heroMp
            enemyHpDisplay.innerText= enemyHp
            enemyHitSplat.innerText=damage
            hitSplat.forEach(hitSplatFunction)
            goblinSound.play()
            checkEnemyHp()
            enemyAction()
            checkHeroHp()
            updateLog()
            checkWinner()
            console.log(log)
        }
        else if(heroMp===0){
            clearLog()
            logText.innerText = ('You are out of MP')
        }
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

        const heroHitSplat = document.querySelector('#herohitsplat')


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

    const enemyHitSplat = document.querySelector('#enemyhitsplat')

    const hitSplat = document.querySelectorAll('.hitsplat')

    const hitSplatFunction = (x) =>{
        x.style.display='flex'
    }

    const hitSplatNone = (x) =>{
        x.style.display='none'
    }

    let enemyImg=document.querySelector('#enemysprite')

    enemyImg.innerHTML=(`${currentEnemy.img}`)


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


//Results Stuff
const resultsDisplay = document.querySelector('#resultscreen')

const resultText = document.querySelector('#resultscreentext')

//Sounds Stuff
goblinSound = new Audio("/assets/enemyhit.mp3")