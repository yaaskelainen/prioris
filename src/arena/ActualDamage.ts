export class ActualDamage{

    damage:number;

    constructor(damage:number){
        this.damage = damage;
    }

    public getDamage(): number {
        return this.damage;
    }


    public setDamage(damage:number) {
        this.damage=damage
    }

} 