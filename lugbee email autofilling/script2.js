var value = Math.floor(Math.random() * 1000000 + 1);
console.log(value);
var amount = Math.floor(Math.random() * 1000 + 1);
alert(1);

document.getElementById("ebooking").textContent = "#" + value;
document.getElementById("ename").innerHTML = localStorage.getItem("name");
document.getElementById("ebags").innerHTML = localStorage.getItem("bags");
document.getElementById("elocation").innerHTML =
  localStorage.getItem("location");
document.getElementById("eduration").innerHTML =
  localStorage.getItem("duration");
document.getElementById("eamount").textContent = "Rs. " + amount;

document.getElementById("emobile").innerHTML = localStorage.getItem("mobile");
document.getElementById("eemail").innerHTML = localStorage.getItem("email");
