import "../styles/main.scss";
import AccordionCollection from "./Accordion";

document.addEventListener("DOMContentLoaded", (): void => {
  new AccordionCollection();

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
          slidesPerView: 1.1,
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

  const readMoreButtons = document.querySelectorAll(".dynamic-slider__slide-more");
  readMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.closest(".dynamic-slider__slide");
      const text = parent?.querySelector(".dynamic-slider__slide-text");
      if (text) {
        text.classList.toggle("is-expanded");
        button.textContent = text.classList.contains("is-expanded") ? "Read Less" : "Read More";
      }
    });
  });

  const iconsSliderElements = document.querySelectorAll(".icons-slider__slider");
  iconsSliderElements.forEach(slider => {
    //@ts-expect-error - Swiper is not typed
    new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: slider.nextElementSibling as HTMLElement,
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
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
          slidesPerView: 4,
          spaceBetween: 33,
        },
      },
    });
  });

  const imagesSliderElements = document.querySelectorAll(".images-slider__slider");
  imagesSliderElements.forEach(slider => {
    //@ts-expect-error - Swiper is not typed
    new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: slider.nextElementSibling as HTMLElement,
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
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
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 33,
        },
      },
    });
  });
});
