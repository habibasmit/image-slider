
let slider = () => {
    let sliderButtons = document.querySelectorAll(".sliderWrapper .slider-button");
    let imgList = document.querySelector(".sliderWrapper .imageList")

    sliderButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let direction = button.id === "prevSlide" ? -1 : 1;
        let  scrollAmount = imgList.clientWidth * direction;
        imgList.scrollBy({left: scrollAmount, behavior: "smooth"})
      });
    });
  };

  window.addEventListener("load", slider);
