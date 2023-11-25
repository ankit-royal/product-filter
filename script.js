let obj = [
    {id:1, productName:"Neo 7 pro 5G", price:5000, productImage:"images/m1.jpg", category:"mobile"},
    {id:1, productName:"One Plus", price:5000, productImage:"images/m2.jpg", category:"mobile"},
    {id:1, productName:"Apple 13 Pro", price:5000, productImage:"images/m3.jpg", category:"mobile"},
    {id:1, productName:"Galaxy A54", price:5000, productImage:"images/m4.jpg", category:"mobile"},
    {id:1, productName:"mobile", price:5000, productImage:"images/m5.jpg", category:"mobile"},
    {id:1, productName:"mobile", price:5000, productImage:"images/m6.jpg", category:"mobile"},
    {id:1, productName:"mobile", price:5000, productImage:"images/m7.jpg", category:"mobile"},
    {id:1, productName:"mobile", price:5000, productImage:"images/m8.jpg", category:"mobile"},
    {id:1, productName:"watch", price:5000, productImage:"images/w1.jpg", category:"watch"},
    {id:1, productName:"watch", price:5000, productImage:"images/w2.jpg", category:"watch"},
    {id:1, productName:"watch", price:5000, productImage:"images/w3.jpg", category:"watch"},
    {id:1, productName:"watch", price:5000, productImage:"images/w4.jpg", category:"watch"},
    {id:1, productName:"watch", price:5000, productImage:"images/w5.jpg", category:"watch"},
    {id:1, productName:"shirt", price:5000, productImage:"images/s1.jpg", category:"shirt"},
    {id:1, productName:"shirt", price:5000, productImage:"images/s2.jpg", category:"shirt"},
    {id:1, productName:"shirt", price:5000, productImage:"images/s3.jpg", category:"shirt"},
    {id:1, productName:"shirt", price:5000, productImage:"images/s4.jpg", category:"shirt"},
    {id:1, productName:"shirt", price:5000, productImage:"images/s5.jpg", category:"shirt"},
    {id:1, productName:"laptop", price:5000, productImage:"images/l1.jpg", category:"laptop"},
    {id:1, productName:"laptop", price:5000, productImage:"images/l2.jpg", category:"laptop"},
    {id:1, productName:"laptop", price:5000, productImage:"images/l3.jpg", category:"laptop"},
    {id:1, productName:"laptop", price:5000, productImage:"images/l4.jpg", category:"laptop"},
    {id:1, productName:"laptop", price:5000, productImage:"images/l5.jpg", category:"laptop"},
]

var totaldata = obj.map((item) => {
    return (`
          <div class="product">
          <img src=${item.productImage} height="200px" width="200px">
          <h2>${item.productName}</h2>
          <p>Category=${item.category} price-₹${item.price}</p>
          </div>
        `)
})
document.getElementById("productContainer").innerHTML = totaldata.join("")

function filterdata(cat) {

    var filteritem = obj.filter((curcat) => {
        return cat === 'all' || cat === curcat.category
    })
    var totaldata = filteritem.map((item) => {
        return (`
              <div class="product">
              <img src=${item.productImage} height="200px" width="200px">
              <h2>${item.productName}</h2>
              <p>Category=${item.category} price-₹${item.price}</p>
              </div>              
            `)
    })
    document.getElementById("productContainer").innerHTML = totaldata.join("")

}

// ------Add event listeners for collapsible buttons---------

let content = document.getElementById("content");

document.querySelectorAll(".collapsible").forEach(colBtn =>
    colBtn.addEventListener("click", () => {
      colBtn.classList.toggle("active");
      content.style.display = colBtn.classList.contains("active") ? "block" : "none";
    })
  );
