var UserData = {
  id: 2,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
 

var UserDataid = document.querySelectorAll("#id p");
var UserDataname = document.querySelectorAll("#name p");
var UserDatausername = document.querySelectorAll("#username p");
var UserDataemail = document.querySelectorAll("#email p");
var UserDatastreet = document.querySelectorAll("#street p");
var UserDatasuite = document.querySelectorAll("#suite p");
var UserDatacity = document.querySelectorAll("#city p");
var UserDatazipcode = document.querySelectorAll("#zipcode p");
var UserDatalat = document.querySelectorAll("#lat p");
var UserDatalng = document.querySelectorAll("#lng p");
var UserDataphone = document.querySelectorAll("#phone p");
var UserDatawebsite = document.querySelectorAll("#website p");
var UserDatacompanyname = document.querySelectorAll("#companyname p");
var UserDatacatchPhrase = document.querySelectorAll("#catchPhrase p");
var UserDatabs = document.querySelectorAll("#bs p");


UserDataid[0].innerHTML = UserData.id

UserDataname[0].innerHTML = UserData.name

UserDatausername[0].innerHTML = UserData.username

UserDataemail[0].innerHTML = UserData.email

UserDatastreet[0].innerHTML = UserData.address.street

UserDatasuite[0].innerHTML = UserData.address.suite

UserDatacity[0].innerHTML = UserData.address.city

UserDatazipcode[0].innerHTML = UserData.address.zipcode

UserDatalat[0].innerHTML = UserData.address.geo.lat

UserDatalng[0].innerHTML = UserData.address.geo.lng

UserDataphone[0].innerHTML = UserData.phone

UserDatawebsite[0].innerHTML = UserData.website

UserDatacompanyname[0].innerHTML = UserData.company.name

UserDatacatchPhrase[0].innerHTML = UserData.company.catchPhrase


UserDatabs[0].innerHTML = UserData.company.bs

