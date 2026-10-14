# Express.js — Notes

## 1. What is Express.js?

- Express.js is a minimal and flexible web framework for Node.js.
- It is used for server-side programming and building backend applications.
- Express.js is available as a package through npm.
- It simplifies handling HTTP requests, routing, and sending responses.

## 2. Node.js vs Express.js vs npm

- **Node.js:** A JavaScript runtime that allows JavaScript to run outside the browser.
- **Express.js:** A web framework built on Node.js that simplifies backend development.
- **npm:** A package manager used to install and manage packages like Express.

## 3. Why do we use Express.js?

Node.js provides the built-in `http` module to create servers. Express.js makes common server-side tasks easier by providing a cleaner way to handle routes, requests, and responses.

## 4. Basic Express Concepts

- `express()` — creates an Express application.
- `app.get()` — handles HTTP GET requests for a specified route.
- `req` — represents the incoming request.
- `res` — represents the response sent by the server.
- `res.send()` — sends a response to the client.
- `app.listen()` — starts the server and makes it listen on a specified port.

## 5. Example: Handling a GET Request

```js
app.get("/home", (req, res) => {
    res.send("Welcome Home");
});
```

- `/home` is the route path.
- When a GET request reaches `/home`, the callback function executes.
- The server sends `Welcome Home` as the response.

## 6. Important Points to Remember

- Express.js runs on top of Node.js; it does not replace Node.js.
- A browser normally sends a GET request when you open a URL.
- A route defines how the server responds to a request for a particular path.
- Express makes server code cleaner and easier to maintain.


