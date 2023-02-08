/*
Crea una función llamada getWeapon que reciba como parámetros:
 - una lista de todas las armas de dark souls (array) 
 - y un weaponName(string)(nombre del arma).
La función debe buscar entre todas las armas del juego la que tenga el mismo nombre que el weaponName que se le pasa como parámetro. (no tendrá en cuenta mayúslculas o minúsculas)
La función debe devolver un objeto con los requisitos para usar ese arma. Ejemplo
    {
      faith: 0,
      strength: 15,
      intelligence: 0,
      dexterity: 12
    }

Si el arma no existe, la función debe devolver null
Si el parametro weaponName es null o undefined, la función debe devolver una excepción error con el mensaje "debes pasar un nombre de arma"
 */
export function getWeapon(allWeapons, weaponName) {
  // <<<<Tu código aquí>>>>
  if(weaponName===null || weaponName===undefined) throw new Error("debes pasar un nombre de arma");
  const weapon =allWeapons.find(
    (weapon) => weapon.name.toLowerCase() === weaponName.toLowerCase()
  );
    if (!weapon) {
    return null;
  }

  return {
    faith: weapon.requirements.faith,
    strength: weapon.requirements.strength,
    intelligence: weapon.requirements.intelligence,
    dexterity: weapon.requirements.dexterity,
  };
}
