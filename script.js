let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGame = document.querySelector("#new-btn");
let message = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.textContent = "O";
            turnO = false;
        } else {
            box.textContent = "X";
            turnO = true;
        }
        // Disable the box after it has been clicked
        box.classList.add("disabled");
        box.style.pointerEvents = "none";
        checkWinner();
    });
});


const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    message.textContent = `CONGRATULATIONS! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos0 = boxes[pattern[0]].textContent;
        let pos1 = boxes[pattern[1]].textContent;
        let pos2 = boxes[pattern[2]].textContent;

        if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
            if (pos0 === pos1 && pos1 === pos2) {
                showWinner(pos1);
                return;
            }
        }
    }
};
const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}



reset.addEventListener("click", resetgame);
newGame.addEventListener("click", resetgame);
