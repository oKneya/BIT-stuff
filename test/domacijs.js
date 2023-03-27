const data = [
  {
    animal: "giraffe",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSh82Dm7OEK7SU7Rnv3Fa-9bi6BZrMM0NJvtm94eGajmxl7mObM7Jp9h3z5UfxaY5IsXGBoB9IX1QMVMlE",
    weightInKg: 1900,
  },
  {
    animal: "tiger",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRCFzg30JogIj40hQFI4DrVBMpfe83eLstaRvslhmCDXlgwTOgeT9ZGeSt0aTQSqj_M",
    weightInKg: 310,
  },
  {
    animal: "lion",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg",
    weightInKg: 310,
  },
  {
    animal: "turtle",
    image:
      "https://thumbs.dreamstime.com/b/green-sea-turtle-endegered-species-to-be-protected-green-see-turle-endangered-species-184900208.jpg",
    weightInKg: 150,
  },
  {
    animal: "pig",
    image:
      "https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_4x3.jpg",
    weightInKg: 50,
  },
];

// const body = document.querySelector("body");
// const table = document.createElement("table");
// table.setAttribute("border", "1px");
// body.append(table);

// // Create the table headers
// const headers = ["name", "image", "weight"];
// const headerRow = document.createElement("tr");
// table.append(headerRow);
// headers.forEach((headerText) => {
//   const headerCell = document.createElement("th");
//   headerCell.textContent = headerText;
//   headerRow.append(headerCell);
// });

// // Loop through the data array and add rows to the table
// data.forEach((e) => {
//   const row = document.createElement("tr");

//   // Create a cell for the animal name
//   const nameCell = document.createElement("td");
//   nameCell.textContent = e.animal;
//   row.append(nameCell);

//   // Create a cell for the animal image
//   const imageCell = document.createElement("td");
//   const image = document.createElement("img");
//   image.src = e.image;
//   image.width = "10px";
//   imageCell.append(image);
//   row.append(imageCell);

//   // Create a cell for the animal weight
//   const weightCell = document.createElement("td");
//   weightCell.textContent = e.weightInKg;
//   row.append(weightCell);

//   // Add the row to the table
//   table.append(row);
// });

// const body = document.querySelector("body");
// const table = document.createElement("table");
// table.setAttribute("border", "1px");
// body.append(table);
// const firstRow = document.createElement("tr");
// const firstData = document.createElement("td");
// const secondData = document.createElement("td");
// const thirdData = document.createElement("td");
// firstData.textContent = "name";
// secondData.textContent = "image";
// thirdData.textContent = "weight";
// table.append(firstRow);
// firstRow.append(firstData, secondData, thirdData);
// data.forEach((e) => {
//   let nameRow = document.createElement("tr");
//   nameRow.textContent = e.animal;
//   let imageRow = document.createElement("tr");
//   imageRow.innerHTML = `<img src="${e.image}" alt="" width = "20px" >`;
//   let weightRow = document.createElement("tr");
//   weightRow.textContent = e.weightInKg;
//   firstData.append(nameRow);
//   secondData.append(imageRow);
//   thirdData.append(weightRow);
// });

// var div = document.createElement("div");
// div.setAttribute("id", "tbl");
// document.body.appendChild(div);
// document.getElementById("tbl").innerHTML =
//   "<table border = '1'>" +
//   "<tr>" +
//   "<th>Zivotinja</th>" +
//   "<th>Slika</th> " +
//   "<th>Tezina</th>" +
//   "</tr>" +
//   "<tr>" +
//   "<td>giraffe</td>" +
//   "<td><></td>" +
//   "<td>Data 4</td>" +
//   "</tr>" +
//   "<tr>" +
//   "<td>tiger</td>" +
//   "<td>Data 3</td>" +
//   "<td>Data 4</td>" +
//   "</tr>" +
//   "<tr>" +
//   "<td>lion</td>" +
//   "<td>Data 3</td>" +
//   "<td>Data 4</td>" +
//   "</tr>" +
//   "<tr>" +
//   "<td>turtle</td>" +
//   "<td>Data 3</td>" +
//   "<td>Data 4</td>" +
//   "</tr>" +
//   "<tr>" +
//   "<td>pig</td>" +
//   "<td>Data 2</td>" +
//   "<td>Data 3</td>" +
//   "</tr>";

// function displayImage(src, width, height) {
//   var img = document.createElement("img");
//   img.src = src;
//   img.width = width;
//   img.height = height;
//   document.body.appendChild(img);
// }
// displayImage(
//   "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSh82Dm7OEK7SU7Rnv3Fa-9bi6BZrMM0NJvtm94eGajmxl7mObM7Jp9h3z5UfxaY5IsXGBoB9IX1QMVMlE",
//   320,
//   250
// );
