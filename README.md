# Logistics  

**Q1:** At what time in the week would your group be available to meet online?  

We are available to meet online on weekends after 6pm, as well as from 8pm-9pm on Thursdays.  
Our weekly meeting will be Thursday 8-9pm. 

---

# Timeline: Weekly Meeting Goals  

**Q2:** What is your goals that your group want to achieve in each weekly meeting?  

The goal of the weekly meeting is to track where we are in the development cycle and see if we are ahead or behind schedule and adjust accordingly. Also this time would be a place for us to discuss any problems we are running in to.

During week of 9/21: Divide up tasks and discuss which project idea we are going to go with.

Prior to 9/28: Meet together weekly to target project weakpoints/bugs and possibly visit office hours to get guidance if the progress feels weak. 

During week of 10/02: Submit Milestone 2 and make sure we are good to go on our plan/schedule

---

# Communication  

**Q3a:** How can your group communicate when doing the Full Stack Group Project?  

We can use discord/Imessage to communicate what we're working on and planning to accomplish throughout the semester.

**Q3b:** What are the usernames of each group member on that platform?  
Joel - BlackŁotus

Javi - Javi

Michael - ninjamero

Anthony - tonerbtw

**Q3c:** What is your group’s expected response time to messages?  

1-2 Hour Response time

---

# Norms  

**Q4a:** How will your group handle situations when there is conflict in your group?  

We will reach out as a group to those who are having a dissagreement and find balance with a vote.

**Q4b:** How will your group handle situations when a member is not contributing enough?  

If a certain team member isn't pulling their weight, the team will give a reminder of their duties and make sure progress is being made that day. If they continue to not do their role in the project we will meet in person to discuss a better way to resolve the issue.



---

# Roles  

**Q5:** How will your group divide your role in the Group Project?  

Joel - Frontend, Javi - Backend , Michael - Frontend, Anthony - Backend


---

# Tech Stacks

**Q6:** Which tech stacks will your group use? (Django + React or Flask + React)

Django + React

---
# Full Stack Group Project Track  
---



# Track 2: Technology for Public Goods 

**Problem 2:**

**Solution 2:** 

**Problem 3:** 

**Solution 3:**  

--- 

# Idea Finalization

**From 5 project ideas you have above, please choose one of the project that you are going with for the rest of the semester. Explain why you are going with that project**
We are going with Technology for Public Goods

# Extra Credit (Only do this if you are done with Idea Finalization)

## Database Design

**Q1: What database are you using for your project (SQLite, PostgreSQL, noSQL, MongoDB,...), and why do you choose it?**

**Q2: How will database be helpful to your project? How will you design your database to support your application features?**

## Third-Party API Integration

**Q3: Which third-party API(s) will you integrate into your project? What data will you pull from the API(s), and how will you use it in your application?**

**Q4: Does your API key has limitations such as rate limits or downtime? How are you going to deal with that?**

## Authentication and Security

**Q5: What authentication method will you use (e.g., username/password, OAuth, JWT)?**

Our team can use a web token for authentication. Users will log in with a username and password, and if successful, the server will generate a signed web token that clients can use in subsequent requests.


**Q6: How will you store and protect sensitive user data (e.g., passwords, tokens)?**

Passwords will never be stored in plain text. Instead, I will hash them using a secure algorithm

API keys, and tokens will be stored in environment variables

HTTPS will be secured so tokens and passwords are always encrypted in transit.

## Deployment

**Q7: Where will you deploy your project (e.g., Heroku, AWS, Render)? How will you manage environment variables and secrets during deployment?**

I plan to deploy on Render. Environment variables and secrets will be managed using the platform’s built-in secret manager

**Q8: How will you ensure your deployment is reliable and easy to update?**

we will use CI/CD pipelines (GitHub Actions) to automatically test and deploy changes

The deployment will be contained using Docker for consistency across environments

we will use logging, and monitoring to detect downtime

For updates, we’ll implement zero downtime deployments so the app remains available while pushing new versions

