const express = require('express');
const bodyParser = require('body-parser');
const path=  require('path');

const app = express();
const port = 5000;

let users = [
    {
        name:"Abhishek Gupta",
        email:"abhishek@gmail.com",
        password:'1234'
    }
]

console.log("done");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,  'client/build', 'index.html'));
});

app.post('/user/login',(req,res)=>{
    let r = req.body;

    // authenciate user

    let user = users.find(user=>{ return user.email === r.email && user.password === r.password});

    if(user){
        res.send(user);
    }else{
        res.send(false);
    }

});



app.listen(port, () => console.log(`Server listening on port ${port}!`))