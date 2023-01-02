const cl = console.log;

const allHeading = [...document.querySelectorAll(".card-header")];
const headingInfo = [...document.querySelectorAll(".headingInfo")];

// callback functions
const onClickHandler = (eve) => {
    
    eve.target.nextElementSibling.classList.toggle("headingInfo");
};


// events
allHeading.forEach(ele => {
    ele.addEventListener("click",onClickHandler);
});