$(() => {
   $('.card').animate({right: '100px', top: '5px'}, 500);

   const pronounce = document.createElement("audio")
    pronounce.src = "pronounce.mp3";
    $(".name").click(function() {
    pronounce.play();
  });
});
