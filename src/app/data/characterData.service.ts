import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
 
import { CharacterData } from './characterData.model';
 
@Injectable()
export class CharacterDataService {
 
    private characterData: CharacterData = new CharacterData();
    private _characterDataUrl = "api/character/character.json";
    
    constructor(private _http: Http) { }

    /*ngOnInit() {
        this._http.get(this._characterDataUrl)
        .map((response: Response) => <CharacterData> response.json())
        .do((data) => { this.characterData = data });
        //.subscribe(character => this.characterData = character);
    }*/

    getData(): CharacterData {
        return this.characterData;
    }

    setData(characterData: CharacterData) {
        this.characterData = characterData;
    }
}