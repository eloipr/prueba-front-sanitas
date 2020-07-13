import { Component, OnInit, Input } from "@angular/core";

import { RandomElement } from "../random-element";

@Component({
    selector: "app-random-element",
    templateUrl: "./random-element.component.html",
    styleUrls: ["./random-element.component.scss"],
})
export class RandomElementComponent implements OnInit {
    @Input() randomElement: RandomElement;

    constructor() {}

    ngOnInit() {}
}
