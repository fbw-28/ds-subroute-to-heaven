const express = require('express');
const app = express();

// After server started, visit http://localhost:5000 in a browser to see the output.
app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

app.use(express.json()) // parse incoming bodies... we can access then the data in req.body everywhere