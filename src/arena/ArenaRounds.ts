import { Hero } from "../heroes/Hero";
import { Damage } from "../weapons/Damage";
import { ActualDamage } from "./ActualDamage";
import { ArenaDamage } from "./ArenaDamage";


export class ArenaRounds {

    hero:Hero;
    otherhero:Hero;

    constructor(hero: Hero, otherhero: Hero) {
        this.hero = hero;
        this.otherhero = otherhero;
    }

    public getHeroes(): Array<Hero> {
        return [this.hero, this.otherhero];
    }

    public setHeroes(hero: Hero, otherhero: Hero) {
        this.hero = hero;
        this.otherhero = otherhero;
    }

    public  newRound(): void {
        
        const rnd:number =(Math.floor(Math.random() * 2) + 1)       

        if ( rnd === 1) {
            this.attack(this.hero, this.otherhero);

        } else if (rnd === 2) {
             this.attack(this.otherhero, this.hero);

        }

    }



    private attack (hero:Hero, otherhero:Hero):void{
        const firstattacker = hero;
        const secondattacker = otherhero;
        let firstInitialDamage: ActualDamage;
        let firstDamage: ActualDamage;
        let secondInitialDamage: ActualDamage;
        let secondDamage: ActualDamage;
        const damage = new ArenaDamage(firstattacker, secondattacker);

        console.log("Kör eleje: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp());
       
        [firstInitialDamage, firstDamage, secondInitialDamage, secondDamage] = damage.makeDamage();
        
        console.log("Kör vége: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + " elvi sebződés / tényleges sebződés: " + secondInitialDamage.getDamage() + " / " + secondDamage.getDamage() + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp() + " elvi sebződés / tényleges sebződés: " + firstInitialDamage.getDamage() + " / " + firstDamage.getDamage()+"\n")
    }





    

}