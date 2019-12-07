const Router = require("express").Router();

const productController = require("../Controllers/productController")
Router.get("/", async (req, res) => {
  let data = await productController.readProduct()
  // console.log(data)
  let renderHTML = ""
  data.forEach(element => {
    renderHTML = renderHTML +
      `
      <div class="item">
        <img src="${element.imgLink}" alt="">
        <p>${element.namee}</p>
        <span>${element.level}</span>
        <div class="price">
          
          <small>$</small>
          <b>${element.price}</b>
          <span></span>
        </div>
        <div class="buy-btn">
            Mua ne
        </div>
      </div>
    
    `;
  });
  res.render("mainPage", {
    HTML: renderHTML
  });
});


module.exports = Router;
