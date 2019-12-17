//requiring node modules
const PORT = 3001;

const express = require('express');
const mysql = require('mysql');
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "Cscp02!!",
    database: "practice_form"
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//allows us to keep our routes neat in a separate file 
app.get('/api/contacts', (req, res) => {
    con.query('SELECT * FROM contacts', (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.post('/api/newcontacts', (req, res) => {   
    con.query('INSERT INTO contacts SET ?', req.body, (err, result) => {
        if(err) throw err;
        res.status(201).send(`User added with ID: ${result.insertId}`)
    })
})

//app listen
app.listen(PORT, () => console.log('here we are live from port 3002'))