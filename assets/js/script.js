// Scroll To Top Button
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    scrollTop.style.transform = "scale(1)";
    scrollTop.style.right = "30px";
  } else {
    scrollTop.style.transform = "scale(0)";
    scrollTop.style.right = "0";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// On Document Scroll
let headerScroll = document.querySelector("header");

document.addEventListener("scroll", () => {
  if (scrollY > 50) {
    headerScroll.classList.add("scrolled");
  } else {
    headerScroll.classList.remove("scrolled");
  }
});

document.addEventListener("contextmenu", () => {
  return null;
});

// On Reel Right Click (contextmenu)
let DrobDownMenu = document.querySelector(".menu-dropDown");
let OverlayDrobDownMenu = document.querySelector(".overlay");
let DrobDownMenuRefereshListItem = document.querySelector(
  ".menu-dropDown ul li.refresh-listItem"
);
let DrobDownMenuInspectListItem = document.querySelector(
  ".menu-dropDown ul li.inspect-listItem"
);
let dropDownListItemsLocation = document.querySelectorAll(
  ".menu-dropDown ul li[data-locate]"
);

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  DrobDownMenu.style.left = e.clientX + "px";
  DrobDownMenu.style.top = e.clientY + "px";
  DrobDownMenu.style.display = "block";
  OverlayDrobDownMenu.style.display = "block";
});

OverlayDrobDownMenu.addEventListener("click", () => {
  DrobDownMenu.style.display = "none";
  OverlayDrobDownMenu.style.display = "none";
});

DrobDownMenu.addEventListener("click", () => {
  DrobDownMenu.style.display = "none";
  OverlayDrobDownMenu.style.display = "none";
});

DrobDownMenuRefereshListItem.addEventListener("click", () => {
  window.location.reload();
});

DrobDownMenuInspectListItem.addEventListener("click", () => {
  alert("Press F12 Or Ctrl+Shift+I Or Ctrl+Shift+C To Open Developer Tools.");
});

dropDownListItemsLocation.forEach((li) => {
  li.addEventListener("click", () => {
    window.location.href = `#${li.dataset.locate}`;
  });
});

// On Menu Icon Click (Show Un Order List)
let unOrderlist = document.querySelector("header ul");
let listItems = document.querySelectorAll("header ul li");
let menu = document.querySelector("header .container .menu");

// Loop On List Items
listItems.forEach((li) => {
  // Add Active Class On Li Click
  li.addEventListener("click", () => {
    // Remove Active Class On All List Items
    listItems.forEach((liRemove) => liRemove.classList.remove("active"));
    li.classList.add("active");

    // Go To Section From Dataset Location
    location.href = `#${li.dataset.location}`;
  });
});

// Active Header Item On Scrolled
let listItemsScroll = document.querySelectorAll("header ul li");
let sectionScroll = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  sectionScroll.forEach((section) => {
    let sectionHeight = section.offsetHeight;
    let sectionTop = section.offsetTop - 50;
    let sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      listItemsScroll.forEach((li) => li.classList.remove("active"));

      let activeLink = document.querySelector(
        `header ul li[data-location='${sectionId}']`
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
});
menu.addEventListener("click", (e) => {
  unOrderlist.style.left = "0";
  e.stopPropagation();
});
document.addEventListener("click", () => {
  unOrderlist.style.left = "-100%";
});

// Change Box Shadow In Home Section
let homeShadow = document.querySelector(".home");
let homeShadowList = ["-10px 0px", "0px -20px", "10px 0px", "20px 10px"];

setInterval(() => {
  let homeShadowListRandom =
    homeShadowList[Math.floor(Math.random() * homeShadowList.length)];
  homeShadow.style.setProperty(
    "--home-shadow",
    `${homeShadowListRandom} 1000px #d62a3562`
  );
}, 500);

// On Testimonials Icon (.stars-icon) Hover

let startsIcons = document.querySelectorAll(".testimonials .stars-icon i");
startsIcons.forEach((icon) => {

  let defaultClass = icon.className;

  if (icon.classList.contains("bx-star")) {
    icon.addEventListener("mouseenter", () => {
      icon.classList.replace("bx-star", "bxs-star");
    });
  } else if (icon.classList.contains("bxs-star")) {
    icon.addEventListener("mouseenter", () => {
      icon.classList.replace("bxs-star", "bx-star");
    });
  }
  icon.addEventListener("mouseleave", () => {
    icon.className = defaultClass
  })
});

// Faq Show Text And Remove
let faqs = document.querySelectorAll(".question");

faqs.forEach((faq) => {
  let text = faq.querySelector(".question-text");
  let icon = faq.querySelector("i");

  faq.addEventListener("click", () => {
    if (text.classList.contains("showed")) {
      text.classList.remove("showed");
      icon.classList.replace("bx-minus", "bx-plus");
    } else {
      faqs.forEach((faqRemove) => {
        let textRemove = faqRemove.querySelector(".question-text");
        let iconRemove = faqRemove.querySelector("i");

        textRemove.classList.remove("showed");
        iconRemove.classList.replace("bx-minus", "bx-plus");
      });
      text.classList.add("showed");
      icon.classList.replace("bx-plus", "bx-minus");
    }
  });
});
// On Contact Input Foucs (Move Label)
let inputs = document.querySelectorAll(
  ".contact form .input-field input,.contact form .input-field textarea"
);
let submitButton = document.querySelector(".contact form button");

inputs.forEach((input) => {
  let label = input.previousElementSibling;

  input.addEventListener("focus", () => {
    label.style.top = "-11px";
  });

  input.addEventListener("blur", () => {
    if (input.value == "") {
      label.style.top = "15px";
    }
  });
});

// Set Year In Footer Text
let fullYear = document.querySelector("footer .footer-text span");

let date = new Date();

fullYear.innerHTML = date.getFullYear();
