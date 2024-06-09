Feature: Queue Page

Background: Sucessful login functionality
    Given Login to the DSALGO website 
    When Enter valid Username And Password
    Then successfully login


  Scenario: Navigate to Implementation of Queue in Python and valid code in TryEditor in Queue page
    Given The user select Queue item from Getstarted icon
    Then The user is directed to Queue Page
    When The user clicks on the Implementation using array in Queue link
    Then The user is directed to Implementation using array in Queue Page
    When The user clicks Try Here in Queue
    Then The tryEditor box appears in Queue
    When User type code "print 'Hello'" in the tryEditor
    Then User clicks Run button and Result is printed below
    
  Scenario: Navigate to Implementation of Queue in Python and In_valid code in TryEditor in Queue page
    Given The user select Queue item from Getstarted icon
    Then The user is directed to Queue Page
    When The user clicks on the Implementation using array in Queue link
    Then The user is directed to Implementation using array in Queue Page
    When The user clicks Try Here in Queue
    Then The tryEditor box appears in Queue
    When User type code "x=x+1" in the tryEditor
    Then User clicks Run button and Error alert message is displayed and accepted