console.log("SERVER DOSYASI OKUNDU");

const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());


// HTML PANEL
app.use(express.static(__dirname));


// ANA SAYFA
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});


// TEST
app.get("/test",(req,res)=>{
    res.send("TEST ÇALIŞIYOR 🚀");
});



// DATABASE OKUMA
function getDatabase(){

    const data = fs.readFileSync(
        "./database.json",
        "utf8"
    );

    return JSON.parse(data);

}



// PANEL API
app.get("/api/stats",(req,res)=>{

    const data = getDatabase();


    res.json({

        ...data,

        status:"online",

        lastUpdate:new Date()

    });


});




// PORT
const PORT = process.env.PORT || 10000;


app.listen(PORT,()=>{

console.log(
`RUMİ7XL PANEL API Çalışıyor 🚀 Port: ${PORT}`
);

});
