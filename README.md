# Zync Post-It Notes Sandbox

## Getting Started

### Install Dependencies

```
npm install
```

### Start Mock API Server and Website

```
npm start
```

Navigate to the Notes page at `localhost:3000/notes/`

## Mock API

Running `npm start` will simulataneously start a mock API server at `localhost:3001`. This server servers data initialized from `/tools/mockData.js`. The website interacts with the mock API server.

## Adding Notes

Adding a note using the form will add to the list as the `loggedInUser`.
To simulate adding a note for another user, make a call to the mock API server like this:

```js
POST /notes HTTP/1.1
Host: localhost:3001
Content-Type: application/json

  {
  	"userId":"user1@zync.com",
    "title": "My great idea",
    "text": "My idea is great because it's a great idea!"
  }
```
