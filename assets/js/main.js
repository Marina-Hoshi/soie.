$(() => {
  const fadeInPage = () => {
    $('body').fadeIn(1000);
  };

  fadeInPage();

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $("._scrollFadeIn");

    scrollFadeIn.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveFadeIn");
      } else {
        $element.removeClass("_isActiveFadeIn");
      }
    });
  };

  const checkScrollSlideFadeLeft = (scrollBottom) => {
    const scrollSlideFadeLeft = $("._scrollSlideFadeLeft");

    scrollSlideFadeLeft.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeLeft");
      } else {
        $element.removeClass("_isActiveSlideFadeLeft");
      }
    });
  };

  const checkScrollSlideFadeRight = (scrollBottom) => {
    const scrollSlideFadeRight = $("._scrollSlideFadeRight");

    scrollSlideFadeRight.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeRight");
      } else {
        $element.removeClass("_isActiveSlideFadeRight");
      }
    });
  };

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    checkScrollFadeIn(scrollBottom);
    checkScrollSlideFadeLeft(scrollBottom);
    checkScrollSlideFadeRight(scrollBottom);
  });

  $('.c-left__img:nth-child(n+2)').hide();
  setInterval(function() {
    $(".c-left__img:first-child").fadeOut(2000);
    $(".c-left__img:nth-child(2)").fadeIn(2000);
    $(".c-left__img:first-child").appendTo(".img-wrap");
  }, 4000);
});
