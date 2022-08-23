import { HeroTypes } from "./HeroTypes";

export class HeroType {

    private type:string;
    private hp!:number;
    private abilities!:string;
    private armour!:number;
    private evasion!:number;

    constructor(type: HeroTypes) {
        this.type = type;

        switch (type) {
            case HeroTypes.warrior:
                this.hp = 100;
                this.abilities = "Armour";
                this.armour=5;
                this.evasion=20;                
                break;
            case HeroTypes.priest:
                this.hp = 90;
                this.abilities = "Heal";
                this.armour=4;
                this.evasion=20;                
                break;
            case HeroTypes.mage:
                this.hp = 70;
                this.abilities = "Firestorm";
                this.armour=1;
                this.evasion=5;                
                break;
            case HeroTypes.rouge:
                this.hp = 80;
                this.abilities = "Dodge";
                this.armour=3;
                this.evasion=30;                
                break;
            case HeroTypes.archer:
                this.hp = 80;
                this.abilities = "Headshot";
                this.armour=2;
                this.evasion=15;                
                break;
        
            default: null
                break;
        }
      }
      
      public getType() : string {
        return this.type
      }

      
      public setType(v : HeroTypes) {
        this.type = v;
      }

      public getHp() : number {
        return this.hp;
      }

      
      public setHp(v : number) {
        this.hp = v;
      }
      public getAbilities() : string {
        return this.abilities
      }

      
      public setAbilities(v : string) {
        this.abilities = v;
      }

      public getArmour() : number {
        return this.armour;
      }

      
      public setArmour(v : number) {
        this.armour = v;
      }

      public getEvasion() : number {
        return this.evasion;
      }

      
      public setEvasion(v : number) {
        this.evasion = v;
      }
      
      
    
      
    


}