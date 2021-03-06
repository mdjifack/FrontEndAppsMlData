import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "about", component : AboutComponent},
  {path : "contact", component : ContactComponent},
  {path : "privacy", component : PrivacyComponent},
  {path : "saved", component : SavedComponent},
  {path : "", component : HomeComponent},
  {path : "**", component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
