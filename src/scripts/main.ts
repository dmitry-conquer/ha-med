import "../styles/main.scss";

document.addEventListener("DOMContentLoaded", (): void => {
  const dynamicSliderElement = document.getElementById("dynamic-slider");
  if (dynamicSliderElement) {
    const currentElements = document.querySelectorAll("[data-current]");

    const activateCurrentByIndex = (index: number) => {
      currentElements.forEach(el => el.classList.remove("current-active"));
      if (index >= 0 && index < currentElements.length) {
        currentElements[index]?.classList.add("current-active");
      }
    };

    //@ts-expect-error - Swiper is not typed
    const swiper = new Swiper(dynamicSliderElement, {
      navigation: {
        nextEl: ".dynamic-slider__navigation-button--next",
        prevEl: ".dynamic-slider__navigation-button--prev",
      },
      pagination: {
        el: ".dynamic-slider__navigation-dots",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1.7,
          spaceBetween: 33,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 33,
        },
        1600: {
          slidesPerView: 2.2,
          spaceBetween: 33,
        },
      },
    });

    activateCurrentByIndex(0);
    swiper.slideTo(1, 0);

    swiper.on("slideChange", () => {
      const activeIndex = swiper.realIndex;
      const previousIndex = activeIndex > 0 ? activeIndex - 1 : currentElements.length - 1;
      activateCurrentByIndex(previousIndex);
    });
  }
});
