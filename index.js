const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Savanna</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background: pink;
          color: #333;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.2rem;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to Savanna</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
