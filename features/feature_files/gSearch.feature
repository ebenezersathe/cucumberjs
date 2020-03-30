@pacAdmin
Feature: Google.com Search Function

Scenario Outline: Enter a keyword and search
    Given I am on "<url>"
    When I enter "<keyword>" in the search bar
    And Click Submit
    Then Search results page is displayed for "<keyword>"

Examples:
| url | keyword |
| https://www.google.com | giraffs |