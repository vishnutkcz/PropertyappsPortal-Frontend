import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { PropertylistingComponent } from '../../propertylisting/propertylisting.component';
import { PropertydetailsComponent } from '../../propertydetails/propertydetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    PropertylistingComponent,
    PropertydetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule
  ]
})
export class DefaultModule { }
