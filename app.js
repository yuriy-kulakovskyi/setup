const fs = require('fs');

fs.writeFileSync('index.html', 
`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="wrapper" id="wrapper">

  </div>
  <script src="main.js"></script>
</body>
</html>
`);

fs.writeFileSync('style.css', 
`* {
  padding: 0; margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  outline: none; overflow: hidden;
}
`)

fs.writeFileSync('main.js', '');