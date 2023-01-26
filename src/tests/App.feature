Feature: App component

  Scenario: Check if App component renders
    When the developer renders the component
    Then the component should show the menu option "Characters"
    Then the component should show the menu option "Artifacts"
    Then the component should show the menu option "Weapons"
    Then the component should show the menu option "OSTs"

