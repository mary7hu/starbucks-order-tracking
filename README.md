# Starbucks Order Tracking Webpage Prototype
## What is this project about?
One thing I really like about this project is that it is build upon a real user need that is discovered through observation instead of imagination. I spend 3 hours standing in a Starbucks store to observe the customer behaviors and I saw:
1. People tend to sit outside while waiting for their order (the store I observe is small so no seat inside), but they have to get back in once in a while to see if their order is ready because they can't hear the staff calling the name while sitting outside
2. Even for people who's standing in store to wait for their order, sometimes they will also go up to the pick-up location to check whether their order is ready - they are not sure whether they missed their name
3. People wearing earphones or chatting or on a call or doing other things are easy to miss their order

So the need I inferred from the observation is **user needs to know if their order is ready at any time**.

After setting the need I'm trying to address, it's time to brainstorm potential solutions. I forced myself to came up with 30 ideas in total by using different methods like Challenging Assumption, Mindmapping, Reverse Thinking, etc. This is to follow the double-diamond design process and attempt to gain quality out of quantity for design ideas. Out of these 30 ideas, I picked the one that I think is the best: **a online order tracking display screen**.

## Design Decisions

One difficulty I met when designing the system is how should the order disappear from the screen. This might seem like an easy question, but when I dive into it, it is impossible to know exactly when a user has picked up their specific order (without using some advance technology like visual recognition), and Starbucks is definitely not willing to hire another human to do this tracking. Therefore, the only realistic solution is to let the order disappear automatically after some time.

There are a lot of options here, but after user testing and me counting the number of customers in the Starbucks store, I decided to set the automatic disappear time to be 5 min. To accomodate for this, I also added a search bar at the top and the bottom where it can search among all past orders.

Another design decisions I made is to separate the ready order and the working on order, move orders that are ready to the top section so it's easier for customer to find and get notified.

## How is this project build?
This is a prototype for the online order tracking system I designed for Starbucks. It is a static page build via HTML, CSS, and JS. The Figma design can be accessed [here](https://www.figma.com/design/XKgaknUzKE5szEehrcnJPn/Starbucks-online-order-tracking?node-id=0-1&node-type=canvas&t=W76rioHDqllTWjsN-0), which also includes the design to add this order tracking function into the current Starbucks app.