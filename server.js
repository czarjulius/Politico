import express from 'express';
import router from './server/routes/index';

const app = express();
app.use(express.json());
app.use(router);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.get('/', (req, res) => {
  res.send(' Julius Welcome\'s you to Politico');
});

app.use('*', (req, res) => res.status(404).json({
  status: 'failed',
  message: 'route not found',
}));


const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Listening on port ${port}`); });

export default app;
