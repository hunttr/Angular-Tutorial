import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterDataService } from '../data/characterData.service'
 
@Component ({
    moduleId: module.id,
    selector: 'mt-wizard-address',
    templateUrl: 'address.component.html'
})
 
export class AddressComponent implements OnInit, OnDestroy {
    title = 'Where do you live?';
    @Input() characterData;
    
    constructor(private characterDataService: CharacterDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        console.log('Address feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
    }
}