# final-project-proposal-meetsync
final-project-proposal-meetsync created by GitHub Classroom

What does your application do?

Current Google/Outlook functionality to create a meeting for multiple people with multiple schedules is a hassle. Our application aims to synchronise calendars of 
members who would be added to a meeting according to when they are available. Accessing all the calendar information in one spot will make creating and making 
a decision on scheduling the meeting easier. As per our knowledge, such an application does not exist as of now. 


What makes it different than a CRUD app? I.e., what functionality does it provide that is not just a user interface layer on top of a database of user information, and the ability to view / add to / change that information?

Along with the CRUD functionality (adding users to a database, accessing their information, etc), our application will also use the Google calendar API to access the calendar information of the members who want to be added to the same meeting, enabling them to track their meetings and get prompt notifications for future meetings also. 

What security and privacy concerns do you expect you (as developers) or your users to have with this application?

Some security and privacy concerns we aim to achieve are:
1. Authentication:  Users of this application will be authenticated before they can access the application. We aim to use Single Sign On (SSO) with an secure one time password like a QR code, guaranteeing an extra layer of security.
2. Using Authorised APIs: APIs that aren't authorised could give a hacker unwanted privileges. However, we are using the Google Calendar API is authorised which uses RESTful principles.  
3. Least Privilege: Our application will only access the permissions which are essential to run it smoothly, and no more. As we update our code for this application, we will perform threat modeling to ensure this.
