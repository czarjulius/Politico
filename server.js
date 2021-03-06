import express from 'express';
import router from './server/routes/index';

const app = express();
app.use(express.json());
app.use(router);

app.use('*', (req, res) => res.status(404).json({
  status: 'failed',
  message: 'route not found',
}));

app.get('/', (req, res) => {
  res.send(' Julius Welcome\'s you to Politico');
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Listening on port ${port}`); });

export default app;
