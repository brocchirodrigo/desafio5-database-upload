/* eslint-disable no-console */
import app from './app';
import 'dotenv/config';

app.listen(process.env.API_PORT || 3333, () => {
  console.log(`🚀 Server started on port ${process.env.API_PORT || 3333}!`);
});
