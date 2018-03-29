const path = require("path");
const Express = require("express");
const favicon = require("favicon");
const httpProxy = require("http-proxy");
const compression = require("compression");
const connectHistoryApiFallback = require("connect-history-api-fallback");

const app = new Express();
const port = process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:3003);

// app.use('/api',(req,res)=>{
//     proxy.web(req,res,{target:targetUrl})
// });


app.use('/', connectHistoryApiFallback());
app.use('/',Express.static(path.join(__dirname,"..",'public')));
// app.use('/',Express.static(path.join(__dirname,"..",'static')));

// const targetUrl = `http://${config.apiHost}:${config.apiPort}`;
// const proxy = httpProxy.createProxyServer({
//     target:targetUrl
// });

app.use(compression());
// app.use(favicon(path.join(__dirname,'..','static','favicon.ico')));

app.listen(port,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log(`===>open http://127.0.0.1:${port} in a browser to view the app`);
    }
});