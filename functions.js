//THIS FILE IS USED TO CONTAIN ALL THE FUNCTIONS CALLED IN BY DIFFERENT PAGES AROUND THE SITE

//MENU FUNCTIONS
function newsMobileSubMenu() {
  enquire.register("screen and (max-width:767px)", {
    match: function () {
      $(
        '<div class="m-mobnews m-subnav">Filter<div class="submenuBtn"><span></span><span></span><span></span></div></div>'
      ).insertBefore(".l-pagebody");
      $(".m-blogmenu").hide();
      $(".submenuBtn").click(function () {
        $(".m-blogmenu").stop().slideToggle();
        $(this).toggleClass("open");
      });
    },
    unmatch: function () {
      $(".m-mobnews").remove();
      $(".m-blogmenu").show();
    },
  });
}

// GRID TOGGLE
function toggleGrid() {
  $(".toggle-grid a").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("show-grid");
  });
}

function servicesGridMatchHeight() {
  $(".m-services .e-box").matchHeight({
    byRow: false,
  });
}

// VIDEO
function video() {
  $(".video").fitVids();
}

//ACCORDION FUNCTIONS
function generalAccordion() {
  $(".m-accordionItem .more").hide();

  $(".m-accordionItem")
    .stop()
    .on("click", ".e-title", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).siblings(".more").stop().slideUp();
      } else {
        $(".m-accordion .m-accordionItem .e-title").removeClass("open");
        $(".m-accordion .m-accordionItem .more").slideUp();
        $(this).addClass("open");
        $(this).siblings(".more").stop().slideDown();
      }
    });
}

//LOAN CALCULATOR
function loadCalc() {
  var amount = parseInt($(".amount-val").val());
  var duration = parseInt($(".duration-val").val());
  var APR = 0.165;
  var totalAmount = Math.ceil(amount + (amount * APR + duration));

  $(".borrow-amount").html("&pound;" + amount);
  $(".total-repay-amount").html("&pound;" + totalAmount);
}

//HERO SLIDER
function heroSlider() {
  $(".hero-slider").slick({
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 8000,

    onInit: function () {
      $(".slick-active .slider-text").fadeIn();
    },
    onBeforeChange: function () {
      $(".hero-slider .slider-text").fadeOut();
    },
    onAfterChange: function () {
      $(".slick-active .slider-text").fadeIn();
    },

    customPaging: function (slider, i) {
      return (
        '<button class="tab">' +
        $(slider.$slides[i]).find(".slide-title").text() +
        "</button>"
      );
    },
  });

  $(".hero-slider ul.slick-dots").wrapAll('<div class="hero-nav"></div>');
}

function slickDots() {
  if ($(window).width() > 767) {
    var width =
      $(".hero-nav ul").width() / $(".hero-nav ul.slick-dots li").length;
    $(".hero-slider ul.slick-dots li").css("width", width);
  } else {
    $(".hero-slider ul.slick-dots li").css("width", "auto");
  }

  $(".hero-slider .slider-text").each(function () {
    $(this).css({
      "margin-left": -$(this).outerWidth() / 2,
      "margin-top": -$(this).outerHeight() / 2 + $("header").height() / 2 - 150,
      left: "50%",
      top: "50%",
    });
  });

  setTimeout(function () {
    $(".hero-slider .slider-text").each(function () {
      $(this).css({
        "margin-left": -$(this).outerWidth() / 2,
        "margin-top":
          -$(this).outerHeight() / 2 + $("header").height() / 2 - 150,
        left: "50%",
        top: "50%",
      });
    });
  }, 200);
}

//CLIENT CAROUSEL
function clientCarousel() {
  $(".m-clientcarousel .slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    dots: true,
    speed: 400,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 400,
          arrows: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if ($("section").hasClass("m-clientcarousel")) {
    $(".m-clientcarousel .inner").matchHeight();
  }
}

//TWITTER CAROUSEL
function twitterCarousel() {
  $(".m-twittercarousel .slides").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    dots: true,
    speed: 400,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 767,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 400,
          arrows: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if ($("section").hasClass("m-twittercarousel")) {
    $(".m-twittercarousel .inner").matchHeight();
  }
}

//DOCUMENT CAROUSEL
function documentCarousel() {
  $(".m-4documentcarousel .slide").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    draggable: false,
    dots: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

//5050CAROUSEL
function fiftycarousel() {
  $(".m-5050carousel .slider").slick({
    dots: true,
    autoplay: false,
    infinite: false,
  });
}

//SEARCH FILTERS
function filters() {
  $(".filters ul li a").click(function () {
    $(this).toggleClass("active");
    return false;
  });

  $(".filter-type").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-type-options").addClass("active");
    }
  });

  $(".filter-format").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-format-options").addClass("active");
    }
  });

  $(".filter-area").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-area-options").addClass("active");
    }
  });

  $(".filter-sector").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-sector-options").addClass("active");
    }
  });

  $(".filter-workshops").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-workshops-options").addClass("active");
    }
  });

  $(".filter-networking").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-networking-options").addClass("active");
    }
  });

  $(".filter-location").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".filters").removeClass("active");
    } else {
      $(".filters").removeClass("active");
      $(".filter-buttons li a").removeClass("active");
      $(this).addClass("active");
      $(".filter-location-options").addClass("active");
    }
  });
}

//SOCIAL SHARE
function shareToFacebook(url, language) {
  if (url == null) {
    url = getCurrentUrlToShare(language);
  }
  var shareUrl = "http://www.facebook.com/sharer.php?u=" + url;
  shareToSocialMedia(shareUrl);
}

function shareToTwitter(url, language) {
  if (url == null) {
    url = getCurrentUrlToShare(language);
  }
  var shareUrl = "http://twitter.com/intent/tweet?status=" + url;
  shareToSocialMedia(shareUrl);
}

function shareToLinkedIn(url, language) {
  if (url == null) {
    url = getCurrentUrlToShare(language);
  }
  var shareUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
  shareToSocialMedia(shareUrl);
}

function shareToGooglePlus(url, language) {
  if (url == null) {
    url = getCurrentUrlToShare(language);
  }
  var shareUrl = "https://plus.google.com/share?url=" + url;
  shareToSocialMedia(shareUrl);
}

function getCurrentUrlToShare(language) {
  var location = window.location;
  var origin = location.origin;
  var pathname = location.pathname;
  var currentUrl = origin + pathname + location.search;
  increaseSocialShareVersionNumber();
  currentUrl = updateQueryStringParameter(currentUrl, "language", language);
  currentUrl = updateQueryStringParameter(
    currentUrl,
    "ver",
    localStorage["socialShareVersion"]
  );
  currentUrl = endcodeSocialShareUrl(currentUrl);

  return currentUrl;
}

function shareToSocialMedia(shareUrl) {
  window.open(shareUrl, "newwindow", "width=300, height=250");
  return false;
}

function endcodeSocialShareUrl(url) {
  url = url.replace(/&/g, "%26");
  url = url.replace(/#/g, "%23");
  url = url.replace(/\+/g, "%2B");

  return url;
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}

function increaseSocialShareVersionNumber() {
  var currentVersionNumber = localStorage["socialShareVersion"];
  if (!currentVersionNumber) {
    localStorage["socialShareVersion"] = 0;
  } else {
    localStorage["socialShareVersion"] =
      parseInt(localStorage["socialShareVersion"]) + 1;
  }
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function validateSearchField() {
  $("#keywords").keypress(function (e) {
    if (e.which == 13) {
      if ($.trim($("#keywords").val()) === "") {
        return false;
      }
    }
  });
}

function jumpToFormValidation() {
  $(".contour input[type='submit']").on("click", function () {
    if ($(".umbraco-forms-field .input-validation-error")[0]) {
      $("html, body").animate(
        {
          scrollTop: $(".input-validation-error")
            .first()
            .closest(".umbraco-forms-field")
            .offset().top,
        },
        500,
        "linear",
        function () {
          $(".input-validation-error").first().focus();
        }
      );
    }
  });
}

Array.prototype.remove = function () {
  var what,
    a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
