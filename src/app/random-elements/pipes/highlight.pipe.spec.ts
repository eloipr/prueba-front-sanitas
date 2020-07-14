import { HighlightPipe } from "./highlight.pipe";

const testText =
    "Officia irure mollit commodo non quis. Cupidatat officia commodo fugiat incididunt amet veniam ut Lorem velit.";

describe("HighlightPipe", () => {
    it("create an instance", () => {
        const pipe = new HighlightPipe();
        expect(pipe).toBeTruthy();
    });

    it("should not highlight the text", () => {
        const pipe = new HighlightPipe();
        const searchText = "";

        const result = pipe.transform(testText, searchText);

        expect(result).toBe(testText);
    });

    it("should not highlight the text", () => {
        const pipe = new HighlightPipe();
        const searchText = "lorem ipsum";

        const result = pipe.transform(testText, searchText);

        expect(result).toBe(testText);
    });

    it("should highlight 'irure'", () => {
        const pipe = new HighlightPipe();
        const searchText = "irure";

        const result = pipe.transform(testText, searchText);

        expect(result).toBe(
            "Officia <mark>irure</mark> mollit commodo non quis. Cupidatat officia commodo fugiat incididunt amet veniam ut Lorem velit."
        );
    });

    it("should highlight 'Officia' and 'officia'", () => {
        const pipe = new HighlightPipe();
        const searchText = "officia";

        const result = pipe.transform(testText, searchText);

        expect(result).toBe(
            "<mark>Officia</mark> irure mollit commodo non quis. Cupidatat <mark>officia</mark> commodo fugiat incididunt amet veniam ut Lorem velit."
        );
    });

    it("should highlight 'commodo non quis. '", () => {
        const pipe = new HighlightPipe();
        const searchText = "commodo non quis. ";

        const result = pipe.transform(testText, searchText);

        expect(result).toBe(
            "Officia irure mollit <mark>commodo non quis. </mark>Cupidatat officia commodo fugiat incididunt amet veniam ut Lorem velit."
        );
    });
});
