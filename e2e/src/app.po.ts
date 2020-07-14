import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getRandomElementsId() {
        return element.all(by.css('.random-element .id')).getText();
    }

    getIdInput() {
        return element(by.css(`input[name='id']`));
    }

    getTextInput() {
        return element(by.css(`input[name='text']`));
    }
}
