//  getting all inputs from form and creating a new div and appending them all inside

const arr = [];

function post(event) {
  event.preventDefault();

  var nameValue = document.getElementById("name").value;
  const pname = document.getElementById("pname").value;
  const ptype = document.getElementById("ptype").value;
  const about = document.getElementById("about").value;
  const pLink = document.getElementById("pLink").value;
  const mail = document.getElementById("mail").value;

  document.getElementById("myForm").reset();
  arr.push({
    name: nameValue,
    productType: ptype,
    productName: pname,
    aboutu: about,
    proLink: pLink,
    mailID: mail,
  });

  const data = document.getElementById("data");
  arr.forEach((ele) => {
    // intro
    const divs = document.createElement("div");
    divs.setAttribute("class", "intro");
    divs.innerText = ` Hi Everyone This is ${ele.name}.I am ${ele.productType} and my
    product name is${ele.productName} `;

    // link
    const strong = document.createElement("strong");
    strong.setAttribute("class", "contact");
    strong.innerText = `Product Link: ${ele.proLink} Email: ${ele.mailID}`;

    // about
    const italic = document.createElement("italic");
    italic.setAttribute("class", "about");
    italic.innerText = `${ele.aboutu}`;

    data.appendChild(divs);
    data.appendChild(italic);
    data.appendChild(strong);

    console.log(divs);
  });

  console.log(arr);

  arr.pop();
}
