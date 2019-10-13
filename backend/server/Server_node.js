import express from 'express';
import cors from 'cors';
import graphQLServer from './Server_graphql';
import startMsg from '../config/startMsg';
// Import Environmental Variables
import '../config/env';

const app = express();
// const dev = process.env.NODE_ENV === 'development';
const port = parseInt(process.env.PORT) || 4000;
const path = '/';
const corsOptions = {
  origin: `${process.env.FRONTEND_URL}`,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

graphQLServer().applyMiddleware({
  app,
  path,
  cors: corsOptions,
});

app.listen(port, err => {
  if (err) {
    console.error(
      '🚨  An error occurred on the backend server. Unable to start the backend server.'
    );
    console.error(err.stack);
    process.exit(1);
    throw err;
  }

  console.log(startMsg(port));
});
