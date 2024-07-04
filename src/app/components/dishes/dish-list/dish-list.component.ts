import { Component } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {
  term: string = '';
  dishes: any[] = [
    { id: '1', name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.', price: 12 },
    { id: '2', name: 'Margherita Pizza', description: 'Traditional pizza with tomatoes, mozzarella, and basil.', price: 15 },
    { id: '3', name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.', price: 10 },
    { id: '4', name: 'Beef Tacos', description: 'Soft tacos filled with seasoned beef, lettuce, cheese, and salsa.', price: 8 },
    { id: '5', name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection, served with lemon butter sauce.', price: 20 },
    { id: '6', name: 'Chicken Curry', description: 'Spicy Indian chicken curry with a blend of aromatic spices.', price: 14 },
    { id: '7', name: 'Vegetable Stir-Fry', description: 'Mixed vegetables stir-fried with soy sauce and garlic.', price: 9 },
    { id: '8', name: 'Beef Burger', description: 'Juicy beef patty with lettuce, tomato, cheese, and a special sauce.', price: 11 },
    { id: '9', name: 'Shrimp Scampi', description: 'Shrimp cooked in garlic, butter, and white wine sauce, served with pasta.', price: 18 },
    { id: '10', name: 'Chocolate Lava Cake', description: 'Decadent chocolate cake with a gooey molten center.', price: 7 }
  ];
  selectedDish: any = {};
  messageErr = '';
  messageSucc = '';
  deleteIndex: number = -1;

  constructor() { }

  editDish(index: number) {
    this.selectedDish = { ...this.dishes[index] };
  }

  updateDish() {
    const dishIndex = this.dishes.findIndex(d => d.id === this.selectedDish.id);
    if (dishIndex !== -1) {
      this.dishes[dishIndex] = this.selectedDish;
      this.messageSucc = `Le plat ${this.selectedDish.name} a été mis à jour.`;
      this.selectedDish = {};
    } else {
      this.messageErr = 'Erreur lors de la mise à jour du plat.';
    }
    // Close modal
    const closeButton: HTMLElement = document.querySelector('#editModal .btn-close') as HTMLElement;
    closeButton.click();
  }

  confirmDelete(index: number) {
    this.deleteIndex = index;
  }

  deleteDish() {
    if (this.deleteIndex !== -1) {
      const deletedDish = this.dishes.splice(this.deleteIndex, 1);
      this.messageSucc = `Le plat ${deletedDish[0].name} a été supprimé.`;
      this.deleteIndex = -1;
    } else {
      this.messageErr = 'Erreur lors de la suppression du plat.';
    }
    // Close modal
    const closeButton: HTMLElement = document.querySelector('#deleteModal .btn-close') as HTMLElement;
    closeButton.click();
  }
}
