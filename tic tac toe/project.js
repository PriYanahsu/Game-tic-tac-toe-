let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset");
let newgamebtn= document.querySelector(".new-game");
let messagecontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#message")

let turn0 = true; //playerx, player0

// posible winner
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
];


// click and get X 0
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box got clicked");
        if(turn0){
            box.innerText = "0";
            turn0 =false;
        }
        else{
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled= true;

        checkWinner();
    });
});


// winner find through compae each value to the data
const checkWinner = () =>{
    for(pattern of winPattern) {
        let post1value=(boxes[pattern[0]].innerText)
        let post2value=(boxes[pattern[1]].innerText)
        let post3value=(boxes[pattern[2]].innerText);

        if(post1value!="" && post2value!="" && post3value!=""){
            if(post1value==post2value && post2value==post3value){
                console.log("winner", post1value);
                showWinner(post1value);
            }
        }
    }
}
// post value goes to winner
const showWinner = (winner) => {
    msg.innerText=`Congratulation, winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disablebox();
}

const disablebox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const resetGame = () =>{
    true0 = true;
    enablebox();
    messagecontainer.classList.add("hide");
}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
 