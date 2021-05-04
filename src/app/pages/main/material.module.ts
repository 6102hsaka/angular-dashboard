import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout'
import { MatTableModule } from '@angular/material/table';


@NgModule({
    exports: [
        FlexLayoutModule,
        MatTableModule,
    ]
})
export class MaterialModule { }