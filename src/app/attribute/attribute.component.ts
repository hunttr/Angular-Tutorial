import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterData } from '../data/characterData.model';
import { CharacterDataService } from '../data/characterData.service';

@Component({
    moduleId: module.id,
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent implements OnInit, OnDestroy {
    title = 'Select attributes.';
    @Input() characterData: CharacterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        console.log('Attribute feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
        console.log(this.title + ' unloaded!');
    }

    setStr(value: number){
        this.characterData.strength = value;
    }

    setDex(value: number){
        this.characterData.dexterity = value;
    }

    setCon(value: number){
        this.characterData.constitution = value;
    }

    setInt(value: number){
        this.characterData.intelligence = value;
    }

    setWis(value: number){
        this.characterData.wisdom = value;
    }

    setCha(value: number){
        this.characterData.charisma = value;
    }

}