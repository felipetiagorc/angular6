import{NgModule} from '@angular/core'
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
    {path: '', component: AboutComponent}
]


@NgModule({
    declarations:[AboutComponent], // lista componentes que vao ter no modulo
    imports: [RouterModule, RouterModule.forChild(ROUTES)]

})

export class AboutModule {}