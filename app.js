const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin.route');
const app = express();
mongoose.connect("mongodb+srv://devikakushwah:Radhakrishna%4029@newcluster.7o13k.mongodb.net/jobBydevika");

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use("/admin",adminRouter);
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server running....");
});



