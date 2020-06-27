import { Component } from '@angular/core';

import { categories } from '../models/widgets';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent {
  categories = categories;

  share() {
    window.alert('The category has been tagged!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/