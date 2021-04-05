///<reference types="Cypress"/>

class AddAssertPage{

    //Page objects
    get txtEnterAssert() {return '#defaultFormAddAsset'}  
    get txtSuccessMessage() {return 'div.modal-body'}   
    get txtAssertExist() {return 'h4.modal-title'}
    get txtFormatMessage() {return 'div.valid-feedback'}
    get txtIncorrectFormat() {return 'div.invalid-feedback'}
    get txtSuccessMessageHeader() {return 'h4.modal-title'}

    get tooltipMessage() {return '#defaultFormAddAsset'}

    get btnSubmit() {return 'button[type="submit"]'}
    get btnClose() {return 'Close'}

    get icnClose() {return 'button[class="close"]'}

    //Page Actions like clicking the element, entering the text, getting the text etc...
    //Entering a assert name in new assert textbox
    enterAssert(assertName){
        cy.get(this.txtEnterAssert).type(assertName)
        cy.log(`Assert entered sucessfully`)
    }

    //It will generate random assert like ABCD1234567890 format
    generateRandomAssert(){
        var string=''
        var number = Math.floor((Math.random() * 10000000000))
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
        for (var i = 0; i < 4; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        string = text+(number.toString())
        if(string.length!==14){
            string = string+'0'
        }
        return string
    }

    //clicking send button 
    clickSendButton(){
        cy.get(this.btnSubmit).click()
        cy.log(`Send button clicked sucessfully`)
    }

    //verify the success message
    verifySuccessMessage(assertName){
        cy.get(this.txtSuccessMessage).should('contain.text',assertName)
        cy.log(`Success message contains added assert`)
    }

    //Click close button
    clickCloseButton(){
        cy.contains(this.btnClose).click()
        cy.log(`Close button clicked sucessfully`)
    }

    //After trying to add existing existing assert it should show assert already existist
    verifyAssertExistMessage(){
        cy.get(this.txtAssertExist).should('have.text','Asset already exist')
    }

    //verify the correct format message after entering valid assert
    verifyFormatMessage(){      
        cy.get(this.txtFormatMessage).should('have.text','Correct format')
    }

    //Verify the incorrect format message after entering valid and deleting one char
    verifyIncorrectMessage(){
        cy.get(this.txtEnterAssert).type('{backspace}')
        cy.get(this.txtIncorrectFormat).should('have.text','Incorrect format')
    }

    //If the entered assert is valid then verifying success message header
    verifySuccessMessageHeader(){
        cy.get(this.txtSuccessMessageHeader).should('have.text','Success')
    }

    //Closing the popup using close icon
    clickCloseIcon(){
        cy.get(this.icnClose).click()
    }

    //clearing assert value
    clearEnteredAssertValue(){
        cy.get(this.txtEnterAssert).clear()
    }

    //verify the tooltip for invalid assert value 
    verifyToolTipForInvalidAssert(message){        
    cy.get(this.tooltipMessage).should((inputField) => {
        expect(inputField.get(0).checkValidity()).to.equal(false);
        expect(inputField.get(0).validationMessage).to.equal(message);
     });
    }

}
//exporting the class so the we import and use
export default AddAssertPage