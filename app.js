$(document).ready(function() {
  const caja = $("#caja");

  $(".color").click(function() {
      const color = $(this).attr("class").split(" ")[1];

      switch (color) {
          case "azul":
              caja.animate({ left: "-=10px" }, 100);
              break;
          case "amarillo":
              caja.animate({ top: "-=10px" }, 100);
              break;
          case "verde":
              caja.animate({ top: "+=10px" }, 100);
              break;
          case "rojo":
              caja.animate({ left: "+=10px" }, 100);
              break;
      }
  });
});
