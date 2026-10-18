// const express=require("express");
// const app = express();
// const port=3000;
// app.get("/contact",(req,res)=>{
//     res.send("hello from contact server!");
// });
// app.listen(port,()=>{
//     console.log(`server is running at port:${port}`);
// });

//express middleware
// const express = require("express");
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//     console.log("Someone visited my website!");
//     next();
// });

// // Route
// app.get("/", (req, res) => {
//     res.send("Welcome to my website!");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });



// ## Express Middleware

// - **Middleware:** A function that runs during the request-response cycle.
// - **`app.use()`**: Registers middleware in an Express application.
// - **`req`**: Contains information about the incoming request.
// - **`res`**: Used to send a response to the client.
// - **`next()`**: Passes control to the next middleware or matching route.
// - **Order matters:** Middleware generally runs in the order it is registered.
// - **`res.send()`**: Sends a response to the client.
// - **`return res.send()`**: Sends a response and exits the current function.
// - **Important:** Don't call `next()` after sending a response unless you specifically intend to pass control onward; doing so can cause errors.

// ### Example

// ```js
// app.use((req, res, next) => {
//     console.log("Request received");
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Welcome!");
// });
// ```

// **Flow:** Request → Middleware → `next()` → Route → Response.

// **Common uses:** Logging requests, authentication, processing request data, and security checks.