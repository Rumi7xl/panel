const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("RUMİ7XL PANEL API Aktif 🚀");
});


app.get("/api/stats",(req,res)=>{

    res.json({

        kick:{
            followers:12458,
            subscribers:325,
            latestFollowers:[
                "Kullanıcı1",
                "Kullanıcı2",
                "Kullanıcı3",
                "Kullanıcı4",
                "Kullanıcı5"
            ]
        },


        youtube:{
            subscribers:5420
        },


        tiktok:{
            followers:25800
        }

    });

});



app.listen(3000,()=>{

console.log("RUMİ7XL API çalışıyor");

});
