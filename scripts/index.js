// // // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // // Get the header
// var header = document.getElementById("text-header");

// var nav = document.querySelector("#navbar");
// var navlink = document.querySelector(".navlink");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         console.log(document.querySelector("#navTop nav"));
//         nav.classList.add("stickyNav");
//         nav.style.background="#04B2D9";
//         nav.style.boxShadow = "box-shadow: 0 2px 2px -2px rgba(0,0,0,.2)";
//   } else {
//         nav.classList.remove("stickyNav");
//         nav.style.background="transparent";
//   }
// }
$("body").niceScroll();

