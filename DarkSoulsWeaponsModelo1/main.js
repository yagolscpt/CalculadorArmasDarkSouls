import { getWeapon } from './src/utils'
import './style.css'

let fullWeaponsList = []


// <<<<Tu código aquí>>>> 
// Captura el evento de envio del formulario
// y filtra los datos (guardados en el array global fullExchangesList) en función 
// de los valores de los inputs del formulario
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value
    const faith = document.getElementById('faith').value
    const strength = document.getElementById('strength').value
    const intelligence = document.getElementById('intelligence').value
    const dexterity = document.getElementById('dexterity').value
    
    const filteredWeapon = getWeapon(fullWeaponsList, name)
    let msg
    console.log(faith)
    if(!faith)
        msg = `Debes indicar tu Fe(faith)`
    else if(!strength)
        msg = `Debes indicar tu Fortaleza(strength)`
    else if(!intelligence)
        msg = `Debes indicar tu Inteligencia(intelligence)`
    else if(!dexterity)
        msg = `Debes indicar tu Destreza(dexterity)`
    else if(!filteredWeapon)
        msg = `No existe el arma`
    else if(filteredWeapon.faith <= faith 
        && filteredWeapon.strength <= strength 
        && filteredWeapon.intelligence <= intelligence 
        && filteredWeapon.dexterity <= dexterity)
        msg= `Puedes usar este arma`
    else
        msg = `No puedes usar este arma`
    document.getElementById('canUse').innerHTML = msg
})

 
/*
Esta función lee los datos de la API de dark souls weapon y devuelve una array con todos los weapons
*/
async function readDataFromApi(){
    // <<<<Tu código aquí>>>> 
    const response = await fetch('https://jgalat.github.io/ds-weapons-api/')
    const fullWeaponsList = await response.json()
    return fullWeaponsList
}


/*
Esta función se llama IIFE (Immediately Invoked Function Expression)
Es una función que se ejecuta inmediatamente después de ser declarada
En concreto se ejecuta 1 vez cuando se carga la página web.
*/
(async function onLoadPage(){
   // Te recomiendo que no modifiques esta función
   fullWeaponsList = await readDataFromApi()
   console.log(fullWeaponsList)
})()