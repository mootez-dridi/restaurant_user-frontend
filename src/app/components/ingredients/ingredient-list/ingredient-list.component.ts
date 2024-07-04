import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {
  ingredients: any[] = [
    { id: '1', name: 'Tomatoes' },
    { id: '2', name: 'Onions' },
    { id: '3', name: 'Garlic' },
    { id: '4', name: 'Olive Oil' },
    { id: '5', name: 'Basil' },
    { id: '6', name: 'Oregano' },
    { id: '7', name: 'Parsley' },
    { id: '8', name: 'Thyme' },
    { id: '9', name: 'Rosemary' },
    { id: '10', name: 'Black Pepper' },
    { id: '11', name: 'Salt' },
    { id: '12', name: 'Sugar' },
    { id: '13', name: 'Butter' },
    { id: '14', name: 'Flour' },
    { id: '15', name: 'Eggs' },
    { id: '16', name: 'Milk' },
    { id: '17', name: 'Cheese' },
    { id: '18', name: 'Chicken' },
    { id: '19', name: 'Beef' },
    { id: '20', name: 'Fish' }
  ];
  selectedIngredient: any = {};
  deleteIndex: number = -1;
  term: string = ''; // Initialize term as an empty string for two-way binding

  // Filtered ingredients array based on search term
  get filteredIngredients() {
    return this.ingredients.filter(ingredient =>
      ingredient.name.toLowerCase().includes(this.term.toLowerCase())
    );
  }

  editIngredient(index: number) {
    this.selectedIngredient = { ...this.ingredients[index] };
  }

  updateIngredient() {
    const ingredientIndex = this.ingredients.findIndex(i => i.id === this.selectedIngredient.id);
    if (ingredientIndex !== -1) {
      this.ingredients[ingredientIndex] = this.selectedIngredient;
      this.selectedIngredient = {};
    }
    const closeButton: HTMLElement = document.querySelector('#editIngredientModal .btn-close') as HTMLElement;
    closeButton.click();
  }

  confirmDelete(index: number) {
    this.deleteIndex = index;
  }

  deleteIngredient() {
    if (this.deleteIndex !== -1) {
      this.ingredients.splice(this.deleteIndex, 1);
      this.deleteIndex = -1;
    }
    const closeButton: HTMLElement = document.querySelector('#deleteIngredientModal .btn-close') as HTMLElement;
    closeButton.click();
  }

  // Optional: Implement search method to dynamically update filtered list
  search() {
    // Implement if necessary, often handled by two-way binding [(ngModel)]="term"
    // This method can be used to trigger additional actions on search input changes
  }
}
