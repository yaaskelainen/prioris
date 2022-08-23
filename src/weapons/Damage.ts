export class Damage{
    private min:number;
    private max:number;

    constructor(min:number, max:number){
        this.min = min;
        this.max = max;
    }

    public getMin() :number {
        return this.min
      }

    public setMin(v : number) {
        this.min = v;
      }

      public getMax() :number {
        return this.max
      }

    public setMax(v : number) {
        this.max = v;
      }

    public getDamage(){
        return this.min + "-" + this.max;
    }

}