//
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatastroComponent } from './catastro/catastro.component';

//
//
const routes: Routes =  [    
                            { path: '',         component: CatastroComponent },
                            { path: '**',       redirectTo: '' }


];

@NgModule({
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            })

//
//
export class AppRoutingModule { }
