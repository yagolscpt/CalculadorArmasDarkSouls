import { describe, expect, it } from 'vitest'
import { getWeapon } from '../src/utils'
import weaponsMock from './weaponsMock.json'

/*
Dado que los test tienen que ejecutarse muy rápido,
no podemos hacer peticiones a una API externa.
Para simular el comportamiento de la API, hemos creado un archivo
con un array de 100 objetos que simulan los exchanges de la API.
El archivo se encuentra en la carpeta test y se llama exchangesMock.json
Este objeto mockeado será el que usemos para hacer los test.
*/
const listWeaponsMock = weaponsMock

describe('empty spec', () => {
  
  /** 
   si filtramos las armas con un nombre de arma vacio = '', 
   la función getWeapon debe devolver el valor null
  */
  it('test 1', () => {
    const filtered = getWeapon(listWeaponsMock, '')
    expect(filtered).toBe(null)
    // <<<<Tu código aquí>>>> 
  })

  /** 
   si filtramos las armas con un nombre de arma que no existe (ej: 'juan')), 
   la función getWeapon debe devolver null
  */
  it('test 2', () => {
    const filtered = getWeapon(listWeaponsMock, 'juan')
    expect(filtered).toBe(null)
    // <<<<Tu código aquí>>>> 
  })


   /** 
   si filtramos las armas con un nombre de arma que si existe ej: 'Four-Pronged Plow', 
   la función getWeapon debe devolver el objeto:
   {
      "faith": 0,
      "strength": 15,
      "intelligence": 0,
      "dexterity": 12
    }
  */
   it('test 3', () => {
    const filtered = getWeapon(listWeaponsMock, 'Four-Pronged Plow')
    expect(filtered).toEqual(
      expect.objectContaining({faith: 0, strength: 15, intelligence: 0, dexterity: 12})
    )
    // <<<<Tu código aquí>>>> 
  })

   /** 
    si filtramos las armas con un nombre de arma null
    la función filterExchanges debe devolver una excepción error con el mensaje "debes pasar un nombre de arma"
  */
   it('test 4', () => {
    expect(() => getWeapon(listWeaponsMock, null)).toThrowError("debes pasar un nombre de arma");
    // <<<<Tu código aquí>>>> 
  })

})
