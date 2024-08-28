let http = new XMLHttpRequest();
http.open("get", "data.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let datas = JSON.parse(this.responseText);
    let output = "";

    for (let data of datas) {
      output += `<li class="${data.category.toLowerCase()}">
        <div class="icon">
        <img src="${data.icon}" alt="icon" />
        </div>
        <div class="text">${data.category}</div>
        <div class="value"><span>${data.score}</span> / 100</div>
        </li>`;
    }

    document.querySelector(".summary-list-cont").innerHTML = output;
  }
};
