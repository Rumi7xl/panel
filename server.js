console.log("SERVER DOSYASI OKUNDU");

const express = require("express");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


// HTML PANELİ GÖSTER
app.use(express.static(__dirname));


// ANA SAYFA
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});


// API TEST
app.get("/test",(req,res)=>{
    res.send("TEST ÇALIŞIYOR 🚀");
});


// PANEL VERİLERİ
app.get("/api/stats",(req,res)=>{

    res.json({

        profile:{
            name:"RUMİ7XL",
            owner:"Bercan Yakar"
        },

        kick:{
            followers:12458,
            subscribers:325,
            latestFollowers:[
                "Yeni Takipçi 1",
                "Yeni Takipçi 2",
                "Yeni Takipçi 3",
                "Yeni Takipçi 4",
                "Yeni Takipçi 5"
            ]
        },

        youtube:{
            subscribers:5420
        },

        tiktok:{
            followers:25800
        },

        instagram:{
            followers:0
        },

        status:"online",

        lastUpdate:new Date()

    });

});


// RENDER PORT
const PORT = process.env.PORT || 10000;


app.listen(PORT,()=>{

console.log(`RUMİ7XL PANEL API Çalışıyor 🚀 Port: ${PORT}`);

});
