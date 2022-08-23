import { Hero } from "./heroes/Hero";
import { HeroTypes } from "./heroes/HeroTypes";
import { Weapons } from "./weapons/Weapons";

const hero = new Hero("Péter", HeroTypes.rouge, Weapons.dagger);

console.log(hero.getName());
console.log(hero.getType());
console.log(hero.getAbilities());
console.log(hero.getArmour());
console.log(hero.getEvasion());
console.log(hero.getHp());
console.log(hero.getWeapon().getDamage().getDamage());