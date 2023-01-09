import { NgModule } from '@angular/core';
import {
  ActivatedRoute,
  Route,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [{ path: '', component: HelloComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
