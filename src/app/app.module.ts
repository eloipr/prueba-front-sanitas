import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RandomElementsModule } from "./random-elements/random-elements.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RandomElementsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
