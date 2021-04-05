Feature: Add Assert

    Check all the functionalities in add assert tab

    @smoke
    Scenario: Add a unique assert and verify the added assert in the list
    Given Enter a valid assert in the new assert textbox
    When Click on send button
    Then The assert should added in the existing assert
    
    @regression
    Scenario: Add a valid assert and verify the format message
    Given Enter a valid assert in the new assert textbox 
    When Click on send button
    Then Verify the correct format message
    
    @regression
    Scenario: Add an existing assert and verify the error message
    Given Enter an existing assert
    When Click on send button
    Then Verify assert already exist message
    
    @regression
    Scenario: Add a vaid assert, edit to incorrect and verify the incorrect message
    Given Enter a valid assert in the new assert textbox
    When Click on send button
    And Close the success popup
    Then Verify the incorrect format message after editing a assert
    
    @regression
    Scenario: Verify invalid assert tooltip message for empty assert
    Given Enter an empty assert
    When Click on send button
    Then Verify tooltip for empty assert
    
    @regression
    Scenario Outline: Verify invalid assert tooltip message for invalid assert
    Given Enter an invalid assert "<invalidAssert>"
    When Click on send button
    Then Verify tooltip for an invalid assert
    Examples:
        |invalidAssert  |
        |ASHO770843415  |
        |ASHO77084341531|
        |lkjio          |
        |1235           |
        |@#$%@          |
        |AS@#678        |
        
    @regression
    Scenario: Verify Success message header
    Given Enter a valid assert in the new assert textbox
    When Click on send button
    Then Verify the success header message