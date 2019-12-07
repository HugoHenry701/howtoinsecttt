const Router = require("express").Router()

const productController = require("../Controllers/productController")

Router.get("/", (req, res) => {
    res.render("managePage", {
        namee: "controller page"
    })

})
Router.get("/create-product", async (req, res) => {
    let sanphammoi = {
        namee: "Electric Guitar Fender",
        description: "Full setup but old string",
        kind: ["guitar", "drum", "bass", "organ", "accessory"],
        price: Math.floor(Math.random() * 100000),
        brand: "Fender",
        level: ["Low", "Basic", "Advanced"],
        currencyID: "USD",
        currencyFormat: "$",
        isShippingFree: true,
        imgLink: "/img/guitar-fender-san-xuat-o-nuoc-nao.jpg"
    }
    await productController.createProduct(sanphammoi)
    res.render("managePage")
})
Router.get("/read-product", async (req, res) => {
    let data = await productController.readProduct();
    let htmlContent = "";
    data.forEach(ele => {
        htmlContent = htmlContent +
            `
        <br>
        <p style="color:red;">${ele}</p>
        <p>${ele.namee}</p>
        `
    })
    res.render("managePage", {
        data: data
    })
})
Router.get("/update-product", (req, res) => {
    res.render("mainPage");
});
Router.get("/delete-product", (req, res) => {
    res.render("mainPage");
});

module.exports = Router;
