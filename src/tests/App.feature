Feature: App component

  Scenario: Check if App component renders
    When the developer renders the component "App"
    Then the component should show the first menu option "Characters"
    Then the component should show the second menu option "Artifacts"
    Then the component should show the third menu option "Weapons"
    Then the component should show the fourth menu option "OSTs"

    Scenario: Check if Characters component renders
    When the developer renders the component "CharactersDisplayer"
    Then the component should show the "pyro" menu option "Pyro"
    Then the component should show the "anemo" menu option "Anemo"
    Then the component should show the "cryo" menu option "Cryo"
    Then the component should show the "geo" menu option "Geo"
    Then the component should show the "electro" menu option "Electro"
    Then the component should show the "hydro" menu option "Hydro"
    Then the component should show the "dendro" menu option "Dendro"

  Scenario: Check if SelectedCharacterOption comopnent renders
    Given the developer sets the property "element" to "Pyro"
    When the developer renders the component "SelectedCharacterOption"
    Then the component should show the title "Pyro characters"
    And the component should show the button add element with the following text "Add Pyro character"
    And the component should show the button show all elements with the following text "Show all Pyro characters"

  Scenario: Check if Add Element Button works correctly
    Given the developer renders the component "SelectedCharacterOption"
    When the developer clicks on the add element button
    Then the component