Feature: Main Displayer

Scenario: Clicking on a menu option should display the corresponding view
  Given the user is on the main displayer
  When the user clicks on the "Characters" menu option
  Then the Characters component should be displayed
