const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true})) 

MongoClient.connect('mongodb+srv://admin:alive5012@cluster0.mfedmql.mongodb.net/firstdb?retryWrites=true&w=majority', function(err, client){
    if (err) return console.log(err);
    db = client.db('firstdb')
    
    app.post('/add', function(req,res){
        res.send('전송완료')
        console.log(req.body)

        db.collection('post').insertOne({제목: req.body.title, 날짜: req.body.date}, function(err, result){
            console.log('저장완료')
        })
    })



    //서버띄우는 코드 여기로 옮기기
    app.listen('8080', function(){
      console.log('listening on 8080')
    });
  })

// app.get('/', function(요청,응답){
//     응답.send('반갑습니다');
// });
//서버 오픈하는 기본 문법
//(서버띄울 포트,실행할 함수)

app.get('/', function(req,res){
    res.send('기본 홈 페이지');
});

app.get('/write', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// app.post('/add', function(req,res){
//     res.send('전송완료')
//     console.log(req.body)
// })