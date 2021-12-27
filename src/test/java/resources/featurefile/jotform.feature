Feature: Fill in jotform

  Scenario: Fill in jotform
    Given I am on jotform
    When I click on Start fill form
    And I fill first name field
    And I fill last name field
    And I click first page next
    And I drag and drop file
    And I click second page next
    And I draw my signature
    And I click third page next
    And I enter a date
    And I click fourth page next
    And I select security question
    And I answered security question
    And I click fifth page next
    And I click submit button
    Then I should see text 'Thank you!' and below that 'Your submission has been received!'

