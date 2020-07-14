import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RandomElementComponent } from "./random-element.component";
import { HighlightPipe } from "../pipes/highlight.pipe";

describe("RandomElementComponent", () => {
    let component: RandomElementComponent;
    let fixture: ComponentFixture<RandomElementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RandomElementComponent, HighlightPipe],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RandomElementComponent);
        component = fixture.componentInstance;
        component.randomElement = {
            id: 1,
            photo: "invalid_link",
            text: "Lorem ipsum.",
        };
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("#onImgError should change the image src", () => {
        const img = fixture.debugElement.nativeElement.querySelector("img");
        component.onImgError({ target: img });
        expect(img.getAttribute("src")).toContain("assets/images/no_image.jpg");
    });
});
