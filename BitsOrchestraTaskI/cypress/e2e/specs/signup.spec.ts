import GoogleFormPage from "../../pageobjects/GoogleForm.page"
import MainPage from "../../pageobjects/MainPage.page"

describe('Task I', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

  it('Should test Google form with valid credentials', () => {
    // link to form in the task document doesn't work!
    GoogleFormPage.clickProccedBtnEng()
    GoogleFormPage.fillFirstName("terlivanger")
    GoogleFormPage.fillLastName("makoren")
    GoogleFormPage.clickProccedBtn()
    cy.url().should('include','/accounts.google.com/lifecycle/steps/signup/birthdaygender?');
  })

  it('Should test Google form with invalid credentials', () => {
    // link to form in the task document doesn't work!
    GoogleFormPage.clickProccedBtnEng()
    GoogleFormPage.fillLastName("makoren")
    GoogleFormPage.clickProccedBtn()
    GoogleFormPage.fillFirstName("          ")
    GoogleFormPage.clickProccedBtn()
    GoogleFormPage.fillFirstName("aaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    GoogleFormPage.clickProccedBtn()
    GoogleFormPage.fillFirstName("&@X*()%1")
    GoogleFormPage.clickProccedBtn()
    GoogleFormPage.fillLastName("&@X*()%12")
    GoogleFormPage.clickProccedBtn()
    cy.url().should('include','/accounts.google.com/lifecycle/steps/signup/name?');
  })


})
