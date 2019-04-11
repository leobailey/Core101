const express = require('express');

const app = express();
const demoRouter = express.Router();
const port = process.env.PORT || 3000;

demoRouter.route('/demo')
.get((req, res) => {
  const response = { hello: 'This is my demo API'};
  res.json(response);
});

app.use('/api', demoRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my auto updating API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
