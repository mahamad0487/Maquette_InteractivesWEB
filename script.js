
let typed = new Typed(".auto-input", {
    strings: ["Apprenant", "Developer", "Web - Mobile"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })


    document.getElementById('cvbtn').addEventListener("click", () =>{
        window.location.href = "cv.html";
      });