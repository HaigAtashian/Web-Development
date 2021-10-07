# Web-Development
Simple API Request Using Vue JS


This project is a web client application using Vue JS that makes a request every second to an API.
This API returns six usernames and a random number(between 0 and 100) associated to each one.
When the data is returned it is parsed and displayed in web page(index).



The database is db.json file.
API is created using json-server 
-first installing it 
              npm install -g json-server
-then making server-json watch the database file db.json 
              npx json-server --watch db.json
-then using the endpoint given
              http://localhost:3000/users
              
