/* eslint-disable no-console */
import app from './app';
import 'dotenv/config';

app.listen(3333, () => {
  console.log(`🚀 Server started on port 3333!`);
});
