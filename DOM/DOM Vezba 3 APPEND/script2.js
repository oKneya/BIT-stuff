const data = [{
    animal: "giraffe",
    image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSh82Dm7OEK7SU7Rnv3Fa-9bi6BZrMM0NJvtm94eGajmxl7mObM7Jp9h3z5UfxaY5IsXGBoB9IX1QMVMlE", 
    weightInKg: 1900
  }, {
    animal: "tiger",
    image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRCFzg30JogIj40hQFI4DrVBMpfe83eLstaRvslhmCDXlgwTOgeT9ZGeSt0aTQSqj_M", 
    weightInKg: 310
  }, {
    animal: "lion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg", 
    weightInKg: 310
  }, {
    animal: "turtle",
    image: "https://thumbs.dreamstime.com/b/green-sea-turtle-endegered-species-to-be-protected-green-see-turle-endangered-species-184900208.jpg", 
    weightInKg: 150
  }, {
    animal: "pig",
    image: "https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_4x3.jpg", 
    weightInKg: 50
  } ]

  const table = document.createElement("table")

  const box = document.createElement("div");
  const body = document.body;
  const headTable =document.createElement("tr");
  const dataTitle = document.createElement("td");
  const dataImage = document.createElement("td");
  const dataWeight = document.createElement("td");

  dataTitle.textContent = "Title";
  dataImage.textContent = "Image";
  dataWeigth.textContent = "Weight";

  headTable.append(dataTitle, dataImage, dataWeight);
  table.append(headTable);

  data.forEach((e) => {
    const tableRow =document.createElement("tr");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");

    
  })