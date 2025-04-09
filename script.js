
    document.addEventListener("DOMContentLoaded", function() {
        const exampleText = ['Apprentit.', 'en Deve', 'Web & Mobile'];
        const exampleTyping = new AutoTyping('.typewriter-text', exampleText, {
            typeSpeed: 50,
            deleteSpeed: 50,
            waitBeforeDelete: 2000,
            waitBetweenWords: 500,
        });
        exampleTyping.start()
    });


    document.getElementById('cvbtn').addEventListener("click", () =>{
        window.location.href = "cv.html";
      });