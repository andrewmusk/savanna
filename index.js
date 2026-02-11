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
        .calculator {
          margin-top: 2rem;
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          width: 280px;
        }
        .display {
          width: 100%;
          background: #222;
          color: white;
          font-size: 1.8rem;
          text-align: right;
          padding: 0.75rem;
          border: none;
          border-radius: 8px;
          box-sizing: border-box;
          margin-bottom: 0.75rem;
        }
        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .buttons button {
          padding: 0.75rem;
          font-size: 1.2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: #e0e0e0;
          color: #333;
          transition: background 0.15s;
        }
        .buttons button:hover {
          background: #d0d0d0;
        }
        .buttons .op {
          background: #f5923e;
          color: white;
        }
        .buttons .op:hover {
          background: #e07e2a;
        }
        .buttons .eq {
          background: #4caf50;
          color: white;
        }
        .buttons .eq:hover {
          background: #43a047;
        }
        .buttons .clear {
          background: #ef5350;
          color: white;
        }
        .buttons .clear:hover {
          background: #e53935;
        }
        .buttons .span2 {
          grid-column: span 2;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to Savanna</p>
        <div class="calculator">
          <input type="text" class="display" id="display" readonly value="0">
          <div class="buttons">
            <button class="clear span2" onclick="clearDisplay()">C</button>
            <button onclick="appendChar('(')">(</button>
            <button onclick="appendChar(')')">)</button>
            <button onclick="appendChar('7')">7</button>
            <button onclick="appendChar('8')">8</button>
            <button onclick="appendChar('9')">9</button>
            <button class="op" onclick="appendChar('/')">/</button>
            <button onclick="appendChar('4')">4</button>
            <button onclick="appendChar('5')">5</button>
            <button onclick="appendChar('6')">6</button>
            <button class="op" onclick="appendChar('*')">*</button>
            <button onclick="appendChar('1')">1</button>
            <button onclick="appendChar('2')">2</button>
            <button onclick="appendChar('3')">3</button>
            <button class="op" onclick="appendChar('-')">-</button>
            <button onclick="appendChar('0')">0</button>
            <button onclick="appendChar('.')">.</button>
            <button class="eq" onclick="calculate()">=</button>
            <button class="op" onclick="appendChar('+')">+</button>
          </div>
        </div>
      </div>
      <script>
        let expression = '';
        const display = document.getElementById('display');

        function appendChar(ch) {
          if (expression === '0' && ch !== '.') expression = '';
          expression += ch;
          display.value = expression;
        }

        function clearDisplay() {
          expression = '';
          display.value = '0';
        }

        function calculate() {
          try {
            if (!/^[0-9+\\-*/.() ]+$/.test(expression)) {
              display.value = 'Error';
              return;
            }
            const result = Function('"use strict"; return (' + expression + ')')();
            display.value = result;
            expression = String(result);
          } catch {
            display.value = 'Error';
            expression = '';
          }
        }
      </script>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
