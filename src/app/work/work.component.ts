import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterDataService } from '../data/characterData.service'
 
@Component ({
    moduleId: module.id,
    selector: 'mt-wizard-work',
    templateUrl: 'work.component.html'
})
 
export class WorkComponent implements OnInit, OnDestroy {
    title = 'What do you do?';
    @Input() characterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        console.log('Work feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
    }
}
