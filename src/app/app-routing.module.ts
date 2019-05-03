import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { AboutPage } from './home/about/about.page';
import { SettingsPage } from './home/settings/settings.page';
import { UsernamePage } from './login/username/username.page';
import { PasswordPage } from './login/password/password.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage,
    children: [
      { path: 'about', component: AboutPage },
      { path: 'settings', component: SettingsPage }
    ]
  },
  { path: 'login', component: LoginPage,
    children: [
      { path: 'username', component: UsernamePage },
      { path: 'password', component: PasswordPage }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    HomePage, AboutPage, SettingsPage, LoginPage, UsernamePage, PasswordPage
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
