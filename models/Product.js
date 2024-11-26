const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String }, // Lưu đường dẫn hình ảnh
    },
    { timestamps: true } // Tự động thêm createdAt và updatedAt
);

module.exports = mongoose.model('Product', productSchema);
