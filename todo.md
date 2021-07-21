## Working on
-------------
- polls.py: setting up viewpoll page.

## SQL
------
- manage user accounts, store username and passwords
- mange polls and along with reference to the user who created it

*there fore two tables are required*
*one for storing user details*
*for storing poll details and polling*

update:
5 tables are required
1 - store userdetails and authentication
2 - poll details and questions
3 - poll options and the votes
4 - polls created by users
5 - polls attempted by users

## HTML
----
- home page++: welcomes user
- pollform: to vote a selected poll
- viewpolls: to view available polls for every users and also poll results
- createpoll: to create and publish a poll
- signin: login page for user authentication
- accountmanage: to manage account details
- managepoll: to view the polls the user had created
- viewpoll: to check the results of a poll 

## Flask
-----
- home: home page
- user authentication: to check if a user is signed in
- user creation: to create and store user details on database
- user login: to accept form, retrieve user account and authenticate the user
- poll creation: to accept form, create poll and store the details in database
- polling: to accept form, record the vote and update the poll details in the database
- view polls: to retrieve poll details from database and send it to browser
- manage poll: to accept poll edit details and update the details
- publish poll: to change the poll status to closed, and make the results public 
