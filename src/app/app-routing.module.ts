import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PropertydetailsComponent } from './propertydetails/propertydetails.component';
import { PropertylistingComponent } from './propertylisting/propertylisting.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: 'properties', component: PropertylistingComponent },
      { path: 'propertydetail', component: PropertydetailsComponent },
      { path: '', redirectTo: 'properties' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  ngOnInit() {
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
  }
}
