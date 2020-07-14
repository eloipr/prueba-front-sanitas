import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it("should display the element with id 153", () => {
        page.navigateTo();
        const idInput = page.getIdInput();
        idInput.sendKeys("153");
        expect(page.getRandomElementsId()).toEqual(["153"]);
    });

    it("should display the elements with the text 'aliqua duis ullamco'", () => {
        page.navigateTo();
        const textInput = page.getTextInput();
        textInput.sendKeys("aliqua duis ullamco");
        expect(page.getRandomElementsId()).toEqual(["1", "609", "1739"]);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
