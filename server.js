const express = require('express'); // importing a CommonJS module
const helmet = require("helmet");
const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);
server.use('/api/hubs',hubsRouter);

server.use('/api/hubs', hubsRouter);
server.use("/api/hubs", balrog)

server.get('/', addName, (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

function logger(req, res, next){
  console.log(`A ${req.method} reuest to "${req.url}`);
  next();
}

function addName(req, res, next){
  console.log('\nameadded\n');
  req.name = 'web XIX';
  next();
}

function balrog(req, res, next){
res.status(401).json({message:"you shall not pass"});
}



module.exports = server;
