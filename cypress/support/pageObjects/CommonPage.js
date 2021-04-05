class commonPage{

    //Page objects
    get tabAddAssert() { return 'Add Asset'}
    get tabExistingAssert() {return 'Existing Assets'}

    //Page actions
    clickAddAssertTab(){
        cy.contains(this.tabAddAssert).click()
        cy.log(`Add Assert tab is clicked sucessfully`)
    }

    clickExistingAssertsTab(){
        cy.contains(this.tabExistingAssert).click()
        cy.log(`Existing tab clicked sucessfully`)
    }

}
export default commonPage