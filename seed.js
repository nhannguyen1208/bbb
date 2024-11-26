const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/local_mong', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected to local_mong'))
.catch(err => console.error('Connection error:', err));

// Định nghĩa schema và model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, default: '' }
});
const Product = mongoose.model('Product', productSchema);

// Thêm dữ liệu mẫu
const seedProducts = async () => {
    await Product.deleteMany(); // Xóa toàn bộ dữ liệu cũ (nếu có)
    const products = [
        { name: 'Product 1', description: 'Description 1', price: 10, image: '' },
        { name: 'Product 2', description: 'Description 2', price: 20, image: '' },
        { name: 'Product 3', description: 'Description 3', price: 30, image: '' }
    ];
    await Product.insertMany(products);
    console.log('Data seeded successfully!');
    mongoose.disconnect();
};

seedProducts();
