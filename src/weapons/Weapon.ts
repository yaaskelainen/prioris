import { HeroTypes } from "../heroes/HeroTypes";
import { Damage } from "./Damage";
import { Weapons } from "./Weapons";

export class Weapon {
  private name: Weapons;
  private user!: Array<HeroTypes>;
  private currentUser!: HeroTypes;
  private damage!: Damage;
  private hitChance!: number;

  constructor(name: Weapons, currentUser: HeroTypes) {
    this.name = name;
    this.currentUser = currentUser;

    switch (name) {
      case Weapons.sword:
        this.user = [
          HeroTypes.archer,
          HeroTypes.mage,
          HeroTypes.priest,
          HeroTypes.rouge,
          HeroTypes.warrior,
        ];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(8, 12);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 90;

        break;
      case Weapons.dagger:
        this.user = [HeroTypes.rouge];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(4, 5);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 98;

        break;
      case Weapons.warhammer:
        this.user = [HeroTypes.priest];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(10, 15);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 93;

        break;
      case Weapons.battleaxe:
        this.user = [HeroTypes.warrior];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(12, 15);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 92;

        break;
      case Weapons.bow:
        this.user = [HeroTypes.archer];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(7, 12);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 89;

        break;

      case Weapons.wand:
        this.user = [HeroTypes.mage];
        if (this.user.includes(this.currentUser)) {
          this.damage = new Damage(9, 15);
        } else {
          this.damage = new Damage(0, 0);
        }
        this.hitChance = 97;
        break;

      default:
        null;
        break;
    }
  }

  public getName(): Weapons {
    return this.name;
  }

  public setName(v: Weapons) {
    this.name = v;
  }

  public getUser(): Array<HeroTypes> {
    return this.user;
  }

  public setUser(v: Array<HeroTypes>) {
    this.user = v;
  }

  public getDamage(): Damage {
    return this.damage;
  }

  public setDamage(v: Damage) {
    this.damage = v;
  }

  public getHitChance(): number {
    return this.hitChance;
  }

  public setHitChance(v: number) {
    this.hitChance = v;
  }
}
