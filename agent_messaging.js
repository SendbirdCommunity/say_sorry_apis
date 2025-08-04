module.exports = agentErrorMapping = {
  400: {
    message: "Bad Request",
    userMessage: "Sorry, I couldn’t process your request to {action} the {resource}. It looks like the input wasn’t formatted correctly.",
    agentHint: "Let the user know it might be a formatting issue. If they want, offer to retry the {action} once they revise the input."
  },
  401: {
    message: "Unauthorized",
    userMessage: "Sorry, I wasn’t authorized to {action} the {resource}. You may need to sign in again.",
    agentHint: "Prompt the user to check authentication or sign in. Escalate if the resource should have been accessible."
  },
  403: {
    message: "Forbidden",
    userMessage: "Sorry, I wasn’t allowed to access {resource}. It seems like you don’t have permission.",
    agentHint: "Let the user know it’s a permissions issue. Offer to escalate or explore alternatives."
  },
  404: {
    message: "Not Found",
    userMessage: "Sorry, I couldn’t find the {resource} while trying to {action}. Maybe it’s been moved or deleted.",
    agentHint: "Offer to check spelling, explore similar resources, or try a new search."
  },
  408: {
    message: "Request Timeout",
    userMessage: "Trying to {action} the {resource} took too long. Sorry about that.",
    agentHint: "Let the user know the system didn’t respond in time. Ask if they’d like to retry."
  },
  429: {
    message: "Too Many Requests",
    userMessage: "I’ve hit a rate limit while trying to {action} the {resource}. Let’s wait a bit before trying again.",
    agentHint: "Explain the system is throttling requests. Ask the user if they’d like to retry after {waitTime} seconds."
  },
  500: {
    message: "Internal Server Error",
    userMessage: "Something went wrong while I was trying to {action} the {resource}. That’s on our side — sorry about that.",
    agentHint: "Let the user know it’s a backend issue. Offer to retry if they want or escalate if it keeps failing."
  },
  502: {
    message: "Bad Gateway",
    userMessage: "I ran into a hiccup while trying to {action} the {resource}. A system in the middle didn’t respond properly.",
    agentHint: "Be transparent about the upstream failure. Ask if they’d like to try again."
  },
  503: {
    message: "Service Unavailable",
    userMessage: "I couldn’t {action} the {resource} because the system’s temporarily offline. Sorry for the interruption.",
    agentHint: "Let the user know the service is down. Offer to retry or notify later. If you can, mention a {retryAfter}-second wait."
  },
  504: {
    message: "Gateway Timeout",
    userMessage: "The system didn’t respond in time while I was trying to {action} the {resource}. Sorry for the delay.",
    agentHint: "Tell the user it was a timeout and ask if they want to try again or switch paths."
  }
};
