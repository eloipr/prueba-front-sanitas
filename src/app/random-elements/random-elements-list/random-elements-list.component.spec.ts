import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RandomElementsListComponent } from "./random-elements-list.component";

describe("RandomElementsListComponent", () => {
    let component: RandomElementsListComponent;
    let fixture: ComponentFixture<RandomElementsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RandomElementsListComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RandomElementsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
