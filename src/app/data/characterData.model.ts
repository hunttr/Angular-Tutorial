import { SkillData } from './skillData.model';
import { FeatData } from './featData.model';

export class CharacterData {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
    work: string = 'Code';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    id: number;
    characterName: string = '';
    alignment: string = '';
    deity: string = '';
    race: string = '';
    size: string = '';
    gender: string = '';
    age: number = 0;
    height: number = 0;
    weight: number = 0;
    strength: number = 10;
    dexterity: number = 10;
    constitution: number = 10;
    intelligence: number = 10;
    wisdom: number = 10;
    charisma: number = 10;
    skills: SkillData[] = new Array();
    feats: FeatData[] = new Array();
}