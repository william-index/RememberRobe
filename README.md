## Pre-reqs
To run this you must have the following installed:
- node and npm
- ruby sass
- gulp


## Installation

- Clone the Repo
- Run ```npm i``` form within the repo


## Database Setup
The current system accounts for users and login with github.
This installation will require you to setup your own database however.

Eventually we can rely on a centralized one, but that has costs.


- Create an account at Firebase https://www.firebase.com/
- change the <your db-name> in public/src/includes/db.js.sample to your
  firebase app name, and remove the .sample extension
- Create a new Github Application: https://github.com/settings/applications
  - developer applications tab
  - register new application
  - set the homepage url to http://localhost:3000 for development
  - follow the instructions at the top of the page CAREFULLY for the callback
    url https://www.firebase.com/docs/web/guide/login/github.html
- Go to you firebase dashboard > Login & Auth > Github
  - check the Enable Github Authentication
  - enter the keys given when you created your github app
- Go to Security & Rules and change its contents to
  ```json
    {
      "rules": {
        "$uid" : {
          ".read": "auth !== null && auth.uid === $uid",
          ".write": "auth !== null && auth.uid === $uid"
        }
      }
    }
  ```

## Running the Application
- ```node start``` or ```nodemon``` which I prefer
- run ```gulp watch```
- view the site at http://localhost:3000


# Design Considerations

- Use material design icon fonts: https://www.google.com/design/icons/#ic_subject
