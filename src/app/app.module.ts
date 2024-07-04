import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDishComponent } from './components/dishes/add-dish/add-dish.component';
import { DishListComponent } from './components/dishes/dish-list/dish-list.component';
import { EditDishDialogComponent } from './components/dishes/edit-dish-dialog/edit-dish-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { AddIngredientComponent } from './components/ingredients/add-ingredient/add-ingredient.component';
import { ParentComponent } from './components/ingredients/parent/parent.component';
import { AcceptationReservationComponent } from './components/reservation/acceptation-reservation/acceptation-reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { AcceptedReservationComponent } from './components/reservation/accepted-reservation/accepted-reservation.component';
import { RejectedReservationComponent } from './components/reservation/rejected-reservation/rejected-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddDishComponent,
    DishListComponent,
    EditDishDialogComponent,
    FilterPipe,
    IngredientListComponent,
    AddIngredientComponent,
    ParentComponent,
    AcceptationReservationComponent,
    AcceptedReservationComponent,
    RejectedReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    FormsModule // Include FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
