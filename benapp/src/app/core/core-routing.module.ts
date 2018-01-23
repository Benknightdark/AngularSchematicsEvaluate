import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  {
    path: 'MenuModule',
    component: SideMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
