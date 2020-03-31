import { Selector, t } from "testcafe";

export default class ExamplePage {
    constructor() {
        this.inputName = Selector('#developer-name');
        this.checkboxRemoteTesting = Selector('#remote-testing');
        this.checkboxAdvanceTraffic = Selector('#traffic-markup-analysis');
        this.checkboxTriedTestCafe = Selector('#tried-test-cafe');
        this.textAreaCommet = Selector('textarea').withAttribute('name');
        this.thankYouMessage = Selector('#article-header');
        this.buttonSubmit = Selector('#submit-button');
    }
}