const images = document.querySelectorAll('img');
const boxes = document.querySelectorAll('div');

//Getting img urls of drag and drop image
let dragImgSrc = '';
let dropImgSrc = '';

//adding drag event listeners on each img tag
images.forEach( img => {
    img.addEventListener('dragstart', (e) => {
        //getting the src of image which is going to be dragged
        dragImgSrc = e.target.getAttribute('src');
    });

    img.addEventListener('dragend', (e) => {
        e.target.setAttribute('src', dropImgSrc);
        droppedImgSrc = '';
        dragImgSrc = '';
    });
});


//adding drag event listeners on each div
boxes.forEach( box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        //getting the src of image which is going to be swapped
        dropImgSrc = e.target.getAttribute('src');
    });

    box.addEventListener('drop', (e) => {
        e.target.setAttribute('src', dragImgSrc);
    });

});

