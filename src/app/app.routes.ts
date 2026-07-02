import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { CreateEmployee } from './create-employee/create-employee';
import { EditEmployee } from './edit-employee/edit-employee';

export const routes: Routes = [
    {
        path: '',
        component:Dashboard
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'create',
        component:CreateEmployee
    },
    {
        path: 'edit/:id',
        component:EditEmployee
    },
];
