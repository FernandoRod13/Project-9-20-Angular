import { NgModule } from '@angular/core';
import { MatTableModule,
         MatCardModule,
         MatSidenavModule,
         MatListModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatMenuModule,
         MatSelectModule,
         MatSnackBarModule } from '@angular/material';
@NgModule ({
    imports: [
        MatTableModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatSnackBarModule
    ],
    exports: [
        MatTableModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }
