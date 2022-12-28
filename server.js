const express = require('express')
const app = express();

app.listen(8080, function(){
    console.log('8080서버 시작')
});

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