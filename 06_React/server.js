const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일을 서빙
app.use(express.static(path.join(__dirname, 'public')));

// 간단한 API 엔드포인트
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

