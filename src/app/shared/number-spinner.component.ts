import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'number-spinner',
    templateUrl: 'number-spinner.component.html',
    styleUrls: ["number-spinner.component.css"]
})
export class NumberSpinnerComponent {
    @Input() attributeName: string;
    @Input() characterData: CharacterData;
    @Input() number: number;
    @Output() spinnerClicked: EventEmitter<number> = new EventEmitter<number>();

    increase(){
        if(++this.number <= 18)
            this.spinnerClicked.emit(this.number);
        else
            this.number = 18;
    }

    decrease() {
        if(--this.number >= 7)
            this.spinnerClicked.emit(this.number);
        else    
            this.number = 7;
    }

    setValue() {
        this.spinnerClicked.emit(this.number);
    }
}