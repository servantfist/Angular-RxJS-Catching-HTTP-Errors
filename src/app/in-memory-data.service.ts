import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'banana', desc: 'tasty' },
      { id: 2, name: 'dirt', desc: 'non-edible' },
      { id: 3, name: 'margarita', desc: 'tasty'},
      { id: 4, name: 'mud', desc: 'non-edible' },
      { id: 5, name: 'pickles', desc: 'non-edible' },
    ];
    const query = [
      { name: '@angular/core', version: '20.1.0', description: 'angular core package' },
      { name: '@angular/common', version: '20.1.0', description: 'angular common package' },
      { name: '@angular/material', version: '20.1.5', description: 'angular material package' },
    ];
    return {items, query};
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/