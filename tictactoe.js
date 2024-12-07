const prompt = require("prompt-sync")()
const b = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
function compute(turn, b) {
    while (true) {
        const row = parseInt(prompt("Enter the Row: "));
        const col = parseInt(prompt("Enter the Column: "));

        if (isNaN(row) || row < 0 || row >= b.length) {
            console.log("Invalid row. Try again.");
            continue; // Retry input
        } else if (isNaN(col) || col < 0 || col >=b.length) {
            console.log("Invalid column. Try again.");
            continue; // Retry input
        } else if (b[row][col] !== " ") {
            console.log("Cell already occupied. Try again.");
            continue; // Retry input
        } else {
            b[row][col] = turn; // Place the marker
            break; // Exit the loop after successful input
        }
    }
}
function print(b){
      for(let i=0;i<b.length;i++)
      {
              const r=b[i]
              let rowString=""
              for(let j=0;j<r.length;j++){
                rowString+=r[j]
                if(j!==r.length-1) rowString += "|"

              }
              console.log(rowString)
              if(i!==b.length-1)
                console.log("-------")
      }
}
function win(b,turn){
    const lines=[
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,1],[1,1],[2,1]],
        [[0,0],[1,0],[2,0]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];
    for(let l of lines){
        let win =true;
        for(let pos of l){
            const [row,col]=pos;
            if(b[row][col] !== turn){
                win =false
                break
            }
           
        }
        if(win) return true
    }
    return false;
}

let turn ="X"
let count=0
print(b)
console.log()
while(count<9)
{
    console.log(turn + " turns ")
    compute(turn,b)
    print(b)
    console.log()
   const ans= win(b,turn)
   if(ans)
   {
          
    console.log("HURRAY " + turn + "  WINS")
    break
   }
    if(turn =="X") turn ="O"
    else turn = "X"
    count++;
}
    

