const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const route = require('./src/routes');

app.use('/api', route);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
