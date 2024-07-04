import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  @Output() addDish: EventEmitter<any> = new EventEmitter<any>();

  dish: any = {
    name: '',
    description: '',
    price: null,
    ingredients: []
  };

  selectedIngredients: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: string) {
    if (ingredient && !this.selectedIngredients.includes(ingredient)) {
      this.selectedIngredients.push(ingredient);
    }
  }

  removeIngredient(index: number) {
    if (index >= 0 && index < this.selectedIngredients.length) {
      this.selectedIngredients.splice(index, 1);
    }
  }

  submitForm() {
    // Assign selected ingredients to dish object
    this.dish.ingredients = this.selectedIngredients;

    // Emit the new dish object to the parent component
    this.addDish.emit(this.dish);

    // Reset form and selected ingredients
    this.dish = {
      name: '',
      description: '',
      price: null,
      ingredients: []
    };
    this.selectedIngredients = [];
  }
}
