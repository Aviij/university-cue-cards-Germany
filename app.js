const express = require('express');
const app = express();

// Use the environment port or default to 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Helloooooooo AWS</title>
  <style>
    body {
      background-color: #3498db; /* Initial background color */
      color: white;
      text-align: center;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    h1 {
      margin-top: 20%;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
      background-color: #ffffff;
      color: #3498db;
      border: none;
      border-radius: 5px;
    }
    button:hover {
      background-color: #ecf0f1;
    }
  </style>
</head>
<body>
  <h1>Hello Cloud Computing! Welcome to AWS</h1>
  <button onclick="changeBackgroundColor()">Change Background Color</button>
  <script>
    function changeBackgroundColor() {
      // Array of colors to cycle through
      const colors = ['#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];
      // Select a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      // Change the body's background color
      document.body.style.backgroundColor = randomColor;
    }
  </script>
</body>
</html>
`));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
