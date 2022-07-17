Feature: Login
Scenario: Opening application
  Given I open the application
  Then I can see navbar with logo

Scenario: Succesful login
  Given I open the application
  And I am logged out
  When Click login button
  And Login as "jitka@seznam.cz"
  Then I am logged in

Scenario: Login failed
  Given I open the application
  And I am logged out
  When Click login button
  And Login as "jitka@seznam.cz" with wrong password
  Then I am not logged in
