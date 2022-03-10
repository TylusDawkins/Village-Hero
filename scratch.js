let playerTurn = (playerAction, enemyAction) => {
    if(0 < enemyHp)
    enemyHp -= 10-goblin.defense
    enemyHpDisplay.innerText= enemyHp
}


const checkAccuracy = ()=>{
    const hitChance = Math.floor(Math.random()*4)
    if(!hitChance){
        log.push('missed')
        return 0
    }
}

const checkAccuracy2 = ()=>{
    const hitChance = Math.floor(Math.random()*4)
    if(!hitChance){
        log.push('missed')
        damage = 0
    }
}

const checkAccuracy3 = ()=>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push('missed')
        damage = 0
    }
}
damage = checkAccuracy()

const checkAccuracy4 = ()=>{
    const hitChance = Math.floor(Math.random()*4)
    if(hitChance===0){
        log.push('missed')
        damage = 0
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