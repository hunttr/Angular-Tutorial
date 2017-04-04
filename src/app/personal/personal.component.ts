import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterData } from '../data/characterData.model';
import { CharacterDataService } from '../data/characterData.service';
 
@Component ({
    moduleId: module.id,
    selector: 'mt-wizard-personal',
    templateUrl: 'personal.component.html'
})
 
export class PersonalComponent implements OnInit, OnDestroy {
    title = 'Please tell us about yourself.';
    @Input() characterData: CharacterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        //this.characterDataService.getData().subscribe(character => this.characterData = character);
        this.characterData = this.characterDataService.getData();
        console.log('Personal feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
        console.log(this.title + ' unloaded!');
    }
}