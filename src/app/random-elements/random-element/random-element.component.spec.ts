import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RandomElementComponent } from "./random-element.component";

describe("RandomElementComponent", () => {
    let component: RandomElementComponent;
    let fixture: ComponentFixture<RandomElementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RandomElementComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RandomElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
