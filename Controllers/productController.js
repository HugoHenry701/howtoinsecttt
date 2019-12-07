const projectModel = require("../models/productModel")

async function createProduct(product) {
    let newdata = new projectModel(product)
    await newdata.save((err, data) => {
        if (err) { console.log(err) } else {
            console.log("create product successfull")
        }
    })
}
async function readProduct() {
    let allData = await projectModel.find({})
    let data = []
    allData.forEach(ele => {
        if (ele.kind.length > 0) data.push(ele)
    });
    return data
}
async function updateProduct(product) {
    await projectModel.updateOne({}, product, (err, data) => {
        if (err) { console.log(err) } else {
            console.log("update successfull")
        }
    })
}
async function deleteProduct(product){
    await projectModel.deleteOne({_id: product._id},(err,data)=>{
        if(err){console.log(err)}else{
            console.log("delete successfull")
        }
    })
}

module.exports={
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct

}