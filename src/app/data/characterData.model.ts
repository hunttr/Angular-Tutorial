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
    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    wisdom: number = 0;
    charisma: number = 0;
    skills: SkillData[] = new Array();
    feats: FeatData[] = new Array();
}