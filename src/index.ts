import { Arena } from "./arena/Arena";
import { Hero } from "./heroes/Hero";
import { HeroTypes } from "./heroes/HeroTypes";
import { Weapons } from "./weapons/Weapons";

const hero = new Hero("Péter", HeroTypes.rouge, Weapons.sword);
const hero2= new Hero("Gyula", HeroTypes.warrior, Weapons.sword )

const arena = new Arena(hero, hero2);

arena.fight();

// console.log(hero.getName());
// console.log(hero.getType());
// console.log(hero.getAbilities());
// console.log(hero.getArmour());
// console.log(hero.getEvasion());
// console.log(hero.getHp());
// console.log(hero.getWeapon().getDamage().getDamage());