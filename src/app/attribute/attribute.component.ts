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
        //this.characterDataService.getData().subscribe(character => this.characterData = character);
        this.characterData = this.characterDataService.getData();
        console.log('Personal feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
        console.log(this.title + ' unloaded!');
    }

}