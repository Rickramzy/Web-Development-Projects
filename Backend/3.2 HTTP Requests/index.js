import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('<h1>Hello World</h1>');
});

  app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1><p>My name is Raphael.</p>');
    });

    app.get('/contact', (req, res) => {
      res.send('<h1>Contact Me</h1><p>Email: +2348104561073</p>');
      });

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});
