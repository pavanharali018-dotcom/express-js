const express=require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// const port=3000;
// app.get("/contact",(req,res)=>{
//     res.send("hello from contact server!");
// });
// app.listen(port,()=>{
//     console.log(`server is running at port:${port}`);
// });

//express middleware


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
//     res.send("Welcome bro!");
// });
// ```

// **Flow:** Request → Middleware → `next()` → Route → Response.

// **Common uses:** Logging requests, authentication, processing request data, and security checks.

// ### Middleware Order
// - Express executes middleware and routes in registration order.
// - Middleware placed before a route can run before it.
// - If a route sends a response without calling `next()`, later middleware won't run for that request.
// - Calling `next()` passes control to the next matching handler.


//conditional middleware

// Middleware
// app.use((req, res, next) => {
//     const hasID = false;

//     if (hasID) {
//         next(); // Allow the request to continue
//     } else {
//         res.send("Access denied! ID required.");
//     }
// });

// Route
// app.get("/", (req, res) => {
//     res.send("Welcome to the library!");
// });



// ### Conditional Middleware
// - Middleware can decide whether a request should continue.
// - If a condition is satisfied, call `next()`.
// - If access is denied, send a response using `res.send()` and don't call `next()`.
// - Example use: authentication and access control.

//express.json() middleware

// Middleware: parse incoming JSON
// app.use(express.json());

// POST route: receive student data
// app.post("/students", (req, res) => {
//     console.log(req.body);

//     res.send("Student data received!");
// });

//express.urlencoded()
// Parse URL-encoded form bodies
// app.use(express.urlencoded({ extended: true }));

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.send("Form received!");
// });

// express.urlencoded() creates middleware for parsing URL-encoded form bodies.
// { extended: true } allows richer form data, including nested objects, to be parsed.

// ### Built-in Body-Parsing Middleware

// - `express.json()` parses incoming JSON request bodies.
// - `express.urlencoded({ extended: true })` parses URL-encoded form bodies.
// - Both make parsed data available through `req.body`.
// - Register them before routes that need to access `req.body`.
// - The request must use the appropriate content type.

// app.use(express.static("public"));

// ### `express.static()`
// - Built-in middleware used to serve static files such as HTML, CSS, images, and JavaScript.
// - `app.use(express.static("public"))` exposes files inside the `public` folder.
// - The `public` folder name is not included in the URL.
// - Subfolder paths are preserved in the URL.
// - Example: `public/images/profile.jpg` → `/images/profile.jpg`.
// - A request to `/` can serve `public/index.html` by default.

// app.use("/about",(req,res,next)=>{
//     console.log("Middleware 1:Checking college ID");
//     next();
// });

// app.use("/about",(req,res,next)=>{
//     console.log("Middleware 2:Checking college bag");
//     next();
// });


// Middleware: Passing Data Using req

// We can store custom data on the req object inside middleware.

// The next middleware or route handler can access that data using req.

// Call next() to pass control to the next matching handler.

// Middleware must be registered before the route that needs its data.

// app.use("/contact",(req,res,next)=>{
//     req.username="Pavan";
//     req.id="123";
//     next();
// });

// app.get("/contact",(req,res)=>{
//     res.send(`welcome to contact page ${req.username} ,ID:${req.id}`);
   
// });

// app.get("/about",(req,res)=>{
//     res.send("Welcome to College");
// });

// Important Notes
// req.username and req.id are custom properties; Express does not create them automatically.

// app.use("/contact", ...) matches paths beginning with /contact.

// res.send() sends the response and ends it. Do not call it twice for the same request.

// If middleware neither sends a response nor calls next(), the request may hang.

// Data attached to req is available during that request's processing; it is not permanent storage.

//Error Handling Middleware

// app.get("/error",(req,res,next)=>{
//     const err = new Error("Something went wrong");
//     next(err);
// });

// app.use((err,req,res,next)=>{
//     console.log(err.message);
//     res.status(500).send("Customer Error:Something went wrong");
//  });




// ## Error-Handling Middleware in Express.js

// - Error-handling middleware handles errors that occur during request processing.
// - It has **four parameters**: `err`, `req`, `res`, and `next`.
// - Express identifies error-handling middleware by its four-parameter signature.
// - `next(err)` passes an error to Express's error-handling flow.
// - `new Error("message")` creates an error object; it does not trigger the error handler by itself.
// - Register error-handling middleware **after routes and other middleware** so it can handle errors passed from them.
// - `err.message` accesses the error message.
// - `res.status(500)` sets the HTTP status to 500 (Internal Server Error).
// - If middleware neither sends a response nor calls `next()`, the request may hang.

// ### Example


// Route that triggers an error
// app.get("/error", (req, res, next) => {
//     const err = new Error("Something went wrong!");
//     next(err);
// });

// Error-handling middleware
// app.use((err,req,res,next)=>{
//     console.log(err.message);
//     res.status(500).send("Customer Error:Something went wrong");
// });


// Execution Flow

// 1. The client requests /error.
// 2. The route creates an error object.
// 3. next(err) passes the error to Express.
// 4. Express skips normal handlers and finds the next error-handling middleware.
// 5. The error handler logs the message and sends a response with status 500.

// ### Important HTTP Status Codes

// - 200 — OK (successful request).
// - 404 — Not Found (resource doesn't exist).
// - 500 — Internal Server Error.

// **Remember:** next() passes control normally, while next(err) passes an error to the error-handling flow.

//Path Parameters
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     let {username,id}=req.params;
//     res.send(`<h1>User: ${username} and ID:${id}</h1>`);
// });

// app.get("/products/:category/:productId", (req, res) => {
//     let { category, productId } = req.params;
//     res.send(`Category: ${category}, Product: ${productId}`);
// });

// ### Path Parameters in Express.js

// - Path parameters are dynamic values embedded in a URL.
// - Use `:` to define a parameter in a route.
// - Access parameter values using `req.params`.
// - Path parameter values are strings by default.
// - Useful for identifying specific resources, such as users, products, or tasks.

// ular product that the backend can fetch from a database.**Example:**

// ```js
// app.get("/products/:category/:id", (req, res) => {
//     const { category, id } = req.params;
//     res.send(`Category: ${category}, ID: ${id}`);
// });
// ```

// For `/products/electronics/42`:

// - `category` → `"electronics"`
// - `id` → `"42"`

// **Practical use:** `/products/42` identifies a partic

//Query Strings
// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send(`Category: ${req.query.category}`);
// });

// app.get("/products", (req, res) => {
//     console.log(req.query);
//     res.send(`Category: ${req.query.category}`);
// });

//default values

// app.get("/products",(req,res)=>{
//     const {category,brand}=req.query;
//     res.send(`Category:${category||"all"},Brand:${brand ||"any"}`);
// });

// ## Query Strings in Express.js

// - Query strings pass additional information through a URL after `?`.
// - Use `&` to separate multiple query parameters.
// - Access query parameters using `req.query`.
// - Query parameter values are strings by default.
// - If a parameter is missing, its value is `undefined`.
// - Use default values with `||` when needed.
// - Use destructuring to access multiple values easily.

// ### Example

// ```js
// app.get("/search", (req, res) => {
//     const { q, page } = req.query;
//     res.send(`Search: ${q}, Page: ${page}`);
// });
// ```

// URL: `/search?q=express&page=2`

// Output: `Search: express, Page: 2`

// ### Path Parameters vs Query Strings

// - Path parameter: `/products/42` → `req.params.id` (with a matching `:id` route).
// - Query string: `/products?id=42` → `req.query.id`.

// **Practical use:** Search pages, filtering products, sorting, and pagination.