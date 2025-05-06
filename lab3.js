/**
 * @file inventory_system.js
 * Консольное приложение для управления инвентарём.
 * Содержит классы Item и Weapon, а также тестирование.
 */

/**
 * @class Item
 * Представляет предмет в инвентаре.
 */
class Item {
    /**
     * @constructor
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета.
     * @param {string} rarity - Редкость предмета.
     */
    constructor(name, weight, rarity) {
      this.name = name;
      this.weight = weight;
      this.rarity = rarity;
    }
  
    /**
     * Получает информацию о предмете.
     * @returns {string} Информация о предмете.
     */
    getInfo() {
      return `Name: ${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
    }
  
    /**
     * Изменяет вес предмета.
     * @param {number} newWeight - Новый вес.
     */
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  /**
   * @class Weapon
   * Расширяет Item, добавляя характеристики оружия.
   * @extends Item
   */
  class Weapon extends Item {
    /**
     * @constructor
     * @param {string} name - Название оружия.
     * @param {number} weight - Вес.
     * @param {string} rarity - Редкость.
     * @param {number} damage - Урон.
     * @param {number} durability - Прочность (0–100).
     */
    constructor(name, weight, rarity, damage, durability) {
      super(name, weight, rarity);
      this.damage = damage;
      this.durability = durability;
    }
  
    /**
     * Использовать оружие: уменьшает прочность на 10.
     */
    use() {
      if (this.durability > 0) {
        this.durability = Math.max(0, this.durability - 10);
      } else {
        console.log(`${this.name} is broken!`);
      }
    }
  
    /**
     * Починить оружие: восстанавливает прочность до 100.
     */
    repair() {
      this.durability = 100;
    }
  
    /**
     * Получает информацию об оружии.
     * @override
     * @returns {string}
     */
    getInfo() {
      return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
  }
  
  // Тестирование классов
  const sword = new Item("Steel Sword", 3.5, "rare");
  console.log(sword.getInfo());
  sword.setWeight(4.0);
  console.log(sword.getInfo());
  
  const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
  console.log(bow.getInfo());
  bow.use();
  console.log(`Durability after use: ${bow.durability}`);
  bow.repair();
  console.log(`Durability after repair: ${bow.durability}`);
  
  // Дополнительное задание: реализация через функции-конструкторы
  function ItemConstructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }
  
  ItemConstructor.prototype.getInfo = function () {
    return `Name: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
  };
  
  ItemConstructor.prototype.setWeight = function (newWeight) {
    this.weight = newWeight;
  };
  
  function WeaponConstructor(name, weight, rarity, damage, durability) {
    ItemConstructor.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }
  
  WeaponConstructor.prototype = Object.create(ItemConstructor.prototype);
  WeaponConstructor.prototype.constructor = WeaponConstructor;
  
  WeaponConstructor.prototype.use = function () {
    if (this.durability > 0) {
      this.durability = Math.max(0, this.durability - 10);
    } else {
      console.log(`${this.name} is broken!`);
    }
  };
  
  WeaponConstructor.prototype.repair = function () {
    this.durability = 100;
  };
  
  WeaponConstructor.prototype.getInfo = function () {
    return `${ItemConstructor.prototype.getInfo.call(this)}, Damage: ${this.damage}, Durability: ${this.durability}`;
  };
  
  const dagger = new WeaponConstructor("Dagger", 1.2, "common", 10, 90);
  console.log(dagger?.getInfo());
  dagger?.use();
  console.log(dagger?.durability);