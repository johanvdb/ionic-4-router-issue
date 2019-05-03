import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
          { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
