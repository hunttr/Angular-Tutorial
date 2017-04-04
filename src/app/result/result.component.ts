import { Component, OnInit, Input } from '@angular/core';
 
import { CharacterDataService } from '../data/characterData.service'
 
@Component ({
    moduleId: module.id,
    selector: 'mt-wizard-result',
    templateUrl: 'result.component.html'
})
 
export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() characterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        console.log('Result feature loaded!');
    }
}