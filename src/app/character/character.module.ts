import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterCreationDetailComponent } from './character-creation-detail.component';
//import { StudentDetailComponent } from './student-detail.component';
//import { StudentListComponent } from './student-list.component';
//import { StudentService } from './student.service';

//import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CharacterCreationDetailComponent
    ],
    imports: [
        RouterModule.forChild([
                //{ path: 'character', component: CharacterListComponent },
                { path: 'character/new', component: CharacterCreationDetailComponent }
                //{ path: 'character/:id', component: CharacterDetailComponent }
        ])
    ],
    providers: [
        //StudentService
    ]
})
export class StudentModule{

}