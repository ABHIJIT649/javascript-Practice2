let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-game-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg"); 




let turnO = true; //player x, player o
 
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes ();
     msgContainer.classList.add("hide");
}


  boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was clicked");
       if(turnO === true){ //playerO
        box.innerText = "O";
        turnO =false;
       } else{ //player x
        box.innerText = "x";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    });
  });


  const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
  }


  const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
  }


  const shoWinner =(winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes();
  }

  const checkWinner = () => {
    
    for(let pattern of winPattern) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
          

    if(pos1Val != "" && pos2Val !=  "" && pos3Val != "")  {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner", pos1Val);
             shoWinner (pos1Val);
        }
    }     
    };

  };

  newGameBtn.addEventListener("click",resetGame );
  resetbtn.addEventListener("click",resetGame );

 