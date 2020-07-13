import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

import { RandomElement } from "../random-element";

@Component({
    selector: "app-random-element",
    templateUrl: "./random-element.component.html",
    styleUrls: ["./random-element.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomElementComponent implements OnInit {
    @Input() randomElement: RandomElement;
    @Input() searchText: string;

    constructor() {}

    ngOnInit() {}
}
