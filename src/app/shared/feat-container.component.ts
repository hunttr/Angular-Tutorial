import { Component, Input, OnInit } from '@angular/core';

import { CharacterDataService } from '../data/characterData.service';
import { FeatData } from '../data/featData.model';
import { FeatDataService } from '../data/featData.service';

@Component ({
    moduleId: module.id,
    selector: 'feat-container',
    templateUrl: 'feat-container.component.html',
    styleUrls: ['feat-container.component.css'],
    providers: [FeatDataService]
})
export class FeatContainerComponent implements OnInit {
    featData: FeatData[];

    constructor(private featDataService: FeatDataService) {}

    ngOnInit() {
        this.featData = [this.featDataService.getData(), this.featDataService.getData()];
    }
}