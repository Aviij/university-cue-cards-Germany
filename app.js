const express = require('express');
const app = express();

// Use the environment port or default to 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Merry Christmas!</title>
  <style>
    body {
      background-color: #1A4300; /* Dark green */
      color: #FFF2CC; /* Off-white */
      text-align: center;
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-image: url('https://raw.githubusercontent.com/aws-samples/aws-elastic-beanstalk-express-js-sample/master/chritsmas_korea');
        background-repeat: no-repeat;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px #000; /* Add a text shadow */
    }
    p {
      font-size: 1.2em;
       text-shadow: 1px 1px 2px #000;
    }
    
     button {
      padding: 10px 20px;
      font-size: 16px;
      margin-top: 20px;
      cursor: pointer;
      background-color: #ffffff;
      color: #1A4300;
      border: none;
      border-radius: 5px;
    }
    button:hover {
      background-color: #f2f2f2;
    }

    .snowflakes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
        display:none;
  }
  
  .snowflake {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: fall linear infinite;
  }
  
  .snowflake:nth-child(1) {
    left: 10%;
    animation-duration: 10s;
  }
  
  .snowflake:nth-child(2) {
    left: 20%;
    animation-duration: 15s;
    animation-delay: 2s;
  }
  
  .snowflake:nth-child(3) {
    left: 30%;
    animation-duration: 12s;
    animation-delay: -1s;
  }
  
  .snowflake:nth-child(4) {
    left: 40%;
    animation-duration: 18s;
    animation-delay: 1s;
  }
  
  .snowflake:nth-child(5) {
    left: 50%;
    animation-duration: 14s;
    animation-delay: 3s;
  }
  
  .snowflake:nth-child(6) {
    left: 60%;
    animation-duration: 17s;
    animation-delay: -2s;
  }
  
  .snowflake:nth-child(7) {
    left: 75%;
    animation-duration: 11s;
    animation-delay: 2s;
  }
  
  .snowflake:nth-child(8) {
    left: 90%;
    animation-duration: 15s;
    animation-delay: -3s;
  }
  
  @keyframes fall {
    0% {
      top: -10px;
    }
    100% {
      top: 100vh;
    }
  }
  </style>
</head>
<body>
  <h1>Merry Christmas!</h1>
  <p>Happy Holidays from your Cloud Server!</p>
  <button onclick="toggleSnow()">Let it Snow!</button>
  <div class="snowflakes" aria-hidden="true">
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
                    <div class="snowflake"></div>
    </div>
  <script>
      function toggleSnow() {
          const snowflakes = document.querySelector('.snowflakes');
           if (snowflakes.style.display === 'none' || snowflakes.style.display === '') {
            snowflakes.style.display = 'block';
            document.querySelector('button').innerText="Stop the Snow!"
        } else {
            snowflakes.style.display = 'none';
            document.querySelector('button').innerText="Let it Snow!"
        }
      }
    
  </script>
</body>
</html>
`));

app.listen(port, () => {
  console.log(`Christmas app running on port ${port}`);
});
