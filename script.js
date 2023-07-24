




button.addEventListener("click", () => {


    const popup = document.querySelector(".popup1");
    popup.style.display = "none";
    
    input = document.querySelectorAll("input");



    

    

    function countdown() {
        const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const endDate = new Date(date + " " + time);
    document.querySelectorAll(".title")[2].innerText = endDate;
    const sound = new Audio("sound.mp3");

        const end = new Date(endDate);
        const now = new Date;
        diff = (end - now) / 1000;


        if (diff > 0) {
            input[0].value = Math.floor(diff / 3600 / 24);
            input[1].value = Math.floor(diff / 3600) % 24;
            input[2].value = Math.floor(diff / 60) % 60;
            input[3].value = Math.floor(diff % 60);

           

        }

        else if (diff < 0 && diff > -12) {
            sound.play();
            return
        }

        else if (diff < -12){
            popup.style.display = "flex";
            label.innerText = `Set Another Counter`;
            return
        }
        
    }




    countdown();


    setInterval(() => {
        countdown();
    }, 1000);

})