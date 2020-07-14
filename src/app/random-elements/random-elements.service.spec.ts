import { TestBed } from "@angular/core/testing";

import { RandomElementsService } from "./random-elements.service";

describe("RandomElementsService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: RandomElementsService = TestBed.get(RandomElementsService);
        expect(service).toBeTruthy();
    });

    describe("#getElements", () => {
        it("should return 4000 elements", () => {
            const service: RandomElementsService = TestBed.get(RandomElementsService);

            const elements = service.getElements();

            expect(elements.length).toBe(4000);
        });
    });
});
