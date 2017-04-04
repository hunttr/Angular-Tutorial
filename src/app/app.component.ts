import { Component, OnInit, Input } from '@angular/core';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";
 
import { CharacterDataService } from './data/characterData.service';
 
@Component ({
    selector: 'multi-step-wizard-app',
    //directives: [ UIROUTER_DIRECTIVES ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() characterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        console.log(this.title + ' loaded!');
    }
}