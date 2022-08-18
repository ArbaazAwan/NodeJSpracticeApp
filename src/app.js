const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

//paths
const publicDir = path.join(__dirname,"../public");
const viewsDir = path.join(__dirname,'../pages/views');
const partialDir = path.join(__dirname,'../pages/partials');

//setting up our app 
app.set('view engine','hbs');
app.set('views',viewsDir);
hbs.registerPartials(partialDir);

//using static pages
app.use(express.static(publicDir));

//root address
app.get("",(req,res)=>{ 
    res.render('index.hbs',{
        title:'Home Page'
    })
});

//about page
app.get("/about",(req,res)=>{  
    // res.send([
    //     {
    //         name:'arbaaz',
    //         age:25
    //     },
    //     {
    //         name:'mohsin',
    //         age:24
    //     },
    //     {
    //         name:'ahmad',
    //         age:24
    //     }
    // ]);
    res.render('about.hbs',{
        title:'About Page'
    });
});

//product page
app.get("/product",(req,res)=>{  
    // res.send("hello from privacy page!");

//    res.render('product.hbs',{
//         title:'Privacy Page'
//     });

    if(!req.query.search)
    {
       return res.send(`<h2>Must provide the search term</h2>`);
    }
    res.send(`<h2>search result for ${req.query.search}:</h2>`);
});

//404 page for sub page
app.get("/about/*",(req,res)=>{
    res.send('about 404');
});

//404 Page
app.get("*",(req,res)=>{
    res.render('404page.hbs');
});

//setting port and displaying message in terminal
app.listen(port,()=>{
    console.log(`server is running on prot ${port}`);
});