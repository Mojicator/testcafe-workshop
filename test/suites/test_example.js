import ExamplePage from "../page_model/example_model";

const page = new ExamplePage();

const name = 'Oscar';

fixture `Example test page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('input name', async t => {
    await t
        .typeText(page.inputName, 'Oscar')
        .click(page.checkboxRemoteTesting)
        .click(page.checkboxAdvanceTraffic)
        .click(page.checkboxTriedTestCafe)
        .typeText(page.textAreaCommet, 'Aprendiendo testcafe')
        .click(page.buttonSubmit)
        .wait(2000);
    
    await t.expect(page.thankYouMessage.innerText).contains(name);
});