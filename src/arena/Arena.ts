import { TupleType } from "typescript";
import { Hero } from "../heroes/Hero";
import { Weapon } from "../weapons/Weapon";

export class Arena {
    hero: Hero;
    otherhero: Hero;

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

    public async fight(){

        while (this.hero.getHp()>0 && this.otherhero.getHp()>0) {
            await new Promise((f) => setTimeout(f, 1000))
            this.newRound()
        }
        
        if(this.hero.getHp()===0){
            console.log(this.otherhero.getName() + " győzött!")
        } else if(this.otherhero.getHp()===0) {
            console.log(this.hero.getName() + " győzött!")
        }


    }


    private newRound(): void {
        let firstattacker: Hero;
        let secondattacker: Hero;
        let firstInitialDamage: number = 0;
        let firstDamage: number = 0;
        let secondInitialDamage: number = 0;
        let secondDamage: number = 0;
        const rnd:number =(Math.floor(Math.random() * 2) + 1)       



        if ( rnd === 1) {
            firstattacker = this.hero;
            secondattacker = this.otherhero            
            console.log("Kör eleje: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp())
            let firstDamages = this.makeDamage(firstattacker, secondattacker);
            firstInitialDamage = firstDamages[0];
            firstDamage = firstDamages[1];
            let secondDamages = this.makeDamage(secondattacker, firstattacker);
            secondInitialDamage = secondDamages[0];
            secondDamage = secondDamages[1];
            console.log("Kör vége: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + " elvi sebződés / tényleges sebződés: " + secondInitialDamage + " / " + secondDamage + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp() + " elvi sebződés / tényleges sebződés: " + firstInitialDamage + " / " + firstDamage +"\n")

        } else if (rnd === 2) {
            firstattacker = this.otherhero;
            secondattacker = this.hero
            console.log("Kör eleje: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp())
            let firstDamages = this.makeDamage(firstattacker, secondattacker);
            firstInitialDamage = firstDamages[0];
            firstDamage = firstDamages[1];
            let secondDamages = this.makeDamage(secondattacker, firstattacker);
            secondInitialDamage = secondDamages[0];
            secondDamage = secondDamages[1];
            console.log("Kör vége: "+"\n" + firstattacker.getName() + " HP: " + firstattacker.getHp() + " elvi sebződés / tényleges sebződés: " + secondInitialDamage + " / " + secondDamage + "\n" + secondattacker.getName() + " HP: " + secondattacker.getHp() + " elvi sebződés / tényleges sebződés: " + firstInitialDamage + " / " + firstDamage+"\n")

        }

    }




   
    private makeDamage(firstattacker: Hero, secondtattacker: Hero): number[] {
        let damage: number = 0;
        let initialDamage = 0;


        if (firstattacker.getWeapon().getDamage().getMax() !== 0) {
            initialDamage = this.getWeaponDamage(firstattacker.getWeapon());

            damage = initialDamage - Math.floor(secondtattacker.getArmour() / 3);

            if(this.evasion(secondtattacker.getEvasion())){
                damage =0;
            }
            
        }

        if(secondtattacker.getHp() - damage < 0){
            secondtattacker.setHp(0)
        }else{
        secondtattacker.setHp(secondtattacker.getHp() - damage);
        }

        return [initialDamage, damage];

    }





    private getWeaponDamage(weapon: Weapon): number {

        const damage: number = Math.floor(Math.random() * (weapon.getDamage().getMax() - weapon.getDamage().getMin()+1)) + weapon.getDamage().getMin()
     
        return damage
    }





    private evasion(evasion:number):boolean{

        let evade:boolean;
        const rnd:number =(Math.floor(Math.random() * 101) )

        if(rnd <= evasion){
            evade = true
        }
        else{
            evade = false
        }

        return evade
    }
}