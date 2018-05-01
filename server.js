const superagent = require('superagent');
const Koa = require('koa');
const app = new Koa();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

console.log();

app.listen(PORT, `listening on PORT ${PORT}`);
