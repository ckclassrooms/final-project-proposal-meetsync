# final-project-proposal-meetsync
final-project-proposal-meetsync created by GitHub Classroom

What does your application do?

The current Google Calendar functionality to create a meeting for multiple people with multiple schedules is a hassle. Users have to add multiple calendars which they continue to have access to even after group tasks are scheduled. Our application aims to synchronize calendars of members who would be added to a meeting according to when they are available. Accessing all the calendar information in one spot will make creating and making 
a decision on scheduling the meeting easier. Further you would not have access to other users' data after scheduling unlike added calendars on Google Calendar which have to be deleted. As per our knowledge, such an application does not exist as of now.



What makes it different than a CRUD app? I.e., what functionality does it provide that is not just a user interface layer on top of a database of user information, and the ability to view / add to / change that information?

1. Along with the CRUD functionality (adding users to a database, accessing their information, etc), our application will also use the Google Calendar API to access the calendar information of the members who want to be added to the same meeting, enabling us to track their meetings. 
2. We would then collate information from multiple users to find a best fit for their meeting requirements (The amount of hours or the day they would like to schedule the meeting for).
3. We also add features to authenticate users via OAuth , and a feature to allow them to use a common link to join their group to schedule meetings


What security and privacy concerns do you expect you (as developers) or your users to have with this application?

Some security and privacy concerns we aim to achieve are:
1. Authentication:  Users of this application will be authenticated before they can access the application. We aim to use Single Sign On (SSO) with a secure one time password like a QR code, guaranteeing an extra layer of security.
2. Using Authorized APIs: APIs that aren't authorized could give a hacker unwanted privileges. However, we are using the Google Calendar API which is authorized and uses RESTful principles.  
3. Least Privilege: Our application will only access the permissions which are essential to run it smoothly, and no more. As we update our code for this application, we will perform threat modeling to ensure this.

