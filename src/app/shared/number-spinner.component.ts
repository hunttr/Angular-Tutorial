import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { CharacterData } from '../data/characterData.model';
import { CharacterDataService } from '../data/characterData.service';

@Component({
    moduleId: module.id,
    selector: 'number-spinner',
    templateUrl: 'number-spinner.component.html',
    styleUrls: ["number-spinner.component.css"]
})
export class NumberSpinnerComponent implements OnInit, OnDestroy{
    @Input() attributename: string;
    @Input() characterData: CharacterData;
    number: number = 0;

    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        switch(this.attributename) {
            case "strength":
                this.number = this.characterData.strength;
                break;
            case "dexterity":
                this.number = this.characterData.dexterity;
                break;
            case "constitution":
                this.number = this.characterData.constitution;
                break;
            case "intelligence":
                this.number = this.characterData.intelligence;
                break;
            case "wisdom":
                this.number = this.characterData.wisdom;
                break;
            case "charisma":
                this.number = this.characterData.charisma;
                break;
        }
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
    }

    increase(){
        this.number++;
        this.setData();
    }

    decrease() {
        this.number--;
        this.setData();
    }

    private setData() {
        switch(this.attributename) {
            case "strength":
                this.characterData.strength = this.number;
                break;
            case "dexterity":
                this.characterData.dexterity = this.number;
                break;
            case "constitution":
                this.characterData.constitution = this.number;
                break;
            case "intelligence":
                this.characterData.intelligence = this.number;
                break;
            case "wisdom":
                this.characterData.wisdom = this.number;
                break;
            case "charisma":
                this.characterData.charisma = this.number;
                break;
        }
    }
}