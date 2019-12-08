import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AdminComponent } from './user/admin/admin.component';
import { AdminPageComponent } from './user/admin/admin-page/admin-page.component';

import { InternshipComponent } from './user/internship/internship.component';
import { SkillsComponent } from './user/internship/skills/skills.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'admin', component: UserComponent,
        children: [{ path: '', component: AdminComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate:[AuthGuard]
    },
    {
        path: 'internship', component: InternshipComponent, canActivate:[AuthGuard]
    },

    {
        path: 'skills', component: SkillsComponent, canActivate:[AuthGuard]
    },

    {
        path: 'adminpage', component: AdminPageComponent
    },
    
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];