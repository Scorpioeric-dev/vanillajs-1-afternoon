let board = [];
function play (clickedId){
   let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId)
   if(playerSpan.innerText === 'X'){
       playerSpan.innerText = '0';
       clickedElement.innerText = 'X';
       board[clickedId] = 'X'
   } else {
       playerSpan.innerText = 'X';
       clickedElement.innerText = 'O';
       board[clickedId] = 'O'
   }
   console.log(board);

//creating variables for each individual square
let topLeft =board[0];
let topCenter =board[1];
let topRight = board[2];
let middleLeft =board[3];
let middleCenter =board[4];
let middleRight =board[5];
let bottomLeft =board[6];
let bottomCenter =board[7];
let bottomRight =board[8];


//use an if statements to determine the winner or if no one won.
// checks all winner combination
if (topLeft !== undefined && topLeft === topCenter && topLeft ===topRight){
    alert(`${topLeft} is the winner`);
    return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft===middleRight){
    alert(`${middleLeft} is the winner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft ===middleCenter && topLeft ==bottomLeft){
    alert(`${topLeft} is the winner`);
    return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`${topCenter} is the winner`);
    return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`${topRight} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`${topLeft} is the winner`);
    return;
}
if(bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topright){
    alert(`${bottomLeft} is the winner`);
    return;
}
// if(bottomCenter !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
//     alert(`${bottomright} is the winner`);
// }
// determines if the board is full ,alerts when it is

let boardFull = true;
for( let i = 0;i <= 8; i++){
    if(board[i]===undefined){
    boardFull = false;
    }

}
if(boardFull === true){
    alert("Cat's game, it's a draw");
}
}


