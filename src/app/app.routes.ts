import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { TaskForm } from './task-form/task-form';

export const routes: Routes = [
    {path: 'home', component: Homepage},
    {path: 'create-task', component: TaskForm}
];



