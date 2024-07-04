import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDishComponent } from './components/dishes/add-dish/add-dish.component';
import { DishListComponent } from './components/dishes/dish-list/dish-list.component';
import { EditDishDialogComponent } from './components/dishes/edit-dish-dialog/edit-dish-dialog.component';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { AddIngredientComponent } from './components/ingredients/add-ingredient/add-ingredient.component';
import { AcceptationReservationComponent } from './components/reservation/acceptation-reservation/acceptation-reservation.component'; 
import { AcceptedReservationComponent } from './components/reservation/accepted-reservation/accepted-reservation.component';
import { RejectedReservationComponent } from './components/reservation/rejected-reservation/rejected-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-dish', component: AddDishComponent },
  { path: 'dish-list', component: DishListComponent },
  { path: 'edit-dish/:id', component: EditDishDialogComponent },
  { path: 'ingredient-list', component: IngredientListComponent },
  { path: 'add-ingredient', component: AddIngredientComponent },
  { path: 'acceptation-reservation', component: AcceptationReservationComponent },
  { path: 'accepted-reservation', component: AcceptedReservationComponent },
  { path: 'rejected-reservation', component: RejectedReservationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
