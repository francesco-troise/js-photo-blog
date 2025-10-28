/*  
    I commenti sono banali, riguardano il solo uso dei comandi, il flusso è poco complesso
    evito di inserire commenti per non avere suggerimenti banali in caso di discussione del algoritmo
*/
const fragment = document.createDocumentFragment();
const row = document.getElementById("row");

const array_post = [];

axios
  .get("https://lanciweb.github.io/demo/api/pictures/")

  .then((response) => {
    array_post.push(...response.data);

    array_post.forEach((post) => {
      const col = document.createElement("div");
      col.classList.add("col-lg-4", "col-md-6", "col-sm-12");
      fragment.appendChild(col);

      const card = document.createElement("div");
      card.classList.add("card", "p-3", "rounded-0");
      col.appendChild(card);

      const img = document.createElement("img");
      img.classList.add("card-img-top", "rounded-0");
      img.src = post.url;
      card.appendChild(img);

      const card_body = document.createElement("div");
      card_body.classList.add("card-body", "p-0");
      card.appendChild(card_body);

      const span_date = document.createElement("span");
      span_date.classList.add("d-block", "text-start", "date");
      span_date.textContent = post.date;
      card_body.appendChild(span_date);

      const span_title = document.createElement("span");
      span_title.classList.add("d-block", "card-text", "text-start", "title");
      span_title.textContent = post.title;
      card_body.appendChild(span_title);

      const pin = document.createElement("div");
      pin.classList.add("pin");
      card_body.appendChild(pin);

      const pin_img = document.createElement("img");
      pin_img.src = "./assets/img/pin.svg";
      pin.appendChild(pin_img);
    });

    row.appendChild(fragment);
    //CREATION CARD

    const card_img = document.getElementsByClassName("card-img-top");

    const overlay_box = document.getElementById("overlay");
    const btn_overlay = document.getElementById("btn-overlay");
    const img_overlay = document.getElementById("img-overlay");

    btn_overlay.addEventListener("click", function () {
      overlay_box.classList.toggle("d-none");
    });

    for (let img of card_img) {
      img.addEventListener("click", () => {
        overlay_box.classList.toggle("d-none");
      });
    }
  });
