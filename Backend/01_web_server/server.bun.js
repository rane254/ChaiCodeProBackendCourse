import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Welcome to the Bun Home page!", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("Welcome to Login page!", { status: 200 });
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  hostname: "128.0.0.1",
    port: 3000,
});
