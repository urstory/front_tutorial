const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// JSON 데이터를 제공하는 간단한 API 엔드포인트
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// HTML 파일을 서빙하는 엔드포인트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});