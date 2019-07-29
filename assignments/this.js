/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - The value of this is the window/console Object while in global scope.

* 2. Implicit Binding - When a method is invoked on an object the object before the dot is 'this'. Ex: func.plusOne()
    Otherwise known as dot notation.

* 3. New Binding - When 'this' is used within a constructor function.  Makes sure the object's properties are used correctly.
* 4. Explicit Binding - Used during .call, .apply, .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log('Window Binding');
console.log(this);
console.log('');

// Principle 2

// code example for Implicit Binding
const baseballTeam = {
  name: 'Chicago Cubs',
  division: 'National League Central',
  division_rank: '2nd',
  speak: function() {
    console.log(
      `The ${this.name} are currently in ${this.division_rank} place in the ${
        this.division
      }.`
    );
    console.log(this);
  }
};
console.log('Implicit Binding');

baseballTeam.speak();
console.log('');

// Principle 3

// code example for New Binding
function baseballPlayer(obj) {
  this.firstName = obj.firstName;
  this.lastName = obj.lastName;
  this.position = obj.position;
  this.number = obj.number;
  this.team = obj.team;
  this.speak = function() {
    console.log(
      `${this.firstName} ${this.lastName} plays ${this.position} for the ${
        this.team
      }.`
    );
  };
}
console.log('New Binding');

const AnthonyRizzo = new baseballPlayer({
  firstName: 'Anthony',
  lastName: 'Rizzo',
  position: '1st Base',
  team: 'Chicago Cubs'
});
AnthonyRizzo.speak();
console.log('');
// Principle 4

// code example for Explicit Binding
console.log('Explicit Binding');
const positions = ['shortstop', '2nd base', '3rd base'];

const ElMago = {
  name: 'El Mago'
};

function playerIntro(pos1, pos2, pos3) {
  console.log(
    `Hello, my name is ${this.name} and I play ${pos1}, ${pos2}, and ${pos3}`
  );
};

playerIntro.apply(ElMago, positions);