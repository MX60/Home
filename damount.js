  const exp = require('express');
  const app = express();
  let amount = 0;
  app.use(express.static('.'));
  app.get('/amount', (req, res) => res.send(`${amount++}`));
  app.listen(3000);
