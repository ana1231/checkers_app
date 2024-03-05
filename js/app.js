window.onload = (event) =>{


/**************** */
//SET UP//
/**************** */

const checkersBoardPlayer = [
    ["n","1","n","1","n","1","n","1"],
    ["1","n","1","n","1","n","1","n"],
    ["n","1","n","1","n","1","n","1"],
    ["0","n","0","n","0","n","0","n"],
    ["n","0","n","0","n","0","n","0"],
    ["2","n","2","n","2","n","2","n"],
    ["n","2","n","2","n","2","n","2"],
    ["2","n","2","n","2","n","2","n"]
]

/**************** */
/**************** */

const boardIdLocation = [
    ["0", "1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10","11","12","13","14","15"],
    ["16","17","18","19","20","21","22","23"],
    ["24","25","26","27","28","29","30","31"],
    ["32","33","34","35","36","37","38","39"],
    ["40","41","42","43","44","45","46","47"],
    ["48","49","50","51","52","53","54","55"],
    ["56","57","58","59","60","61","62","63"],
]


/**************** */
/**************** */

//12 Chips
const chips =[]

for(i=1;i<13;i++){
    chips.push(i)
}

/**************** */
/**************** */


class Player {

    constructor(playerNumber){
        this.chipSet = {}
        this.playerNumber = playerNumber
    }

    setUpChipAttributes(){
        for(i=0;i<chips.length; i++){

            const chipString = `chip${chips[i]}p${this.playerNumber}`
            const chipLocation = document.getElementById(chipString)


            this.chipSet[`${chips[i]}`] = {
                    "taken":false,
                    "king":false,
                    "chipID":chipString,
                    "location":chipLocation
                }
        }
            
    }



}


/**************** */
/**************** */



const player1 = new Player(1)
player1.setUpChipAttributes()

console.log(player1)


const player2 = new Player(2)
player2.setUpChipAttributes()

console.log(player2)





const twoClickStore = [false,false]

storeCheck1 =()=>{


    
    console.log("storeCheck1")
    console.log("parentID: " + chipParentID)
    console.log("clickID: " + chipClickID)

    twoClickStore[0] = true
    console.log("twoClickStore : " + twoClickStore)
    const movingChip = document.getElementById(`${chipClickID}`)
    movingChip.style.backgroundColor = "rgb(255, 153, 0)"
    console.log("movingChip : ")
    console.log(movingChip)
    possibleUpmove()
}

storeCheck2 =()=>{

    console.log("storeChecks2")

    console.log(possibleBoardMove2)
    console.log(boardClickID)

    twoClickStore[1] = true
    const movingChip = document.getElementById(`${chipClickID}`)


    if( twoClickStore[0] && twoClickStore[1] && possibleMoveCheck){

        if (possibleBoardMove2 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove2}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 

        }
        
        else if (possibleBoardMove1 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove1}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 

        } else {
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
        }
   
    }
    else{
        movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
    }
    //movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
    console.log(twoClickStore)
    
}

let possibleMoveCheck =false
let possibleBoardMove1 = ''
let possibleBoardMove2 = ''
let northIndex = ''
let southIndex = ''
let westIndex = ''
let eastIndex = ''

possibleMoveResetParams =()=>{
    possibleMoveCheck =false
    possibleBoardMove1 = ''
    possibleBoardMove2 = ''
    northIndex = ''
    southIndex = ''
    westIndex = ''
    eastIndex = ''
}

const possibleUpmove = () =>{

    possibleMoveResetParams()

    console.log("possibleUpmove")
    for (let i=0; i<boardIdLocation.length; i++){
        for (let j=0; j<boardIdLocation[i].length; j++){

            if(boardIdLocation[i][j] ===chipParentID){

                northIndex = i-1
                westIndex = j-1
                eastIndex = j+1
                //console.log(boardIdLocation[i][j])

                if(northIndex > 0 && northIndex < 8){

                    if(westIndex > 0 && westIndex < 8 && checkersBoardPlayer[northIndex][westIndex] ==="0"){

                        possibleBoardMove1 = boardIdLocation[northIndex][westIndex]
                        possibleMoveCheck = true
                        console.log(possibleBoardMove1)
                    }

                    if( eastIndex > 0 && eastIndex < 8 && checkersBoardPlayer[northIndex][eastIndex] ==="0"){
    
                        possibleBoardMove2 = boardIdLocation[northIndex][eastIndex]
                        possibleMoveCheck = true
                        console.log(possibleBoardMove2)
                    }
    

                }



            }
            
        }

    }

}

const possibleDownmove = () =>{

    possibleMoveResetParams()

    console.log("possibleDownmove")
    for (let i=0; i<boardIdLocation.length; i++){
        for (let j=0; j<boardIdLocation[i].length; j++){

            if(boardIdLocation[i][j] ===chipParentID){

                northIndex = i-1
                westIndex = j-1
                eastIndex = j+1
                //console.log(boardIdLocation[i][j])

                if(northIndex > 0 && northIndex < 8){

                    if(westIndex > 0 && westIndex < 8 && checkersBoardPlayer[northIndex][westIndex] ==="0"){

                        possibleBoardMove1 = boardIdLocation[northIndex][westIndex]
                        possibleMoveCheck = true
                        console.log(possibleBoardMove1)
                    }

                    if( eastIndex > 0 && eastIndex < 8 && checkersBoardPlayer[northIndex][eastIndex] ==="0"){
    
                        possibleBoardMove2 = boardIdLocation[northIndex][eastIndex]
                        possibleMoveCheck = true
                        console.log(possibleBoardMove2)
                    }
    

                }



            }
            
        }

    }
   
}



/* 
Site Help: https://rajatamil.medium.com/get-id-of-clicked-element-in-javascript-46f4f688b890
*/

/**************** */
//CHIP CLICK INFO
/**************** */
let chipParentID =''
let chipClickID=''

const chipClickInfo =(param) =>{


    chipClickID = param.target.id
    chipParentID = param.target.parentNode.id
    storeCheck1()
    param.stopPropagation()

}

/**************** */
//BOARD CLICK INFO
/**************** */

let boardClickID =''

const boardClickInfo =(param) =>{

    boardClickID = param.target.id
    console.log("boardClickedID: " + boardClickID)
    storeCheck2()

}



/**************** */
//ADD EVENT LISTENER
/**************** */

for( let i=0; i<64; i++){

    document.getElementById(`${i}`).addEventListener('click', boardClickInfo)

}

for (let i=1; i<3; i++){

    for(let j=1; j<13; j++){
        
        document.getElementById(`chip${j}p${i}`).addEventListener('click', chipClickInfo)

    }
}







/**************** */
/**************** */

/*
Start Game

Player 1 turn

Player 1 clicks chip

Player 1 clicks new location

Chip moves to new location

*/



//    console.log(document.getElementById('chip2p2'))
//     document.getElementById('programming').addEventListener('click', ()=>{runJoke(apiUrl.programming)})
//
//site Help: https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document
//    // window.onclick = (param) => {
    //     console.log(param.target); // to get the element
    //     clickID = param.target.id
    //     console.log(clickID)
    //     parentID = param.target.parentNode.id
    //     console.log(parentID)

    //     //console.log(param.target.tagName);  // to get the element tag name alone
    // } 









}