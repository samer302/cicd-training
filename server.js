const express = require("express"); // Import Express.js
const app = express(); // Create an Express app
const PORT = process.env.PORT || 3000; // Use port from environment variables or 3000 by default

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, CI/CD!"); // Send a response when someone visits "/"
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

