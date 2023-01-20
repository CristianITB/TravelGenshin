Feature: Main Displayer

  Scenario: Validating click event
    Given the developer links the property "onClick" to an event handler
    When the developer renders the component
    And the developer clicks on the component
    Then the event handler should be triggered