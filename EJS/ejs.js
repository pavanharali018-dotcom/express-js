// //Templating
// ## Templating & EJS

// - **Templating:** Using one reusable HTML template and inserting different data for different users.
// - **EJS (Embedded JavaScript):** A templating engine that allows JavaScript values to be inserted into HTML.
// - **`<%= username %>`:** Outputs the value of the `username` variable into the HTML.
// - **Install EJS:** `npm install ejs`
// - **Configure EJS in Express:**
//   ```js
//   app.set("view engine", "ejs");
//   ```
// - **`res.render()`:** Used to render an EJS template and send the generated HTML to the browser. We'll learn how to use it next.

const express = require("express");
const app = express();
const path = require("path");

const port=3000;
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

// app.get("/",(req,res)=>{
//     let names=["Vasant","Sanjay","Ritesh","Samrudh","Likeeth","Amit"];

//     res.render("home",{
//         username:"Pavan",
//         age:14,
//         names:names
//     });
// });

// app.get("/rolldice",(req,res)=>{
//     let dicevalue = Math.floor(Math.random()*6+1);
//     res.render("rolldice",{num:dicevalue});
// })



// Notes:
// ## EJS Variables, Conditions & Loops

// ### 1. Passing data to EJS
// Use `res.render()` to pass data from Express to an EJS template.

// ```js
// res.render("home", {
//     username: "Pavan",
//     age: 19,
//     names: ["Rahul", "Amit", "Sam"]
// });
// ```

// ### 2. Displaying values
// - `<%= username %>` — evaluates and displays a value.
// - `<% ... %>` — executes JavaScript without directly displaying its result.

// ```ejs
// <h1>Welcome, <%= username %>!</h1>
// ```

// ### 3. Conditions in EJS
// Use JavaScript conditions inside `<% %>` tags.

// ```ejs
// <% if (age >= 18) { %>
//     <p>You can vote!</p>
// <% } else { %>
//     <p>You cannot vote yet.</p>
// <% } %>
// ```

// ### 4. Loops in EJS
// Use loops to display repeated content from arrays.

// ```ejs
// <% names.forEach((name) => { %>
//     <p><%= name %></p>
// <% }); %>
// ```

// - `forEach()` runs once for each array element.
// - `<% %>` runs the loop logic.
// - `<%= name %>` displays each name.

// ### 5. Understanding EJS tags
// - `<%` — starts an EJS code block.
// - `%>` — ends the EJS tag, not necessarily the JavaScript block.
// - `{` — opens a JavaScript block.
// - `}` — closes a JavaScript block.

// **Important:** All data passed to `res.render()` should be inside one data object.

//creating instagram template for different usernames
// app.get("/ig/:username",(req,res)=>{
//     let { username } = req.params;
    
//     const instaData = require("./data.json");
//     const data = instaData[username];
//     if(data){
//         res.render("instagram",{data});
//     }
//     else{
//         res.render("error");
//     }
  
   
// });


//include() method:
// ## EJS `include()` Method

// - **Purpose:** Reuses one EJS template inside another template, avoiding duplicate code.
// - Commonly used for shared components like headers, footers, and navigation bars.
// - **Syntax:**
//   ```ejs
//   <%- include("includes/head.ejs") %>
//   ```
// - Create reusable EJS files inside the `views` folder, for example `views/includes/head.ejs`.
// - **Important:** Use `<%- %>` to include rendered HTML without escaping it. Using `<%= %>` would escape the HTML instead.

// **Benefit:** Write common HTML once and reuse it across multiple pages.

// app.get("/",(req,res)=>{
//      res.sendFile(
//         path.join(__dirname, "../Miscellaneous/Frontend/index.html")
//     );
   
// });

// app.get("/register", (req, res) => {
//     const { username, pass } = req.query;

//     console.log(username);
//     console.log(pass);

//     res.send(`Welcome, ${username}!`);
// });

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});