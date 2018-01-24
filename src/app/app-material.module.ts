import { NgModule } from '@angular/core';
import { MatTableModule,
         MatCardModule,
         MatSidenavModule,
         MatListModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule } from '@angular/material';
@NgModule ({
    imports: [
        MatTableModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        MatTableModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
