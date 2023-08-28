// https://kea-alt-del.dk/t7/api/products/1525 //

fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProdukt(data));

function showProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".produkt_1 h3").textContent = produkt.productdisplayname;

  document.querySelector(".produkt_1 .brand").textContent = produkt.brandname;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
}
