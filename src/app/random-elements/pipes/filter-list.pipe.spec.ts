import { FilterListPipe } from "./filter-list.pipe";
import { RandomElement } from "../random-element";

const testElements: RandomElement[] = [
    {
        id: 1,
        photo: "https://picsum.photos/id/1/500/500.jpg",
        text: "Officia irure mollit commodo non quis.",
    },
    {
        id: 2,
        photo: "https://picsum.photos/id/2/500/500.jpg",
        text: "Minim proident esse nisi labore laboris ullamco sit occaecat esse mollit.",
    },
    {
        id: 3,
        photo: "https://picsum.photos/id/3/500/500.jpg",
        text: "Aute ea anim aute nulla ea nisi irure labore tempor nostrud.",
    },
];

describe("FilterListPipe", () => {
    it("create an instance", () => {
        const pipe = new FilterListPipe();
        expect(pipe).toBeTruthy();
    });

    describe("filter by id", () => {
        it("should return the element with id 3", () => {
            const pipe = new FilterListPipe();
            const filter = {
                id: "3",
                text: "",
            };

            const result: RandomElement[] = pipe.transform(testElements, filter);

            expect(result.length).toBe(1);
            expect(result[0].id).toBe(3);
            expect(result[0].photo).toBe("https://picsum.photos/id/3/500/500.jpg");
            expect(result[0].text).toBe("Aute ea anim aute nulla ea nisi irure labore tempor nostrud.");
        });

        it("should not return any element", () => {
            const pipe = new FilterListPipe();
            const filter = {
                id: "10",
                text: "",
            };

            const result: RandomElement[] = pipe.transform(testElements, filter);

            expect(result.length).toBe(0);
        });
    });

    describe("filter by text", () => {
        it("should return the element with 'officia' in the text", () => {
            const pipe = new FilterListPipe();
            const filter = {
                id: "",
                text: "officia",
            };

            const result: RandomElement[] = pipe.transform(testElements, filter);

            expect(result.length).toBe(1);
            expect(result[0].id).toBe(1);
            expect(result[0].photo).toBe("https://picsum.photos/id/1/500/500.jpg");
            expect(result[0].text).toBe("Officia irure mollit commodo non quis.");
        });

        it("should return the elements with 'mollit' in the text", () => {
            const pipe = new FilterListPipe();
            const filter = {
                id: "",
                text: "mollit",
            };

            const result: RandomElement[] = pipe.transform(testElements, filter);

            expect(result.length).toBe(2);
            expect(result[0].id).toBe(1);
            expect(result[0].photo).toBe("https://picsum.photos/id/1/500/500.jpg");
            expect(result[0].text).toBe("Officia irure mollit commodo non quis.");

            expect(result[1].id).toBe(2);
            expect(result[1].photo).toBe("https://picsum.photos/id/2/500/500.jpg");
            expect(result[1].text).toBe("Minim proident esse nisi labore laboris ullamco sit occaecat esse mollit.");
        });
    });
});
