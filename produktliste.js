fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder produkt
  products.forEach(showProduct);
}

function showProduct(produkt) {
  console.log(produkt);
  //fange templates
  const template = document.querySelector("#produkyLegginsTemplate").content;
  //lave kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  //appende
}

/* {
  "id": 1528,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Jackets",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "Black Fleece Jacket",
  "price": 3999,
  "discount": 49,
  "brandname": "Puma",
  "soldout": 0
} */