const express = require("express");

const app = express();

const port = 3000;

// Routes will be added here

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});