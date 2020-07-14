import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { RandomElementsListComponent } from "./random-elements-list/random-elements-list.component";
import { RandomElementComponent } from "./random-element/random-element.component";
import { FilterListPipe } from "./pipes/filter-list.pipe";
import { HighlightPipe } from "./pipes/highlight.pipe";

@NgModule({
    declarations: [RandomElementsListComponent, RandomElementComponent, FilterListPipe, HighlightPipe],
    imports: [CommonModule, ScrollingModule],
    exports: [RandomElementsListComponent],
})
export class RandomElementsModule {}
