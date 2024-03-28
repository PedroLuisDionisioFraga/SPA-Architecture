import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { BookTableComponent } from "./components/book-table/book-table.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "book-table",
    component: BookTableComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
