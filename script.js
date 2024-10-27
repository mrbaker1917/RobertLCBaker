// require('dotenv').config();
const mapAPIKey = process.env.MAP_API_KEY;

function menu() {
  var x = document.getElementById("topnavid");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function selectItem(item, class_name) {
  item.className = class_name;
}
