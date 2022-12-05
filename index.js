let homeScore = document.querySelector(".home-text");
let guestScore = document.querySelector(".guest-text");

let homeBtn = document.querySelectorAll(".home-btn");
let guestBtn = document.querySelectorAll(".guest-btn");
let newGameBtn = document.querySelector(".new-game-btn");

let homeCount=guestCount= 0;


//home score increment 
for(let i=0;i<homeBtn.length;i++){
    homeBtn[i].addEventListener("click",() => {
        // console.log(homeBtn[i].textContent);
        homeBtn[i].textContent === '+1' ? homeCount += 1 : 
        homeBtn[i].textContent === '+2' ? homeCount += 2 : 
        homeBtn[i].textContent === '+3' ? homeCount += 3 : 
        homeCount;

        homeScore.textContent = homeCount;
        highlightLeader();
    })
}


//guest score increment
for(let i=0;i<guestBtn.length;i++){
    guestBtn[i].addEventListener("click", () => {
        // console.log(guestBtn[i].textContent);
        guestBtn[i].textContent === '+1' ? guestCount += 1 :
        guestBtn[i].textContent === '+2' ? guestCount += 2 :
        guestBtn[i].textContent === '+3' ? guestCount += 3 :
        guestCount;

        guestScore.textContent = guestCount;
        highlightLeader();
    })
}

//new game button
newGameBtn.addEventListener("click",() => {
    // console.log("new game");
    homeCount = guestCount = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
})

//highlight leader
function highlightLeader(){
    homeScore > guestScore ? homeScore.style.color = "green" :
    guestScore > homeScore ? guestScore.style.color = "green":
    guestScore;
}
