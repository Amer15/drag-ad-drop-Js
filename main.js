const images = document.querySelectorAll("img");
const boxes = document.querySelectorAll("div");

//Getting img urls of drag and drop image
let dragImgSrc = "";
let dropImgSrc = "";

//Getting Ids of drag and drop image
let dragImgId = "";
let dropImgId = "";

//adding drag event listeners on each img tag
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    //getting the src of image and also id of img tag which is dragged
    //and storing them in drag variables
    dragImgSrc = e.target.getAttribute("src");
    dragImgId = e.target.id;
  });

  img.addEventListener("dragend", (e) => {
    //checking whether both the dragged and drop img elements are same  
    //If they are different performing swap (Drag and Drop)
    if (dragImgId !== dropImgId && dragImgSrc !== dropImgSrc) {
      let hoveredImg = document.getElementById(dropImgId);
      hoveredImg.setAttribute("src", dragImgSrc);
      let draggedImg = document.getElementById(dragImgId);
      draggedImg.setAttribute("src", dropImgSrc);
    }
    //Setting to variables to empty strings after perfoming swap
    dragImgSrc = "";
    dropImgSrc = "";
    dragImgId = "";
    dropImgId = "";
  });
});

//Attaching event listeners on every img for dragover and drop events
images.forEach((image) => {
  image.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  image.addEventListener("drop", (e) => {
    //getting the src of image and also id of img tag which is hovered by dragged img
    //and storing them in drop variables 
    dropImgSrc = e.target.getAttribute("src");
    dropImgId = e.target.id;
  });
});
