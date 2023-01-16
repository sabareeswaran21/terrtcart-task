const express=require('express');
const fileupload=require('express-fileupload');
const cors=require('cors');
const bodyparser=require('body-parser');
const mycon=require('mysql');
const { response } = require('express');

const app=express();
app.use(express.json());
app.use(fileupload());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c=mycon.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"#Bsabaree1999",
    database:"category"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log(" database successfully connected");
    }
})

app.post('/Mcaetgory',(req,res)=>{
    let {category} = req.body;
    let sql = 'insert into main_category(category_name,status)values(?,?)';
    c.query(sql,[category,0],(error,result)=>{
        if(error){
            let s={"status":"error"}
            response.send(s);
        }
        else{
        let s={"status":"Data successfully inserted"}
        response.send(s);
        }
    })
})

app.get('/Mclist',(req,res)=>{
    let sql = 'select * from main_category';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.post('/Sinsert',(req,res)=>{
    let {main_category,sub_category,sub_category_type} = req.body;
    let sql = 'select * from main_category where id=?';
    let mcategory_id = '';
    c.query(sql,[main_category],(error,result)=>{
        mcategory_id = result[0].category;
    })

    let sql1 = 'insert into sub_category(main_category_id,main_category_name,sub_category_type,sub_category_name,status)values(?,?,?,?,?)';
    c.query(sql1,[mcategory_id,main_category,sub_category_type,sub_category,0],(error1,result1)=>{
        if(error1){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Insert"};
            response.send(s);
        }
    })

})
    app.listen(3002,()=>{
    console.log('server running port:3002');
})