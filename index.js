// Write your code here!
// const main = document.getElementById("main");
main.remove("main");

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Kevin is the champion";
document.body.append(newHeader);
