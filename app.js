const express = require('express');
var cors = require('cors');
const mysql = require('mysql');


// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        //throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const bodyParser = require('body-parser');
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});



// Insert post 2
app.get('/addpost2', (req, res) => {
    console.log(req.body);
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

app.post('/register', (req, res) => {
    var user=req.body.user;
    var password=req.body.password;
    console.log(req.body);
    let sql = 'INSERT INTO user SET ?';
    let query = db.query(sql, req.body, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});


// Select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(JSON.stringify(results));
    });
});



// Select single post
app.get('/getpost/1', (req, res) => {
    let sql = `SELECT * FROM user WHERE username = "aihu03"`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


// Select single post
app.post('/login', (req, res) => {
    console.log(req.body);


    let sql = `SELECT * FROM user WHERE username = `+mysql.escape(req.body.username)+` `;
    let query = db.query(sql, (err, result) => {
        if(err) res.send({error:true,message:'Database Error User'});
        //console.log(result[0].password);
        //console.log(req.body.password);
        let user=result[0].username;
        if(result.length > 0 && result[0].password==(req.body.password)){
            res.send({error:false,message:'Login Success',user});
        }
        else{
            res.send({error:true,message:'Invalid User'});
        }
    });
});

app.post('/search', (req, res) => {
    console.log(req.body);


    let sql = `SELECT * FROM books WHERE bookname = `+mysql.escape(req.body.searchvalue)+``;
    let query = db.query(sql, (err, result) => {
        if(err) res.send({error:true,message:'Database Error User'});
        else
        {
        //console.log(result[0].password);
        //console.log(req.body.password);
        let id=result[0].bookid;
        if(result.length > 0 ){
          res.send({error:false,message:'Found',id});
        }
        //else{
          //  res.send({error:true,message:'Invalid User'});
        //}
    }});
});
app.post('/details', (req, res) => {
   // console.log(req.body);


    let sql = `SELECT * FROM user WHERE username = `+mysql.escape(req.body.user) ;
    let query = db.query(sql, (err, result) => {
        //console.log(result);
        res.send(JSON.stringify(result));
       
        
    });
});
app.post('/getbook', (req, res) => {
    //console.log(req.body.id);


    let sql = `SELECT * FROM books WHERE bookid = `+mysql.escape(req.body.id) ;
    let query = db.query(sql, (err, result) => {
        if (err)
        {
            res.send({error:true});
        }
        console.log(result);
        res.send(JSON.stringify(result));
        
    });
});


app.post('/process', (req, res) => {
    //console.log(req.body.id);


    let sql = `SELECT * FROM process WHERE owner = `+mysql.escape(req.body.name) ;
    let query = db.query(sql, (err, result) => {
        if (err)
        {
            res.send({error:true});
        }
        console.log(result);
        let pid=result[0].pid;
        let bid=result[0].bookid;
        let status=result[0].status;
        let owner=result[0].owner;
        let user=result[0].user;
        res.send({pid,bid,status,owner,user});
        
    });
});






app.post('/register', (req, res) => {
    console.log(req.body);


    let sql ="INSERT INTO user(`fname`,`lname`,`email`,`address`,`username`,`password`)VALUES('"+mysql.escape(req.body.fname)+"','"+mysql.escape(req.body.lname)+"','"+mysql.escape(req.body.email)+"','"+mysql.escape(req.body.address)+"','"+mysql.escape(req.body.username)+"', '"+mysql.escape(req.body.password)+"')";
    /*var values=[
        [
            +mysql.escape(req.body.fname),+mysql.escape(req.body.lname),+mysql.escape(req.body.email),+mysql.escape(req.body.address),+mysql.escape(req.body.username),+mysql.escape(req.body.password)
        ]
    ];*/
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        //console.log(result);
        let id=req.body.username;
        res.send({id});
    });
});

app.post('/donate', (req, res) => {
    console.log(req.body);
let sql ="INSERT INTO books(`bookname`,`author`,`version`,`publisher`,`username`)VALUES("+mysql.escape(req.body.bookname)+","+mysql.escape(req.body.author)+","+mysql.escape(req.body.version)+","+mysql.escape(req.body.publisher)+","+mysql.escape(req.body.username)+")";
    /*var values=[
        [
            +mysql.escape(req.body.fname),+mysql.escape(req.body.lname),+mysql.escape(req.body.email),+mysql.escape(req.body.address),+mysql.escape(req.body.username),+mysql.escape(req.body.password)
        ]
    ];*/
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/request', (req, res) => {
    console.log(req.body);


    let sql ="INSERT INTO process(`bookid`,`owner`,`user`)VALUES("+mysql.escape(req.body.bookid)+","+mysql.escape(req.body.owner)+","+mysql.escape(req.body.user)+")";
    /*var values=[
        [
            +mysql.escape(req.body.fname),+mysql.escape(req.body.lname),+mysql.escape(req.body.email),+mysql.escape(req.body.address),+mysql.escape(req.body.username),+mysql.escape(req.body.password)
        ]
    ];*/
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.post('/decline', (req, res) => {
    console.log(req.body);


    let sql =  `UPDATE process set status="declined" where pid=`+mysql.escape(req.body.pid);
    /*var values=[
        [
            +mysql.escape(req.body.fname),+mysql.escape(req.body.lname),+mysql.escape(req.body.email),+mysql.escape(req.body.address),+mysql.escape(req.body.username),+mysql.escape(req.body.password)
        ]
    ];*/
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/accept', (req, res) => {
    console.log(req.body);


    let sql =  `UPDATE process set status="accepted" where pid=`+mysql.escape(req.body.pid);
    /*var values=[
        [
            +mysql.escape(req.body.fname),+mysql.escape(req.body.lname),+mysql.escape(req.body.email),+mysql.escape(req.body.address),+mysql.escape(req.body.username),+mysql.escape(req.body.password)
        ]
    ];*/
    let query = db.query(sql,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});