// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
    return `${this.name} has died in act of combat`;
  }

  // eslint-disable-next-line class-methods-use-this
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
    return 'A Saxon has died in combat';
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingSoldier = this.vikingArmy[vikingIndex];
    const saxonSoldier = this.saxonArmy[saxonIndex];

    if (saxonSoldier.health <= vikingSoldier.strength) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return saxonSoldier.receiveDamage(vikingSoldier.strength);
  }

  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingSoldier = this.vikingArmy[vikingIndex];
    const saxonSoldier = this.saxonArmy[saxonIndex];

    if (vikingSoldier.health <= saxonSoldier.strength) {
      this.vikingArmy.splice(saxonIndex, 1);
    }
    return vikingSoldier.receiveDamage(saxonSoldier.strength);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!';
    if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survive another day...';
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
