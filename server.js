import {dirname} from 'path';
import path from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3500;

app.get(['/','/index{.html}'],(req,res)=> {
    // res.sendFile('./views/index.html',{root: __dirname});
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/new-page{.html}',(req,res)=> {
    // res.sendFile('./views/index.html',{root: __dirname});
    res.sendFile(path.join(__dirname,'views','new-page.html'));
});

app.get('/old-page.html',(req,res)=> {
    // res.sendFile('./views/index.html',{root: __dirname});
    res.redirect(301,'/new-page.html');// 302 by default
});

app.get('/*splat',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));