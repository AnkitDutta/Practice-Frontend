const express = require('express');
const app = express();

const PORT = 5000


app.get('/', (req, res) => {
  res.send("BANKAI!")
})

app.listen(PORT, () => {
  console.log(`Server started on port bankai: ${PORT} `);
});
