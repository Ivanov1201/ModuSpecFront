import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


import { TopmenuComponent } from './topmenu/topmenu.component';
import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';

import { HeaderComponent } from './header/header.component';

import { BrandingComponent } from './widgets/branding.component';
import { GithubButtonComponent } from './widgets/github.component';
import { NotificationComponent } from './widgets/notification.component';
import { TranslateComponent } from './widgets/translate.component';
import { UserComponent } from './widgets/user.component';

import { CustomizerComponent } from './customizer/customizer.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    TopmenuComponent,
    TopmenuPanelComponent,
    HeaderComponent,
    BrandingComponent,
    GithubButtonComponent,
    NotificationComponent,
    TranslateComponent,
    UserComponent,
    CustomizerComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
