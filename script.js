$(() => {
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  });

  function hasEnPath() {
    return window.location.href.indexOf("/en") !== -1;
  }

  // Banner text animation
  $(".animateText").each(function () {
    var textWrapper = $(this);
    textWrapper.html(
      textWrapper.text().replace(/\S/g, "<span class='letter'>$&</span>")
    );
  });

  if (!hasEnPath()) {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".animateText",
        opacity: [0, 1],
        easing: "linear",
        duration: 100,
      })
      .add({
        targets: ".bannerText1 .letter",
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 2000 + 30 * i,
      });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText2 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2500 + 30 * i,
    });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText3 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 3000 + 30 * i,
    });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText4 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4000 + 30 * i,
    });

    $(".bannerText5")[0] &&
      anime.timeline({ loop: false }).add({
        targets: ".bannerText5 .letter",
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 5000 + 30 * i,
      });
  } else {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".animateText",
        opacity: [0, 1],
        easing: "linear",
        duration: 100,
      })
      .add({
        targets: ".bannerText1 .letter",
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1500 + 30 * i,
      });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText2 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2000 + 30 * i,
    });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText3 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2500 + 30 * i,
    });

    anime.timeline({ loop: false }).add({
      targets: ".bannerText4 .letter",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2500 + 30 * i,
    });

    $(".bannerText5")[0] &&
      anime.timeline({ loop: false }).add({
        targets: ".bannerText5 .letter",
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 4000 + 30 * i,
      });
  }
  // Banner text animation

  //Gsap | Digital revolution
  gsap.registerPlugin(ScrollTrigger);

  // Pin section with ID "pinned-section-2"
  ScrollTrigger.create({
    trigger: "#pinned-section-2",
    start: "bottom+=3% bottom",
    end: `+=${1.5 * document.querySelector("#pinned-section-2").offsetHeight}`,
    pin: true,
    // toggleClass: {
    //   targets: ".human",
    //   className: "show-text-block",
    //   immediateRender: true,
    // },
  });

  //Gsap | Cards animation
  ScrollTrigger.create({
    trigger: ".animated-cards .cards-wrapper",
    start: "center+=80% bottom",
    end: "center bottom",
    toggleClass: {
      targets: ".animated-cards",
      className: "slide-cards",
    },
    once: true,
  });

  //Gsap | Just registration
  ScrollTrigger.create({
    trigger: ".just-registration h2",
    start: "center bottom-=50%",
    end: "center bottom",
    toggleClass: {
      targets: ".just-registration",
      className: "show-cards",
    },
    once: true,
  });

  //Gsap | Personal section
  ScrollTrigger.create({
    trigger: ".personal-section",
    start: "center bottom",
    end: "center bottom",
    toggleClass: {
      targets: ".personal-section",
      className: "show-content",
    },
    once: true,
  });

  //Gsap | Chat section
  ScrollTrigger.create({
    trigger: ".chat-section",
    start: "center bottom",
    end: "center bottom",
    toggleClass: {
      targets: ".chat-section",
      className: "show-content",
    },
    once: true,
  });

  //Gsap | Header section
  ScrollTrigger.create({
    start: `top -${
      $(".banner-section").height() - $("header").innerHeight() / 1.5
    }`,
    end: $("body").height() * 1.5,
    toggleClass: { className: "white-header", targets: ".header" },
  });

  gsap.to(".robo", {
    x: "-100%",
    duration: 2,
    scrollTrigger: {
      trigger: ".robo",
      start: `bottom center+=200`,
      end: "bottom top",
      toggleActions: "restart pause resume complete",
      scrub: 1,
      //onEnter  onLeave  onEnterBack  onLeaveBack
    },
  });

  gsap.to(".human", {
    x: "100%",
    duration: 2,
    scrollTrigger: {
      trigger: ".human",
      start: "bottom center+=200",
      end: "bottom top",
      toggleActions: "restart pause resume complete",
      scrub: 1,
    },
  });

  gsap.to(".spiral .phoneImage", {
    y: "0%",
    opacity: "1",
    duration: 2,
    scrollTrigger: {
      trigger: ".spiral",
      start: "bottom bottom",
      end: "bottom top",
      toggleActions: "restart pause resume complete",
      scrub: 1,
    },
  });

  gsap.to("#pinned-section-2 .fadeOutBtn", {
    opacity: "0",
    duration: 1,
    scrollTrigger: {
      trigger: ".spiral",
      start: "bottom bottom-=10%",
      end: "bottom center+=20%",
      toggleActions: "restart pause resume complete",
      scrub: 1,
    },
  });

  gsap.to(".text-box-robo", {
    opacity: "0",
    x: "-50%",
    duration: 1,
    scrollTrigger: {
      trigger: ".robo",
      start: "bottom center+=200",
      end: "bottom center-=100",
      toggleActions: "restart pause resume complete",
      scrub: 1,
      // markers: true,
    },
  });

  gsap.to(".text-box-spiral", {
    opacity: "1",
    scale: "1",
    duration: 2,
    scrollTrigger: {
      trigger: ".text-box-spiral",
      start: "bottom bottom-=120%",
      end: "bottom top-=120%",
      toggleActions: "restart pause resume complete",
      scrub: 2,
    },
  });

  // Pin section with ID "pinned-section-3"
  ScrollTrigger.create({
    trigger: "#pinned-section-3",
    start: "bottom bottom",
    end: `+=${1.5 * document.querySelector("#pinned-section-3").offsetHeight}`,
    pin: true,
  });

  gsap.to("#pinned-section-3 .scalable-element", {
    scale: "1",
    x: 0,
    y: 0,
    borderRadius: "24px",
    duration: 2,
    scrollTrigger: {
      trigger: "#pinned-section-3",
      start: "bottom bottom",
      end: "bottom top",
      toggleActions: "restart pause resume complete",
      scrub: 1,
      //onEnter  onLeave  onEnterBack  onLeaveBack
    },
  });

  gsap.to("#pinned-section-3 .scalable-element .text-box", {
    scale: "1",
    opacity: "1",
    y: "0",
    duration: 5,
    scrollTrigger: {
      trigger: "#pinned-section-3",
      start: "bottom bottom",
      end: "bottom top",
      toggleActions: "restart pause resume complete",
      scrub: 3,
      //onEnter  onLeave  onEnterBack  onLeaveBack
    },
  });

  //Parallax sections
  $(".parallax-container").each(function (i, el) {
    $(el).mousemove(function (e) {
      const movableElement = $(this).find(".parallax-element");

      const parallaxFactorX = 0.05;
      const parallaxFactorY = 0.2;

      const containerWidth = $(this).width();
      const containerHeight = $(this).height();

      const xPos =
        (containerWidth - (e.pageX * 2 - $(this).offset().left)) *
        parallaxFactorX;
      const yPos =
        (containerHeight - (e.pageY - $(this).offset().top)) * parallaxFactorY;

      movableElement.css({
        transform: `translate(${xPos}px, ${yPos}px)`,
      });
    });
  });

  //exchange
  function roundToTwoDecimals(inputNumber) {
    return inputNumber.toFixed(2);
  }

  const setFirstInputValue = (value) => {
    $("#inputWrapperFirst input").val(value);
  };

  const setSecondInputValue = (value) => {
    $("#inputWrapperSecond input").val(value);
  };

  fetch("https://whatmoneyapi.azurewebsites.net/currencies")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((fetchRates) => {
      const firstInput = $("#inputWrapperFirst input");
      const secondInput = $("#inputWrapperSecond input");
      const fromRate = fetchRates.rub_usdt;
      setFirstInputValue(100000);
      setSecondInputValue(roundToTwoDecimals(100000 * fromRate));

      firstInput.on("input", function () {
        const val = +$(this).val();
        const secondValue = val * fromRate;
        setSecondInputValue(roundToTwoDecimals(secondValue));
      });

      secondInput.on("input", function () {
        const val = +$(this).val();
        const secondValue = val / fromRate;
        setFirstInputValue(roundToTwoDecimals(secondValue));
      });

      firstInput.on("blur", function () {
        if (+$(this).val() === 0 || $(this).val() === "") {
          setFirstInputValue(100000);
          setSecondInputValue(roundToTwoDecimals(100000 * fromRate));
        }
      });

      secondInput.on("blur", function () {
        if (+$(this).val() === 0 || $(this).val() === "") {
          setFirstInputValue(100000);
          setSecondInputValue(roundToTwoDecimals(100000 * fromRate));
        }
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  const scrollToForm = () => {
    $("html, body").scrollTop($("#form-section-block").offset().top);

    // $("html, body").animate(
    //   { scrollTop: $("#form-section-block").offset().top },
    //   3000
    // );
  };

  $(".scrollToForm").click(scrollToForm);
});
