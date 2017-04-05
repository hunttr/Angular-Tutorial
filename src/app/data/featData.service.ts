import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
 
import { FeatData } from './featData.model';
 
@Injectable()
export class FeatDataService {
 
    private featData: FeatData = new FeatData();
    
    constructor(private _http: Http) { }

    /*ngOnInit() {
        this._http.get(this._characterDataUrl)
        .map((response: Response) => <CharacterData> response.json())
        .do((data) => { this.characterData = data });
        //.subscribe(character => this.characterData = character);
    }*/

    getData(): FeatData {
        return this.featData;
    }

    setData(featData: FeatData) {
        this.featData = featData;
    }
}