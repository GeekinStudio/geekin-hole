import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatProgressBarModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material';

const mod = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatProgressBarModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: mod,
  exports: mod
})
export class MaterialModule {
}
