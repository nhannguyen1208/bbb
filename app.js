const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Để phục vụ hình ảnh
app.use('/api/products', productRoutes);

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Kết nối đến MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected on localhost:27017'))
.catch(err => console.error('Connection Error:', err));

// Thiết lập port
const PORT = process.env.PORT || 4000; // Đổi cổng thành 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
