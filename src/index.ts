import { Arena } from "./arena/Arena";
import { Hero } from "./heroes/Hero";
import { HeroTypes } from "./heroes/HeroTypes";
import { Weapons } from "./weapons/Weapons";




const hero = new Hero("Legolas", HeroTypes.archer, Weapons.bow);
const hero2= new Hero("Thorin", HeroTypes.warrior, Weapons.sword )

const arena = new Arena(hero, hero2);

arena.fight();

