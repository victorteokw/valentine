const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

const index = path.join(__dirname, 'dist/index.html');
const appFile = fs.readFileSync(index).toString();

app.use(async (ctx, next) => {
  console.log(ctx.request.method + " " + ctx.request.path);
  await next();
});

app.use(serve(path.join(__dirname, '/dist')));

app.use((ctx) => {
  ctx.body = appFile;
});

app.listen(4200);
console.log("Listening on port 4200...");
