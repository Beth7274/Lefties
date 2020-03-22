function hover(product, src) {
  product.setAttribute('src', src);
}

function unhover(product, src) {
  product.setAttribute('src', src);
}

function filterProducts(type) {
    var container = document.getElementById("itemContainer");
    var items = container.children;
    for(var item of items) {
        if(item.dataset.type === type || type === "all") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}