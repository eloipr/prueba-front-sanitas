import { Injectable } from '@angular/core';

import elements from 'src/assets/elements.json';
import { RandomElement } from './random-element';

@Injectable({
    providedIn: 'root',
})
export class RandomElementsService {
    constructor() {}

    getElements(): RandomElement[] {
        return elements;
    }
}
