const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // Choose any port you prefer

app.use(express.json()); // Parse incoming JSON requests

app.post('/', (req, res) => {
  const requestBody = JSON.stringify(req.body, null, 2); // Convert request body to JSON string

  // Write request body to a file named 'requestBody.txt'
  fs.appendFile('./fs/requestBody.txt', `${requestBody}\n`, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Error writing file');
    } else {
      console.log('Request body saved to requestBody.txt');
      res.status(200).send('Request body saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 