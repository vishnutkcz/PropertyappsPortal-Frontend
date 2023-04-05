import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
