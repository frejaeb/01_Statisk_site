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
  copy.querySelector("h3").textContent = produkt.productdisplayname;
  //billed galleri
  copy.querySelector("img").src = `http://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  copy.querySelector("img").alt = produkt.subcategory;
  if (produkt.soldout) {
    //produkt er udsolt
    copy.querySelector("article").classList.add("udsolgt");
  }
  copy.querySelector(".læs-mer").setAttribute("href", `produkt.html?id=${produkt.id}`);
  //appende
  document.querySelector(".produktliste_grid").appendChild(copy);
}

// indhold fr html

/*
  <article>

                    <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="">
                    <h3>Leggins 300kr</h3>
                    <a href="produkt.html">Læs mere</a>
                </article>
/*

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
