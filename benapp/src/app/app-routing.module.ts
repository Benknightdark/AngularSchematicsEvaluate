import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HotelListComponent } from "./hotel/hotel-list/hotel-list.component";
import { HotelEditComponent } from "./hotel/hotel-edit/hotel-edit.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

const routes: Routes = [
  {
    path: "hotelList",
    component: HotelListComponent
  },
  {
    path: "hotelEdit",
    component: HotelEditComponent
  },
  {
    path:"menu",
    component:SideMenuComponent
  },
  {
    path:"",
    component:SideMenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
