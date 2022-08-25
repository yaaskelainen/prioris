import { TupleType } from "typescript";
import { Hero } from "../heroes/Hero";
import { Weapon } from "../weapons/Weapon";
import { ArenaRounds } from "./ArenaRounds";

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

        const rounds = new ArenaRounds(this.hero, this.otherhero);

        while (this.hero.getHp()>0 && this.otherhero.getHp()>0) {
            await new Promise((f) => setTimeout(f, 1000))
            rounds.newRound();
        }
        
        if(this.hero.getHp()===0 || this.otherhero.getHp()===0){
            if(this.hero.getHp()===0){
                console.log(this.otherhero.getName() + " győzött!")
            } else if(this.otherhero.getHp()===0) {
                console.log(this.hero.getName() + " győzött!")
            }
        }
        


    }


    

    }




   
    




    
