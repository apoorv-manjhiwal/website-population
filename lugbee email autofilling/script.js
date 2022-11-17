document
  .getElementById("submit_btn")
  .addEventListener("click", function (event) {
    var pass = passvalues();
    if (!pass) {
      event.preventDefault();
    }
  });

function passvalues() {
  let name = document.getElementById("name").value;
  let bags = document.getElementById("bags").value;
  let location = document.getElementById("location").value;
  let drop = document.getElementById("drop").value;
  let pick = document.getElementById("pick").value;
  let duration = document.getElementById("duration").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let mobile_regex = /^(\+[\d]{1,5}|0)?[7-9]\d{9}$/;

  if (name == "") {
    document.getElementById("sname").innerHTML =
      "name field cannot be left empty";
    return false;
  } else {
    document.getElementById("sname").innerHTML = "";
  }
  if (!isNaN(name)) {
    document.getElementById("sname").innerHTML = "name cannot be a number";
    return false;
  } else {
    document.getElementById("sname").innerHTML = "";
  }
  if (bags == "") {
    document.getElementById("sbags").innerHTML =
      "bags field cannot be left empty";
    return false;
  }
  if (isNaN(bags)) {
    document.getElementById("sbags").innerHTML = "this cannot be a string";
    return false;
  } else {
    document.getElementById("sbags").innerHTML = "";
  }
  if (location == "") {
    document.getElementById("slocation").innerHTML =
      "location field cannot be left empty";
    return false;
  } else {
    document.getElementById("slocation").innerHTML = "";
  }
  if (!isNaN(location)) {
    document.getElementById("slocation").innerHTML =
      "location cannot be a number";
    return false;
  } else {
    document.getElementById("slocation").innerHTML = "";
  }
  if (drop == 0) {
    document.getElementById("sdrop").innerHTML =
      "drop field cannot be left empty";
    return false;
  } else {
    document.getElementById("sdrop").innerHTML = "";
  }
  if (pick == 0) {
    document.getElementById("spick").innerHTML =
      "pick field cannot be left empty";
    return false;
  } else {
    document.getElementById("spick").innerHTML = "";
  }
  if (duration == "") {
    document.getElementById("sduration").innerHTML =
      "duration field cannot be left empty";
    return false;
  } else {
    document.getElementById("sduration").innerHTML = "";
  }
  if (isNaN(duration)) {
    document.getElementById("sduration").innerHTML =
      "please input valid duration";
    return false;
  } else {
    document.getElementById("sduration").innerHTML = "";
  }
  if (mobile == "") {
    document.getElementById("smobile").innerHTML =
      "mobile field cannot be left empty";
    return false;
  } else {
    document.getElementById("smobile").innerHTML = "";
  }
  if (mobile.length != 10) {
    document.getElementById("smobile").innerHTML =
      "please input a valid mobile number";
    return false;
  } else {
    document.getElementById("smobile").innerHTML = "";
  }
  if (!mobile.match(mobile_regex)) {
    document.getElementById("smobile").innerHTML =
      "please input valid mobile number";
    return false;
  } else {
    document.getElementById("smobile").innerHTML = "";
  }
  if (email == "") {
    document.getElementById("semail").innerHTML =
      "email field cannot be left empty";
    return false;
  } else {
    document.getElementById("semail").innerHTML = "";
  }
  if (!email.match(pattern)) {
    document.getElementById("semail").innerHTML =
      "please enter a valid email address";
    return false;
  } else {
    document.getElementById("semail").innerHTML = "";
  }
  localStorage.setItem("name", name);
  localStorage.setItem("bags", bags);
  localStorage.setItem("location", location);
  localStorage.setItem("drop", drop);
  localStorage.setItem("pick", pick);
  localStorage.setItem("duration", duration);
  localStorage.setItem("mobile", mobile);
  localStorage.setItem("email", email);

  return true;
}
console.log(name, pick.value, drop, location, email, mobile);

// =========== ONLY NUMBER INPUT=============

function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
// console.log(booking);
