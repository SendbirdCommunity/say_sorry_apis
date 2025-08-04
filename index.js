const express = require('express');
const agentErrorMapping = require("./agent_messaging");
const app = express();
const PORT = 3000;

// --- Dummy Endpoints Triggering Errors ---

app.get('/trigger400', (req, res, next) => {
    const err = new Error('Invalid input');
    err.status = 400;
    next(err);
});

app.get('/trigger503', (req, res, next) => {
    const err = new Error('Service temporarily unavailable');
    err.status = 503;
    next(err);
});

app.get('/trigger500', (req, res, next) => {
    const err = new Error('Something exploded in the backend');
    err.status = 500;
    next(err);
});

// --- Error Middleware for Enriching the Response ---

app.use((err, req, res, next) => {
    const status = err.status || 500;
    console.log(agentErrorMapping);
    const base = agentErrorMapping[status] || {};

    const enriched = {
        status,
        message: err.message || base.message || "Unexpected error",
        userMessage: base.userMessage || "Sorry, something went wrong.",
        agentHint: base.agentHint || "Agent should not retry automatically.",
        ...(base.suggestedWait ? { suggestedWait: base.suggestedWait } : {})
    };

    res.status(status).json(enriched);
});

// --- Start the Server ---

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
