import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterData } from '../data/characterData.model';
import { CharacterDataService } from '../data/characterData.service';

@Component({
    moduleId: module.id,
    templateUrl: 'attribute.component.html'
})
export class AttributeComponent implements OnInit, OnDestroy {
    title = 'Select attributes';
    attributeSelectionType: string = "manual";
    showPoints: boolean = false;
    remainingPoints: number;
    @Input() characterData: CharacterData;

    //This is kind of ugly but better than having to recalculate the number one step at a time every time
    pointCosts: { [attributeTotal: number ] : number ; } = {
        7: -4,
        8: -2,
        9: -1,
        10: 0,
        11 : 1,
        12: 2,
        13: 3,
        14: 5,
        15: 7,
        16: 10,
        17: 13,
        18: 17
    };
    
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

    private setStr(value: number){
        this.characterData.strength = value;
        this.calcRemainingPoints();
    }

    private setDex(value: number){
        this.characterData.dexterity = value;
        this.calcRemainingPoints();
    }

    private setCon(value: number){
        this.characterData.constitution = value;
        this.calcRemainingPoints();
    }

    private setInt(value: number){
        this.characterData.intelligence = value;
        this.calcRemainingPoints();
    }

    private setWis(value: number){
        this.characterData.wisdom = value;
        this.calcRemainingPoints();
    }

    private setCha(value: number){
        this.characterData.charisma = value;
        this.calcRemainingPoints();
    }

    private showPointTotal() {
        switch (this.attributeSelectionType) {
            case "manual":
                this.showPoints = false;
                break;
            case "low":
            case "standard":
            case "high":
            case "epic":
                this.calcRemainingPoints();
                this.showPoints = true;
                break;
        }
    }

    private calcRemainingPoints() {
        switch(this.attributeSelectionType) {
            case "low":
                this.remainingPoints = 10;
                break;
            case "standard":
                this.remainingPoints = 15;
                break;
            case "high":
                this.remainingPoints = 20;
                break;
            case "epic":
                this.remainingPoints = 25;
                break;
        }
        var pointTotal = this.pointCosts[this.characterData.strength] +
                            this.pointCosts[this.characterData.dexterity] +
                            this.pointCosts[this.characterData.constitution] +
                            this.pointCosts[this.characterData.intelligence] +
                            this.pointCosts[this.characterData.wisdom] +
                            this.pointCosts[this.characterData.charisma];
        this.remainingPoints = this.remainingPoints - pointTotal;
    }

}