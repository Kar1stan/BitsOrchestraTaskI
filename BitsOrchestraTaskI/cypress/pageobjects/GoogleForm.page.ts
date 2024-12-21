
class GoogleFormPage {
    get proccedBtn(){
        return cy.xpath("//span[text()='Далее']") 
    }
    get proccedBtnEng(){
        return cy.xpath("//span[text()='Next']") 
    }
    get firstNameInput(){
        return cy.get("#firstName") 
    }
    get lastNameInput(){
        return cy.get("#lastName") 
    }

    fillFirstName(firstname:string){
        this.firstNameInput.type(firstname);
    }

    fillLastName(lastname:string){
        this.lastNameInput.type(lastname);
    }

    clickProccedBtn(){
        this.proccedBtn.click()
    }

    clickProccedBtnEng(){
        this.proccedBtnEng.click()
    }

}
export default new GoogleFormPage();
