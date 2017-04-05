import { Component, OnInit, Input, OnDestroy } from '@angular/core';
 
import { CharacterDataService } from '../data/characterData.service';
import { FeatData } from '../data/featData.model';
import { FeatDataService } from '../data/featData.service';
 
@Component ({
    moduleId: module.id,
    selector: 'mt-wizard-address',
    templateUrl: 'address.component.html',
    providers: [FeatDataService]
})
 
export class AddressComponent implements OnInit, OnDestroy {
    title = 'Where do you live?';
    @Input() characterData;
    private source: Array<any>;
    private feats: FeatData = new FeatData();
    private key: string = 'name';
    private display: string = 'name';
    private keepSorted: boolean = true;
    private filter: boolean = false;
    private confirmed: Array<any> = new Array<any>();
    
    constructor(private characterDataService: CharacterDataService, private featDataService: FeatDataService) {
    }
 
    ngOnInit() {
        this.characterData = this.characterDataService.getData();
        this.characterData.feats = [this.featDataService.getData(), { name: "Dodge", description: "Dodge", benefit: "Dodge" }];
        this.source = this.characterData.feats;
        console.log('Address feature loaded!');
    }
 
    ngOnDestroy() {
        this.characterDataService.setData(this.characterData);
    }
}