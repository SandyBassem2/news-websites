
var employeeInfo2 = {
  name: "Shady",
  phone: ["01001234567", "01221234567", "0366554433"],
  birthDate: "2000-09-18",
  code: 123,
  salary: 7000.75,
  address: {
    city: "Cairo",
    region: "Maadi",
    streetName: "St no. 9",
  },
}


//console.log(employeeInfo2);
var Jsondata =JSON.stringify(employeeInfo2);
console.log(Jsondata);
//document.querySelector("h1").innerText = Jsondata;
var jsonOb=JSON.parse(Jsondata);
//document.querySelector("h1").innerText = jsonOb.name;
document.querySelector("h1").innerText = jsonOb.phone[2];

