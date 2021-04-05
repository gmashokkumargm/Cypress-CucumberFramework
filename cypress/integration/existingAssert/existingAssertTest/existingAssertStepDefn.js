const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
import CommonPage from "../../../support/pageObjects/CommonPage";
import ExistingAssertsPage from "../../../support/pageObjects/ExistingAssertsPage";

const commonPage = new CommonPage
const existingAssertsPage = new ExistingAssertsPage

Given('Navigate to Existing assert tab',function(){
    commonPage.clickExistingAssertsTab()
    existingAssertsPage.waitForAssertResults()
})

var setEntry
When('Set the show entries {int}',function(data){
    setEntry = data
    existingAssertsPage.setShowEntries(setEntry)
    //existingAssertsPage.verifyShowEntries(data)
})

Then('Verify the show entry results',function(){
    existingAssertsPage.verifyShowEntries(setEntry)
})

And('Get all added asserts',function(){
    commonPage.clickExistingAssertsTab()
    existingAssertsPage.waitForAssertResults()
})

When('Click on sort assert',function(){
    existingAssertsPage.clickSortAssert()
})

Then('Verify the ascending sorted order list',function(){
    existingAssertsPage.verifyAscendingSortedList()
})

Then('Verify the descending sorted order list',function(){
    existingAssertsPage.verifyDescendingSortedList()
})

Then('Click on sort two times',function(){
    existingAssertsPage.clickSortAssert()
    existingAssertsPage.clickSortAssert()
})

When('Type the assert {string}',function(data){
    //assert = dataTable.rawTable[1][0]
    existingAssertsPage.typeAssertValue(data)
})

Then('Verify the results showing {string}',function(assert){
    existingAssertsPage.searchForAssert(assert)
})

Then('Verify the no matching message',function(){
    existingAssertsPage.verifyInvalidAssert()
})

Given('Enter a valid assert in search assert field',function(){
    existingAssertsPage.typeAssertValue('ASHO7708')
})