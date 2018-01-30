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
         MatSnackBarModule,
         MatDatepickerModule,
         MatNativeDateModule } from '@angular/material';
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
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
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
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class MaterialModule { }
