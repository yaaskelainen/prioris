import { Weapon } from "../weapons/Weapon";
import { Weapons } from "../weapons/Weapons";
import { HeroType } from "./HeroType";
import { HeroTypes } from "./HeroTypes";

export class Hero extends HeroType{

    private name:string;
    private weapon:Weapon;
    
    constructor(name:string, type:HeroTypes, weapon:Weapons){
        super(type);
        this.name=name;
        this.weapon=new Weapon(weapon, type);
    }

    public getName() : string {
        return this.name
      }

      
      public setName(v : string) {
        this.name = v;
      }

      public getWeapon() : Weapon {
        return this.weapon
      }

      
      public setWeapon(v : Weapon) {
        this.weapon = v;
      }



}