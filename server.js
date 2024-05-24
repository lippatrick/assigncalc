const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));


app.post("/add",(req, res) =>{
    const {a,b}= req.body;
    if (typeof a ==='number'&& typeof b ==='number'){
        const result = a+b;
        res.json({result});

    }else{
        res.status(400).json({error:"there was an error"});
    }
});

app.post("/multiply", (req,res)=>{
    const {a,b} = req.body;
    if (typeof a ==="number" && typeof b ==='number'){
        const result = a*b;
        res.json({result});
    }else{
        res.status(400).json({error: "there was an error"});
    }
});

const PORT = 3000;
app.listen(PORT,(req,res) =>{
    console.log(`Server is running on port ${PORT}`);

});

