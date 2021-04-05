Feature: Existing Assert

    Check all the functionalities in existing assert tab
    
    @smoke
    Scenario Outline: verify showing and entries at bottom of the assert list 
    Given Navigate to Existing assert tab
    When Set the show entries <entries>
    Then Verify the show entry results
    Examples:
        |entries|
        |10     |
        |20     |
        |50     |
        |100    |       

    @regression
    Scenario: Sort the assert by ascending and verify
    Given Navigate to Existing assert tab
    When Click on sort assert
    Then Verify the ascending sorted order list

    @regression
    Scenario: Sort the assert by descending and verify
    Given Navigate to Existing assert tab
    When Click on sort two times
    Then Verify the descending sorted order list

    @regression
    Scenario: Search for asserts and click sort and verify ascending ordered assert
    Given Navigate to Existing assert tab
    When Enter a valid assert in search assert field
    And Click on sort assert
    Then Verify the ascending sorted order list

    @regression
    Scenario: Search for asserts and click sort and verify descending ordered assert
    Given Navigate to Existing assert tab
    When Enter a valid assert in search assert field
    And Click on sort two times
    Then Verify the descending sorted order list

    @regression
    Scenario Outline: Search the valid assert and verify
    Given Navigate to Existing assert tab
    When Type the assert "<assert>"
    Then Verify the results showing "<assert>"
    Examples:
        |assert |
        |ASHO   |
        |7708   |
        |ASHO7708|

    @smoke
    Scenario Outline: Search for invalid assert and verify no matching found text
    Given Navigate to Existing assert tab
    When Type the assert "<assert>"
    Then Verify the no matching message
    Examples:
        |assert |
        |oeuiu  |
        |slkdf  |
        |@#$Sf  |
        |123ABS |

    @regression
    Scenario Outline: Search for an assert and verify the show entry
    Given Navigate to Existing assert tab
    When Enter a valid assert in search assert field
    And Set the show entries <entri>
    Then Verify the show entry results
    Examples:
        |entri  | 
        | 10    |
        | 50    |
        |100    |    