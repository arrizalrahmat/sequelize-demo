const express = require('express');
const app = express();
const port = 3000;
const studenRouter = require('./routes/studentRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(studenRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
