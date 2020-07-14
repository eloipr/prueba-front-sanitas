import { Component, OnInit } from "@angular/core";

import { RandomElementsService } from "../random-elements.service";
import { RandomElement } from "../random-element";

@Component({
    selector: "app-elements-list",
    templateUrl: "./random-elements-list.component.html",
    styleUrls: ["./random-elements-list.component.scss"],
})
export class RandomElementsListComponent implements OnInit {
    idFilter: string = "";
    textFilter: string = "";

    randomElements: RandomElement[] = [];

    constructor(private randomElementsService: RandomElementsService) {}

    ngOnInit() {
        this.randomElements = this.randomElementsService.getElements();
    }

    idFilterChanged(value: string) {
        this.idFilter = value;
    }

    textFilterChanged(value: string) {
        this.textFilter = value;
    }
}
