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

const port=3000;
app.set("view engine", "ejs");

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
});