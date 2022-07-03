Feature: Check availability
 As a user
 I want to load home page
 So that I can check availability

 Scenario: Test availability
   Given a user has navigated to the homepage to check availability   
   When the user selects date to book a boat and click check availability
   Then bookingpage should be displayed on the webUI along with the package information
   

   


