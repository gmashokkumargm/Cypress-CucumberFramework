const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
import CommonPage from "../../../support/pageObjects/CommonPage"
import AddAssertPage from "../../../support/pageObjects/AddAssertPage"
import ExistingAssertsPage from "../../../support/pageObjects/ExistingAssertsPage"


const commonPage = new CommonPage
const addAssertPage = new AddAssertPage
const existingAssertsPage = new ExistingAssertsPage

//Getting assert name and declared globally because it will use in many methods
var assertName=''

//Getting Assert randomly and passing to the assert text box
Given('Enter a valid assert in the new assert textbox', function(){
    assertName = addAssertPage.generateRandomAssert()
    commonPage.clickAddAssertTab()
    addAssertPage.enterAssert(assertName)
})

//clicking on send button in the popup
When('Click on send button',function(){
    addAssertPage.clickSendButton()
})

//After adding assert verifying success message and verifying in the hole assert list
Then('The assert should added in the existing assert',function(){
    addAssertPage.verifySuccessMessage(assertName)
    addAssertPage.clickCloseButton()
    commonPage.clickExistingAssertsTab()
    existingAssertsPage.waitForAssertResults()
    existingAssertsPage.typeAssertValue(assertName)
    existingAssertsPage.searchForAssert(assertName)
})

//After entering valid assert and verifying it is showing valid format or not
Then('Verify the correct format message',function(){
    addAssertPage.clickCloseButton()
    addAssertPage.verifyFormatMessage()
})

//Entering an existing assert
Given('Enter an existing assert',function(){
    commonPage.clickAddAssertTab()
    addAssertPage.enterAssert(this.assertData.existingAssert)
})

//Verifying whether it is showing assert already exist or not
Then('Verify assert already exist message',function(){
    addAssertPage.verifyAssertExistMessage()
})

//Entering an invalid assert format
Given('Enter an invalid format assert',function(){
    commonPage.clickAddAssertTab()
    addAssertPage.enterAssert(this.assertData.existingAssert)
})

//Closing the success popup
And('Close the success popup',function(){
    addAssertPage.clickCloseButton()
})

//After entering a valid format and edit to invalid and verify the incorrect format message
Then('Verify the incorrect format message after editing a assert',function(){
    addAssertPage.verifyIncorrectMessage()
})

//clicking a send button without entering an assert
Given('Enter an empty assert',function(){
    commonPage.clickAddAssertTab()
})

//verifying the tooltip message for empty assert value
Then('Verify tooltip for empty assert',function(){
    addAssertPage.verifyToolTipForInvalidAssert('Please fill in this field.')
})

//Entering an invalid assert value
Given('Enter an invalid assert {string}',function(data){
    commonPage.clickAddAssertTab()
    addAssertPage.enterAssert(data)
})

//Verifying the tooltip message for invalid assert value
Then('Verify tooltip for an invalid assert',function(){
    addAssertPage.verifyToolTipForInvalidAssert('Please match the format requested.') 
})

//Aftering entering valid assert, verifying success popup message header
Then('Verify the success header message',function(){
    addAssertPage.verifySuccessMessageHeader()
})