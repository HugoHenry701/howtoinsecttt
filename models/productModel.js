const mongoose = require("mongoose")

let productSchema = new mongoose.Schema(
    {
        namee: String,
        description: String,
        kind: Array,
        price: Number,
        brand: String,
        level: Array,
        availablePlace: String, //san pham hien dang cat tai dau (anh huong den shipping fee)
        currencyID: String,
        currencyFormat: String,
        isShippingFree: Boolean,
        imgLink: String,
    },
    {
        _id: true,
        timestamps: true
    }
);
let productModel = mongoose.model("products", productSchema)
module.exports = productModel;