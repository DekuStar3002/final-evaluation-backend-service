const express = require('express');

const app = express();
app.use(express.json());

const route = require('./src/routes');

app.use('/api', route);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
