import express from 'express';
import router from './server/routes';

const app = express();
app.use(express.json());
app.use('/api/v1/', router);

app.use('*', (req, res) => {
  return res.status(404).json({
    status: 'failed',
    message: 'route not found',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Listening on port ${port}`); });

export default app;
