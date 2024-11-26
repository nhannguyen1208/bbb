const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sử dụng thư mục tĩnh để hiển thị hình ảnh upload
app.use('/uploads', express.static('uploads'));

// Định nghĩa route cho sản phẩm
app.use('/api/products', productRoutes);

// Cung cấp giao diện người dùng
app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Kết nối đến MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/local_mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected on localhost:27017'))
.catch(err => console.error('Connection Error:', err));
