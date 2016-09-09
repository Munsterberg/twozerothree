import app from './app';

app.listen(3000, () => {
  console.log('Server on!');
});

process.on('uncaughtException', err => console.error('uncaught exception:', err));
process.on('unhandledRejection', error => console.log('unhandled rejection:', error));
