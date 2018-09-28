import {Routes,RouterModule} from '@angular/router'
import {LoginComponent} from './login/login.component'
import{NgModule} from '@angular/core'
import {ForumComponent} from './forum/forum.component'


const routes:Routes = [
    {
        path : '', 
        redirectTo:'/login',
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'forum',
                component:ForumComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
 })



export class LoginRoutingModule
{}