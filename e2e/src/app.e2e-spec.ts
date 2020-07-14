import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    describe('filter by id', () => {
        it('should display the element with id 153', () => {
            page.navigateTo();
            const idInput = page.getIdInput();
            idInput.sendKeys('153');
            expect(page.getRandomElementsId()).toEqual(['153']);
        });

        it('should not display any element', () => {
            page.navigateTo();
            const idInput = page.getIdInput();
            idInput.sendKeys('4500');
            expect(page.getRandomElementsId()).toEqual([]);
        });
    });

    describe('filter by text', () => {
        it('should display the elements with the text "aliqua duis ullamco"', () => {
            page.navigateTo();
            const textInput = page.getTextInput();
            textInput.sendKeys('aliqua duis ullamco');
            expect(page.getRandomElementsId()).toEqual(['1', '609', '1739']);
        });

        it('should not display any element', () => {
            page.navigateTo();
            const textInput = page.getTextInput();
            textInput.sendKeys('Buenas noches');
            expect(page.getRandomElementsId()).toEqual([]);
        });
    });
});
