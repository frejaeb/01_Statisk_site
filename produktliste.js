fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder produkt
  products.forEach((produkt) => showProducts);
}

function showProducts(produkt) {
  console.log(ptodukt);
  //fange templates
  const template = document.querySelector("#produkyLegginsTemplate").content;
  //lave kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  //appende
}
