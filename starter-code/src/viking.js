// Soldier
function Soldier(health, strength) {
	this.health = health;
	this.strength = strength;
};

Soldier.prototype.attack = function () {
	return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
	this.health -= damage;
};

// Viking
Viking.prototype = Object.create(Soldier.prototype);
function Viking(name, health, strength) {
	Soldier.call(this, health, strength);
	this.name = name;
};


Viking.prototype.receiveDamage = function (damage) {
	this.health -= damage;
	return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
};

Viking.prototype.battleCry = function () {
	return 'Odin Owns You All!';
};

// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
function Saxon(health, strength) {
	Soldier.call(this, health, strength);
};

Saxon.prototype.receiveDamage = function (damage) {
	this.health -= damage;
	return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
};

// War
// War
function War() {
	this.vikingArmy = [];
	this.saxonArmy = [];
  }
  
  War.prototype.addViking = function (viking) {
	this.vikingArmy.push(viking);
  };
  
  War.prototype.addSaxon = function (saxon) {
	this.saxonArmy.push(saxon);
  };
  
  War.prototype.vikingAttack = function () {
	let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
	let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
	let vikingSoldier = this.vikingArmy[vikingIndex];
	let saxonSoldier = this.saxonArmy[saxonIndex];
	let damageTaken = this.vikingArmy[vikingIndex].strength;
  
	if (saxonSoldier.health <= vikingSoldier.strength) {
	  this.saxonArmy.splice(saxonIndex, 1);
	}
	return saxonSoldier.receiveDamage(damageTaken);
  };
  
  War.prototype.saxonAttack = function () {
	let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
	let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
	let vikingSoldier = this.vikingArmy[vikingIndex];
	let saxonSoldier = this.saxonArmy[saxonIndex];
  
	let damageTaken = this.saxonArmy[vikingIndex].strength;
  
	if (vikingSoldier.health <= saxonSoldier.strength) {
	  this.vikingArmy.splice(saxonIndex, 1);
	}
	return vikingSoldier.receiveDamage(damageTaken);
  };
  
  War.prototype.showStatus = function () {
	if (this.saxonArmy.length === 0) {
	  return 'Vikings have won the war of the century!';
	}
	if (this.vikingArmy.length === 0) {
	  return 'Saxons have fought for their lives and survive another day...';
	}
	return 'Vikings and Saxons are still in the thick of battle.';
  };