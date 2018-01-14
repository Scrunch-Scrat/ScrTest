import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]= [
  new Recipe('Baked Alaska',
  'Cool Dessert',
  // tslint:disable-next-line:max-line-length
  'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/2/FNM080109Cover021_pink_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383254816256.jpeg')
];
 @Output() recipeItemSelected = new EventEmitter <Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}
