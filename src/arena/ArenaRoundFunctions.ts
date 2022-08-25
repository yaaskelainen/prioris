import { Weapon } from "../weapons/Weapon";

export class ArenaRoundFunctions {

    constructor(){}



    public static getWeaponDamage(weapon: Weapon): number {

        const damage: number = Math.floor(Math.random() * (weapon.getDamage().getMax() - weapon.getDamage().getMin()+1)) + weapon.getDamage().getMin()
     
        return damage
    }


    public static evasion(evasion:number):boolean{

        let evade:boolean;
        let rnd:number =(Math.floor(Math.random() * 101) )

        if(rnd <= evasion){
         
            evade = true
        }
        else{
            evade = false
        }

        return evade
    }

    public static isAbilityActive():boolean{
        let rnd:number =(Math.floor(Math.random() * 101) )
        if(rnd<=10){
            
            return true;
            
        } else{
            return false;
        }
    }

}
