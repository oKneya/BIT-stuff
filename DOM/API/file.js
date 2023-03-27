var newXML = new XMLHttpRequest();
const btn = document.querySelector("button");

const image = document.createElement("img");
document.body.append(image)

function setImageSrc (obj){
    image.src = obj.message;
   
}


btn.addEventListener("click",() => {
    // pripremi ewquest

newXML.open("GET", "https://dog.ceo/api/breeds/image/random");

//posalji request na server

newXML.send();

//hendluj response sa servera

newXML.onload = () => {
    if (newXML.status >= 200 && newXML.status < 400){
        //request je prosao dobro => mozemo da pravimo slicicu
        console.log(newXML.responseText);
        const response = JSON.parse(newXML.responseText);
        console.log(response);
        
        setImageSrc(response)
    }
}
})