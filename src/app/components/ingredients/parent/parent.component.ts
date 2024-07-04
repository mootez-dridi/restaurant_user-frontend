// parent.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Handle added ingredients here
  onIngredientAdded(newIngredientName: string): void {
    // Implement logic to handle the new ingredient
    console.log('New ingredient added:', newIngredientName);
    // You can push it to an array or process it further as needed
  }
}
