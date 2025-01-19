$(document).ready(() => {
  if (typeof jQuery !== "undefined") {
    console.log("reee");

    $("header").load("/include/header.html", () => {
      const cartButton = document.getElementById("cartButton");
      const cartSidebar = document.getElementById("cartSidebar");
      const closeSidebar = document.getElementById("closeSidebar");

      if (cartButton) {
        cartButton.addEventListener("click", () => {
          cartSidebar.classList.add("open");
        });
      }

      if (closeSidebar) {
        closeSidebar.addEventListener("click", () => {
          cartSidebar.classList.remove("open");
        });
      }

      document.addEventListener("click", (e) => {
        if (!cartSidebar.contains(e.target) && !cartButton.contains(e.target)) {
          cartSidebar.classList.remove("open");
        }
      });

      document.getElementById("homeButton").addEventListener("click", () => {
        window.location.href = "/index.html"; // 이동할 URL
      });
    });

    $("footer").load("/include/footer.html");

  } else {
    console.log("jQuery not loaded");
  }
  $(".dropdown").hover(
    () => {
      $(this).find(".allMenuBox").fadeIn(200);
    },
    () => {
      $(this).find(".allMenuBox").fadeOut(200);
    }
  );
});
