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
         MatNativeDateModule,
         MatProgressSpinnerModule } from '@angular/material';
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
        MatNativeDateModule,
        MatProgressSpinnerModule
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
        MatNativeDateModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }
