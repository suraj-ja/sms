const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err, err.message);
    process.exit(1);
});


dotenv.config({ path: './config.env' });
const PORT = process.env.PORT










const server = app.listen(PORT, () => {
    console.log('server started on the port =>' + PORT,)
})

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting sssssdown...');
    console.log(err, err.message);
    server.close(() => {
      process.exit(1);
    });
  });