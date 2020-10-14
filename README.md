# DataServer - Exercise

## Show me the subroute to heaven...

  - Refactor the given list of routes into subroutes
    - Create a folder "routes"
    - Create a separate router file for todos, skills, users (so three routers in total)
    - Export the routers together with the arrays into these files
    - Import the routers in your server.js file

  - Testing
    - Do REST calls from your RESTED or POSTMAN client to test if all routes are working

  - Bonus: Outsource route handlers into controllers
    - Create three controllers: one each for todos, skills and users
    - Test your REST calls one more time

  - Bonus: Add storing of data with LowDB 
    
    - Setup a lowdb connection to a file "db.json" 
      - Google "lowdb github" & check the documentation in the Repo how to set it up
      - Put your three "hardcoded" arrays as defaults into LowDB (use `db.defaults()` command for that - check the documentation on that again)
    
    - Replace the hardcoded responses in the controllers by LowDB queries to your JSON file
    
    - Test your routes again via REST / POSTMAN: 
      - Is the data still correctly stored / updated in your JSON file?
  
Congratulations! 

If you made that work, you are now close to master routing and the most fundamental concept of every backend.
