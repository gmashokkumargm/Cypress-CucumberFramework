class ExistingAssertPage{

    //Page Objects 
    get lstAddedAsserts() {return '[data-test="table-body"] tr td'}
    get btnNext() {return '[aria-label="Next"]'}
    get lstNumberOfPages() {return '[data-test="page-link"]:not([aria-label="Previous"]):not([aria-label="Next"])'}

    get mnuShowEntries() {return 'select.custom-select'}
    get mnuOptions() {return 'select.custom-select option'}

    get sortOption(){ return '[data-test="datatable-head"]'}

    get txtResults() {return '[role="status"]'}
    get txtSearch() {return '[aria-label="Search"]'}

    //Page Actions like clicking the element, entering the text, getting the text etc...

    //Typing assert value in search textbox
    typeAssertValue(value){
        cy.get(this.txtSearch).type(value)
    }

    //Searching for a assert value in search textbox
    searchForAssert(value){
        cy.get(this.lstNumberOfPages).each((element,index,list)=>{
            cy.get(this.lstNumberOfPages).eq(index).click()
            cy.get(this.lstAddedAsserts).each((ele)=>{
                expect(ele.text()).contains(value)
            })
        })
    }

    //waiting for assert get loaded and adding implicit wait for that particular locator
    waitForAssertResults(){
        cy.get(this.lstNumberOfPages,{timeout:60000}).should('be.visible')
    }
    
    //Setting the show entry dropdown value
    setShowEntries(value){
        var newValue = value.toString()
        cy.get(this.mnuShowEntries).select(newValue).should('have.value',value)
    }

    //Verifying the show value is showing properly
    verifyShowEntries(value){
        var num = Number(value)
        cy.get(this.txtResults).then(function(txt){
            var common = txt.text().split(' ')
            var showing = Number(common[3].trim())
            var total = Number(common[5].trim())
            if(num===showing ){
                assert.equal(num,showing)
            }else if (num>showing){
                assert.equal(showing,total)
            }else{
                assert.fail()
            }
        })
    }

    //getting all asserts and sorting ascending
    getAllAssertAndSortAscending(){
        var str =[]
        cy.get(this.lstNumberOfPages).each((ele,index)=>{
            cy.get(this.lstNumberOfPages).eq(index).click() 
            cy.get(this.lstAddedAsserts).each((ele)=>{  
                str.push(ele.text())
            })
        })
        str.sort()
        return str
    }

    //Getting all asserts and sorting into descending
    getAllAssertAndSortDescending(){
        var str =[]
        cy.get(this.lstNumberOfPages).each((ele,index)=>{
            cy.get(this.lstNumberOfPages).eq(index).click() 
            cy.get(this.lstAddedAsserts).each((ele)=>{  
                str.push(ele.text())
            })
        })
        str.sort().reverse()
        return str
    }

    //clicking sort option
    clickSortAssert(){
        cy.get(this.sortOption).click()

    }

    //Verifying the ascending ordered asserts
    verifyAscendingSortedList(){
        var str1 = []
        var str = this.getAllAssertAndSortAscending()
        cy.get(this.lstNumberOfPages).each((ele,index)=>{
            cy.get(this.lstNumberOfPages).eq(index).click() 
            cy.get(this.lstAddedAsserts).each((ele,index)=>{
                str1.push(ele.text())
                expect(str1[index]).to.equals(str[index])
            })
        })
    }

    //Verifying the descending ordered message
    verifyDescendingSortedList(){
        var str1 = []
        var str = this.getAllAssertAndSortDescending()
        cy.get(this.lstNumberOfPages).each((ele,index)=>{
            cy.get(this.lstNumberOfPages).eq(index).click() 
            cy.get(this.lstAddedAsserts).each((ele,index)=>{
                str1.push(ele.text())
                expect(str1[index]).to.equals(str[index])
            })
        })
    }

    //Verify invalid assert message while assert doesn't exist
    verifyInvalidAssert(){
        cy.get(this.lstAddedAsserts).each((txt)=>{
            var text = txt.text()
            assert.deepEqual(text,'No matching records found')
        })
    }
}
export default ExistingAssertPage

