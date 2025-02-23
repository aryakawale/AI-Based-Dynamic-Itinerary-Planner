document.getElementById("tripForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const budget = document.getElementById("budget").value;
    const interests = document.getElementById("interests").value;
    const style = document.getElementById("style").value;

    // Call the backend API
    const response = await fetch("http://localhost:5000/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ budget, interests, style })
    });

    const data = await response.json();
    document.getElementById("itinerary").innerHTML = data.itinerary || "No results found. Try different inputs.";
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

