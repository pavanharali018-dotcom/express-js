const express=require("express");
const app = express();
const port=3000;
app.get("/contact",(req,res)=>{
    res.send("hello from contact server!");
});
app.listen(port,()=>{
    console.log(`server is running at port:${port}`);
});

3.// handling requests
// ## 7. `app.use()` vs `app.get()`

// ### `app.use()`
// - Used to register middleware in an Express application.
// - Middleware can execute code, access `req` and `res`, modify them, send a response, or call `next()`.
// - By default, it can run for requests using any HTTP method.
// - Common uses: logging, authentication, parsing request bodies, and security checks.
// - Without a path, it applies to all request paths.

// ### `app.get()`
// - Used to handle HTTP GET requests for a specific route.
// - Commonly used to retrieve or display pages and data.
// - Example: `app.get("/about", ...)` handles GET requests matching `/about`.

// ### Example

// ```js
// // Middleware: runs before matching routes when registered first
// app.use((req, res, next) => {
//     console.log("Request received");
//     next(); // Pass control to the next middleware or route
// });

// // Route handler: handles GET requests to /about
// app.get("/about", (req, res) => {
//     res.send("About page");
// });
// ```

// ### Main Difference
// - `app.use()` registers middleware.
// - `app.get()` handles GET requests for a particular route.
// - Middleware registered before a route usually runs before that route.
// - `next()` passes control forward; without sending a response or calling `next()`, a middleware can leave the request hanging.