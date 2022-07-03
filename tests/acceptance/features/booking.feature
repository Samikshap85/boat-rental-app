Feature: Booking Information
 As a user
 I want to book a boat
 So that i can enjoy my boating

 Scenario: Book a boat
   Given a user has navigated to the home page to book a rental
   When a user click check availability and fill the booking page and click on submit button
   Then booking details page must be displayed
