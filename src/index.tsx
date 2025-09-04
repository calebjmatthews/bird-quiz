import { serve } from "bun";

import index from "./index.html";
import handleSpeech from "./data/handleSpeech";

const server = serve({
  websocket: { message: () => {} },

  routes: {
    "/speech": {
      POST: async (request) => handleSpeech(request)
    },
    
    // Serve index.html for all unmatched routes.
    "/*": index
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
