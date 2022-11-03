const express = require('express')
const app = express()
const bodyParser = require('body-parser');
/*
branch testFeature
*/
const port = process.env.PORT || 3000


app.use(bodyParser.json());//Serve per parsare i body in formato json
app.use(bodyParser.urlencoded({ extended: true }));//Serve per parsare i body url-encoded

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello',(req,res)=>{  
    
    res.status(200).json({
        message:"Hello!!",
        body:{
            name: "Arvind",
            job: "AEM Expert"
        }      
    });   
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})