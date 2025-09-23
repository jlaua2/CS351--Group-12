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
# Full Stack Group Project Track - Price Comparison App
---


# Track 2: Technology for Public Goods 

**Problem 2:**

Many Chicago neighborhoods struggle with food insecurity and lack of affordable, nutritious food options. Residents often don’t know where to find nearby food pantries, farmers’ markets, or community kitchens, making it difficult to access healthy meals.

**Solution 2:** 

A food resource locator app that maps nearby pantries and markets. Features include real-time pantry hours, dietary filters, and a community board where neighbors can share surplus food. This solution promotes accessibility, reduces food waste, and helps residents find nutritious meals.

**Problem 3:** 

Students and community members often face difficulty in finding affordable prices for everyday items across different stores and online retailers. Without a reliable way to compare options, people may overpay or waste time checking multiple platforms.

**Solution 3:**  

A price comparison app that aggregates data from online and in-store retailers. Users can search for a product, and the app will show the lowest available price along with store availability, shipping details, and discounts. This solution saves money, supports informed decision-making, and increases accessibility to affordable goods.

--- 

# Idea Finalization

**From 5 project ideas you have above, please choose one of the project that you are going with for the rest of the semester. Explain why you are going with that project**

From the five project ideas we developed, we are going forward with the price comparison app under Technology for Public Goods. We chose this project because affordability and cost-of-living are pressing issues that impact nearly every community. By helping people find the lowest prices, the app directly improves financial accessibility and reduces unnecessary spending. It is also practical to implement with available APIs, has clear usability for the community, and creates a meaningful social impact by making everyday goods more affordable.

# Extra Credit (Only do this if you are done with Idea Finalization)

## Database Design

**Q1: What database are you using for your project (SQLite, PostgreSQL, noSQL, MongoDB,...), and why do you choose it?**

We will be usiing SQLite as we are more comfortable using this after taking CS341. Also if we end up using API we may not have to use SQL for all the data.

**Q2: How will database be helpful to your project? How will you design your database to support your application features?**

Databases will be helpful for our project because it will help store all of the data so we can half quick access to it. However if we end up using alot of API's from stores we might not need databases.

## Third-Party API Integration

**Q3: Which third-party API(s) will you integrate into your project? What data will you pull from the API(s), and how will you use it in your application?**
We will integrate product and pricing APIs from major online retailers and affiliate networks. Some candidates include:

Amazon Product Advertising API – provides product details, prices, and availability.

Walmart Product Lookup API – allows search for items sold in Walmart stores and online.

Best Buy API – returns product catalog data including prices, availability, and reviews.

Target API / Web Scraping with SerpApi – for Target store products if a public API is unavailable.

PriceRunner / PriceSpider APIs (optional) – meta price-comparison services that aggregate multiple retailers.

Data we will pull:

Product names, prices, and discounts.

Store/retailer availability (in stock / out of stock).

Links to product pages for purchase.

Optional: shipping cost and delivery time (if provided).

Usage in the app:

When a user searches for a product, the app queries multiple APIs.

Results are aggregated, normalized, and sorted by lowest total price (including shipping, when possible).

Users can filter by online vs in-store availability.

Clicking on a result redirects to the retailer’s product page.


**Q4: Does your API key has limitations such as rate limits or downtime? How are you going to deal with that?**

Yes — most product APIs have rate limits, quota restrictions, or occasional downtime. For example:

Amazon PA API limits the number of requests per day

Walmart and Best Buy APIs may restrict requests per second

APIs can also experience downtime or return incomplete data.

Our approach to handling these limitations:

Caching Layer: Store frequent queries (e.g., popular products) in our database to reduce repeated API calls.

Request Throttling: Implement rate-limit handling by queuing requests and retrying with exponential backoff.

Fallbacks: If one API is unavailable, show results from the others so the user still gets useful comparisons.

API Key Management: Use multiple keys if allowed, and monitor usage with logging to avoid hitting limits.

Graceful Errors: If APIs fail, display a friendly message (“Some results may be missing, try again later”) instead of breaking the app.

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

