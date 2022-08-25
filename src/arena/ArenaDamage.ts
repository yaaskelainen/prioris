import { ArenaRoundFunctions } from "./ArenaRoundFunctions";
import { Hero } from "../heroes/Hero";
import { Ability } from "../abilities/Ability";
import {ActualDamage } from "./ActualDamage";

export class ArenaDamage{

    firstattacker:Hero;
    secondattacker:Hero;

    firstInitialDamage:ActualDamage=new ActualDamage(0);
    firstDamage:ActualDamage=new ActualDamage(0);
    secondInitialDamage:ActualDamage=new ActualDamage(0);
    secondDamage:ActualDamage=new ActualDamage(0);

    constructor(firstattacker: Hero, secondattacker: Hero){
        this.firstattacker=firstattacker;
        this.secondattacker=secondattacker;
        
    }


    public makeDamage(): ActualDamage[] {
        
        let firstAttackerAbility ;
        let secondAttackerAbility;
        

        if (this.firstattacker.getWeapon().getDamage().getMax() !== 0) {
            this.firstInitialDamage.setDamage(ArenaRoundFunctions.getWeaponDamage(this.firstattacker.getWeapon()));
            firstAttackerAbility = new Ability(this.firstattacker, this.firstInitialDamage);
            firstAttackerAbility.start();


            
        }

        if (this.secondattacker.getWeapon().getDamage().getMax() !== 0) {
            this.secondInitialDamage.setDamage(ArenaRoundFunctions.getWeaponDamage(this.secondattacker.getWeapon()));
            secondAttackerAbility = new Ability(this.secondattacker, this.secondInitialDamage);   
            secondAttackerAbility.start();  
        }

        this.firstDamage.setDamage(this.firstInitialDamage.getDamage() - Math.floor(this.secondattacker.getArmour() / 3));

        if(ArenaRoundFunctions.evasion(this.secondattacker.getEvasion())){
                this.firstDamage.setDamage(0);
         }
       

        if(this.secondattacker.getHp() - this.firstDamage.getDamage() <= 0){
            this.secondattacker.setHp(0)
        }else{
        this.secondattacker.setHp(this.secondattacker.getHp() - this.firstDamage.getDamage()); 
        
        this.secondDamage.setDamage( this.secondInitialDamage.getDamage() - Math.floor(this.firstattacker.getArmour() / 3));

        if(ArenaRoundFunctions.evasion(this.firstattacker.getEvasion())){
            this.secondDamage.setDamage(0);
        }

        if(this.firstattacker.getHp() - this.secondDamage.getDamage() < 0){
            this.firstattacker.setHp(0)
        }else{
        this.firstattacker.setHp(this.firstattacker.getHp() - this.secondDamage.getDamage());       
        }


        }

        
       
        

        firstAttackerAbility?.end();
        secondAttackerAbility?.end();
        

        return [this.firstInitialDamage, this.firstDamage, this.secondInitialDamage, this.secondDamage];

    }
    
}