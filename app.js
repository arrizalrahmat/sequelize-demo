const express = require('express');
const app = express();
const port = 3000;
const studenRouter = require('./routes/studentRoute');
const carRouter = require('./routes/carRoute');
const userRouter = require('./routes/userRoute');
const {
  authentication,
} = require('./middlewares/authentication');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

app.use(authentication);

app.use(studenRouter);
app.use(carRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
