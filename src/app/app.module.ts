import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { AppComponent } from "./app.component";
import { RandomElementsListComponent } from "./random-elements-list/random-elements-list.component";
import { RandomElementComponent } from "./random-element/random-element.component";

@NgModule({
    declarations: [AppComponent, RandomElementsListComponent, RandomElementComponent],
    imports: [BrowserModule, ScrollingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
