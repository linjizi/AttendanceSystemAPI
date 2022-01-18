const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/attendance_system').then(() => {
    console.log('数据库连接成功');
}).catch(err => {
    console.log('数据库连接失败' + err.message);
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next()
})
app.get('/login', (req, res) => {
    console.log(req.query);
})

app.listen(4000, () => {
    console.log('服务器开启成功，请访问http://localhost:4000');
})