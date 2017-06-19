function saveOs(os) {
  Cookies.get("os", os, { expires: 1825, path: '/' }); // expires in 5 years
}

function loadOs() {
  var osFromCookie = Cookies.get("os");
  if(osFromCookie) {
    $(".os-specific").find("." + osFromCookie + "-link").click();
  } else if(detectOs()) {
    $(".os-specific").find("." + detectOs() + "-link").click();
  } else {
    $(".os-specific").find(".win-link").click();
  }
  return osFromCookie;
}

function detectOs() {
  try {
    if (navigator.appVersion.match(/Win/i)) {
      return "win";
    } else {
      return "nix";
    }
  } catch(e) {
    return false;
  }
}

function addIcons() {
  $("code.language-sh, code.language-bat").closest('.highlight').before('<i class="icon-small-prompt"></i>');
  $("code.language-erb, code.language-html, code.language-ruby, code.language-css").closest('.highlight').before('<i class="icon-small-text-editor"></i>');
  $("code.language-browser").closest('.highlight').before('<i class="icon-small-browser"></i>');
}

function initializeOsSwitchers() {
  $(".os-specific").append("<span class='picker'>운영체제 선택: <a href='#' class='win-link'>윈도우즈</a> | <a href='#' class='nix-link'>기타</a></span>").find(".win-link").click(function(event) {
    event.preventDefault();
    saveOs("win");

    $(".os-specific .win-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".win").show();
  }).end().find(".nix-link").click(function(event) {
    event.preventDefault();
    saveOs("nix");

    $(".os-specific .nix-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".nix").show();
  });
}

$(document).ready(function() {
  addIcons();
  initializeOsSwitchers();
  loadOs();
});
