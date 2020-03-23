import * as express from 'express';
import * as http from 'http'
import * as bodyParser from 'body-parser'
import '../config/config';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }))

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json({ ok: true })
})

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Listener Port: ${process.env.PORT}`);
});
