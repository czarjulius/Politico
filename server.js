import express from 'express';
import cors from 'cors';
import router from './server/routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

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
