import { ActualDamage } from "../arena/ActualDamage";
import { ArenaRoundFunctions } from "../arena/ArenaRoundFunctions";
import { Hero } from "../heroes/Hero";
import { Damage } from "../weapons/Damage";
import { Abilities } from "./Abilities";


export class Ability {

    hero:Hero;
    damage: ActualDamage;
    isActive:boolean=false;

    constructor(hero:Hero, damage:ActualDamage){
        this.hero = hero;
        this.damage=damage;
    }

    public start(){

        if(ArenaRoundFunctions.isAbilityActive()){
        
        this.isActive=true;

        switch (this.hero.getAbilities()) {
            case Abilities.armourboost:
                this.hero.setArmour(this.hero.getArmour()+10);                              
                break;
            case Abilities.dodge:
                this.hero.setEvasion(this.hero.getEvasion()+100);            
                break;
            case Abilities.firestorm:
                this.damage.setDamage(this.damage.getDamage()+20)        
                break;
            case Abilities.headshot:
                this.damage.setDamage(this.damage.getDamage()+15)          
                break;
            case Abilities.heal:
                this.hero.setHp(this.hero.getHp()+10);              
                break;
        
            default: null
                break;
        }
        }

    }

    public end(){

        if(this.isActive){

            switch (this.hero.getAbilities()) {
                case Abilities.armourboost:
                    this.hero.setArmour(this.hero.getArmour()-10);                              
                    break;
                case Abilities.dodge:
                    this.hero.setEvasion(this.hero.getEvasion()-100);            
                    break;           
                default: null
                    break;
            }
            this.isActive=false;
        }
        
    }

}