import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { TaskForm } from './task-form/task-form';
import { Signup } from './signup/signup';
import { Signin } from './signin/signin';

export const routes: Routes = [
    {path: 'home', component: Homepage},
    {path: 'create-task', component: TaskForm},
    {path: 'signup', component: Signup},
    {path: 'signin', component: Signin}
];



