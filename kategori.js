fetch("https://kea-alt-del.dk/t7/api//categories")
  .then((res) => res.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  //looper og kalder kategori
  categories.forEach(showCategories);
}

function showCategories(kategori) {
  console.log(kategori);
  //fange tamplates
  const template = document.querySelector("#produktTemplate").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  //copy.querySelector("a").textContent = kategori.category;
  

  copy.querySelector(".kategori").setAttribute("href", `produktliste.html?id=${kategori.id}`);
  //appende
  document.querySelector(".box_grid").appendChild(copy);
}

/*    <div class="box_grid">
            <template id="produktTemplate">
              <div class="box_style">
                <a href="produktliste.html">Topwear</a>
            </div> */

            /*

[
  {
    "category": "Accessories"
  },
  {
    "category": "Apparel"
  },
  {
    "category": "Footwear"
  },
  {
    "category": "Free Items"
  },
  {
    "category": "Personal Care"
  },
  {
    "category": "Sporting Goods"
  }
]
            */