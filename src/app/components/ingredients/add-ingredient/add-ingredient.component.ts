// add-ingredient.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {
  @Output() ingredientAdded = new EventEmitter<any>();

  newIngredientName: string = '';

  addIngredient(): void {
    if (this.newIngredientName.trim()) {
      // Emit event to parent component with the new ingredient name
      this.ingredientAdded.emit(this.newIngredientName);

      // Clear the input after adding ingredient
      this.newIngredientName = '';
    }
  }
}
