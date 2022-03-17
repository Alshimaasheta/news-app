const express=require('express')
const app=express()
const port=process.env.PORT || 3000

const request=require('request')

const Handlebars=require('Handlebars')
const news= 'https://newsapi.org/v2/everything?=Apple&from=2022-03-15&sortBy=popularity&apiKey=f266e13e5d2a4b35aa8986a56d445cc3'
  

const path = require('path')


app.set('view engine', 'hbs');

const viewsDirectory = path.join(__dirname,'../templates/views')
 app.set('views',viewsDirectory)

 const hbs = require('hbs')
 const partialsPath = path.join(__dirname,'../templates/partials')
 hbs.registerPartials(partialsPath)

 
const url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=f266e13e5d2a4b35aa8986a56d445cc3"


 request({url,json:true},(error,response)=>{
    
    app.get('/',(req,res)=>{

        res.render('index',{
            "articles":response.body.articles,
            "discribe":response.body.articles.description,
            "img":response.body.articles.urlToImage

        }
)
         
     })
 })


 





app.listen(port, () => {
    console.log('Server is running')
  })