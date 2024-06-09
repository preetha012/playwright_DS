Feature: DSALGO Login

@Regression
Scenario: Sucessful login functionality
    Given  login to the  site 
    When Enter valid Username And Password
    Then successfully login

# Scenario Outline: Unsucessful login functionality
#     Given  login to the  site 
#     When enter invalid "username" And "password"
#     Then Unsuccessfull login
#     Examples:
#         | username | password |
#         |  | test12  |
#         | Numpy@8913  |  |
#         | Numpy@8913  | test12  |
        