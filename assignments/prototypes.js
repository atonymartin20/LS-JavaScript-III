/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
// === GameObject ===
function GameObject(obj) {
  // * createdAt
  this.createdAt = obj.createdAt;
  // * name
  this.name = obj.name;
  // * dimensions (These represent the character's size in the video game)
  this.dimensions = obj.dimensions;
}

// * destroy() // prototype method that returns: `${this.name} was removed from the game.`
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

// === CharacterStats ===
function CharacterStats(obj) {
// * Instances of CharacterStats should have all of the same properties as GameObject.
  GameObject.call(this, obj);

  // * healthPoints
  this.healthPoints = obj.healthPoints;
}
// * should inherit destroy() from GameObject's prototype
CharacterStats.prototype = Object.create(GameObject.prototype);

// * takeDamage() // prototype method -> returns the string '<object name> took damage.'
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

// === Humanoid (Having an appearance or character resembling that of a human.) ===
function Humanoid(obj) {
// * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  CharacterStats.call(this, obj);
  // * team
  this.team = obj.team;
  // * weapons
  this.weapons = obj.weapons;
  // * language
  this.language = obj.language;  
}
// * should inherit destroy() from GameObject through CharacterStats
// * should inherit takeDamage() from CharacterStats
Humanoid.prototype = Object.create(CharacterStats.prototype);

// * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
Humanoid.prototype.greet = function() {
  return (`${this.name} offers a greeting in ${this.language}`);
}

// * Inheritance chain: GameObject -> CharacterStats -> Humanoid

// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
function Villian(obj) {
// * Create Villain constructor function that inherits from the Humanoid constructor function.  
  Humanoid.call(this, obj);
  
}

Villian.prototype = Object.create(Humanoid.prototype);

Humanoid.prototype.backStab = function(hero) {
  console.log(`Hero former health was ${hero.healthPoints}.`);
  console.log(`${hero.name} loses 3 health.`);
  hero.healthPoints -= 2;
  console.log(`Hero new health is ${hero.healthPoints}`);
  if (hero.healthPoints <= 0 ) {
    hero.destroy();
  }
  return (`${this.name} offers a greeting in ${this.language}`);
}

function Hero(obj) {
// * Create Hero constructor function that inherits from the Humanoid constructor function.  
  Humanoid.call(this, obj);
  
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.lunge = function(villian) {
  console.log(`Villian former health was ${villain.healthPoints}.`);
  console.log(`${villian.name} loses 2 health.`);
  villain.healthPoints -= 2;
  console.log(`Villain new health is ${villain.healthPoints}.`)
  if (villian.healthPoints <= 0) {
    villian.destroy();
  }
  return (`${this.name} lunges at ${villian.name} dealing 2 damage.`)
}