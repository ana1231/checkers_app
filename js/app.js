window.onload = (event) =>{


/**************** */
//SET UP//
/**************** */

/* TRACKS PLAYER LOCATION ON THE BOARD*/ 

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

/* BOARD IDs CORRESPONDING TO THE PLAYER LOCATIONS*/ 

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




/**************** */
/**************** */

/** Player 1 always starts first */

let turn = ["2"]
let opponent = ["1"] 

/**Print whose Turn it is */

const whoseTurn=(turn)=>{

    if(turn[0]==="1"){
        console.log("Player 1 turn")
    } else{
        console.log("Player 2 turn")
    }

}

/**************** */
/**************** */

/* Time to change players */

const changeTurn = (turn)=>{
    const header2Tag = document.querySelector('h2')

    if(turn[0]==="1"){
        turn[0]="2"
        opponent[0]="1"
        console.log("Now it's Player 2's turn")
        header2Tag.innerText="Turn: Player 2"
        
    } else{
        turn[0]="1"
        opponent[0]="2"
        console.log("Now it's Player 1's turn")
        header2Tag.innerText="Turn: Player 1"
    }

}

/**************** */
/**************** */

/** Check win logic
 * (1) all chips were captured
 * OR
 * (2) the player can no longer move
 */

const winCheck = () =>{

    //can make a move
    //can still have pieces

    console.log("***********winCheck")

    console.log("****************winCheck")
    console.log("canPlayerMove(turn): " + canPlayerMove(turn))
    console.log("areAnypiecesLeft(turn): " + areAnypiecesLeft(turn))

    if (canPlayerMove(turn) && areAnypiecesLeft(turn)){

        console.log("continue to play")
    } else {

        const header2Tag = document.querySelector('h2')
        const textString = "Player " + opponent[0] + " Wins!"
        header2Tag.innerText=textString

    }




}

/**************** */
/**************** */

/** Check (2) for win Logic */
const canPlayerMove=(turn)=>{

    console.log("***********canPlayerMove")
    let answer = false

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){

            if(checkersBoardPlayer[i][j]===turn[0]){

                const boardID = document.getElementById(`${boardIdLocation[i][j]}`)
                const chipTest = boardID.firstElementChild
                chipParentID
                console.log("chip")
                console.log(chipTest)

                if(chipTest.innerText==="K"){

                    possiblemoveK(boardIdLocation[i][j])
                    possibleMoveToTakeK(currentI, currentJ,boardIdLocation[i][j])
                    console.log("possibleMoveCheck: " + possibleMoveCheck)
                    console.log("possibleTakeOpponentCheck: "+ possibleTakeOpponentCheck)

                    if(possibleMoveCheck || possibleTakeOpponentCheck){

                        answer = true

                    }

                }else{

                    possiblemove(boardIdLocation[i][j])
                    possibleMoveToTake(currentI, currentJ, boardIdLocation[i][j])
                    console.log("possibleMoveCheck: " + possibleMoveCheck)
                    console.log("possibleTakeOpponentCheck: "+ possibleTakeOpponentCheck)

                    if(possibleMoveCheck || possibleTakeOpponentCheck){

                        answer = true

                    }

                }

            }

            const boardID = document.getElementById(`${boardIdLocation[i][j]}`)
            const chipTest = boardID.firstElementChild


        }
    }

    console.log("turn: " + turn[0])
    console.log("possibleMoveCheck: " + possibleMoveCheck)
    console.log("possibleTakeOpponentCheck: "+ possibleTakeOpponentCheck)
    console.log("Can the player move?: " +answer)
    return answer

}

/**************** */
/**************** */

/** Check (1) for win Logic */
const areAnypiecesLeft=(turn)=>{

    let answer = false

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){

            if(checkersBoardPlayer[i][j]===turn[0]){

                answer=true


            }
        }
    }

    return true
}

/**************** */
/**************** */

/** Tracks the [chip click, board click] */
let twoClickStore = [false,false]

/** Sets first click as true and calculates all possilbe moves */
const storeCheck1 =()=>{


  
    console.log("***********storeCheck1")

    whoseTurn(turn)
    console.log("parentID: " + chipParentID)
    console.log("clickID: " + chipClickID)

    twoClickStore[0] = true
    console.log("twoClickStore : " + twoClickStore)
    const movingChip = document.getElementById(`${chipClickID}`)

    console.log("movingChip : ")
    console.log(movingChip)
    console.log("movingChip innerText: ")
    console.log(movingChip.innerText)
    
    if(movingChip.innerText==="K"){

        possiblemoveK(chipParentID)
        possibleMoveToTakeK(currentI, currentJ,  chipParentID)

    } 
    else {
        possiblemove(chipParentID)
        possibleMoveToTake(currentI, currentJ,chipParentID)

    }
    

    



    console.log("substring: "+chipClickID[(chipClickID.length)-1])
    
    if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){

        movingChip.style.backgroundColor = "rgb(69, 185, 224)"//blue
        

    } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

        movingChip.style.backgroundColor = "rgb(255, 153, 0)"//orange
        
    }
    
    
}

/**************** */
/**************** */

/**This moves the chip, calculates if chip is now K,  */
const storeCheck2 =()=>{

    console.log("***********storeChecks2")
    whoseTurn(turn)

    
    console.log("boardClickID: "+boardClickID)
    console.log("possibleBoardMove1: "+possibleBoardMove1)
    console.log("possibleBoardMove2: "+possibleBoardMove2)
    console.log("possibleBoardMove3: "+possibleBoardMove3)
    console.log("possibleBoardMove4: "+possibleBoardMove4)
    console.log("possibleBoardMove5: "+possibleBoardMove5)
    console.log("possibleBoardMove6: "+possibleBoardMove6)
    console.log("possibleBoardMove7: "+possibleBoardMove7)
    console.log("possibleBoardMove8: "+possibleBoardMove8)

    twoClickStore[1] = true
    
    const movingChip = document.getElementById(`${chipClickID}`)
    
    console.log("movingChip : ")
    console.log(movingChip)
    console.log("movingChip innerText: ")
    console.log(movingChip.innerText)
    
    if(movingChip.innerText==="K"){

        moveChipK()

    } 
    else {

        moveChip()

    }



    
    
    printBoardpieces()


    
}

/**************** */
/**************** */

/** The chip is only be moved if a possible move was selected
 * If a possible move was selected, it will run the following for a simple move:
 * -update chips location on board
 * -check if it now a King
 * -change turns
 * -check win condition
 * 
 * If it is a move to take a chip
 * -run take opponent function
 * -update chips location on board
 * -check if it now a King
 * -change turns
 * -check win condition
 */

const moveChip =()=>{

    console.log("***********moveChip")
    const movingChip = document.getElementById(`${chipClickID}`)


    if( twoClickStore[0] && twoClickStore[1] && possibleMoveCheck){
        /********* */
        if (possibleBoardMove2 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove2}`)
            
            moveTo.append(movingChip)
            //movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][eastIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex][eastIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(northIndex,eastIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex][eastIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(northIndex,eastIndex)
                changeTurn(turn)
                winCheck()
            }



        }

        /********* */
        
        else if (possibleBoardMove1 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove1}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex][westIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(northIndex,westIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex][westIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(northIndex,westIndex)
                changeTurn(turn)
                winCheck()
            }
        

        } 
        /********* */
        /********* */

        else if (possibleBoardMove3 === boardClickID && possibleTakeOpponentCheck){
    
            const moveTo = document.getElementById(`${possibleBoardMove3}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex2][westIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 

                takeOpponent(opponentNorthIndex,opponentWestIndex)
                isChipKing(northIndex2,westIndex2)
                changeTurn(turn)
                winCheck()
                

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex2][westIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentNorthIndex,opponentWestIndex)
                isChipKing(northIndex2,westIndex2)
                changeTurn(turn)
                winCheck()
                
            }
        

        } 
        /********* */
        /********* */
        
        else if (possibleBoardMove4 === boardClickID && possibleTakeOpponentCheck){
           
            const moveTo = document.getElementById(`${possibleBoardMove4}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex2][eastIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                takeOpponent(opponentNorthIndex,opponentEastIndex)
                isChipKing(northIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex2][eastIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentNorthIndex,opponentEastIndex)
                isChipKing(northIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            }
        

        } 
        /********* */        

        else {
            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){

                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
            }
        }
        /********* */
   
    }
    else{
        if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
            movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
        } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

            movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
        }
    }

}


/**************** */
/**************** */

/** Similar to above, but now for the King logic
 * The chip is only be moved if a possible move was selected
 * If a possible move was selected, it will run the following for a simple move:
 * -update chips location on board
 * -check if it now a King
 * -change turns
 * -check win condition
 * 
 * If it is a move to take a chip
 * -run take opponent function
 * -update chips location on board
 * -check if it now a King
 * -change turns
 * -check win condition
 */


const moveChipK =()=>{

    console.log("***********moveChipK")
    const movingChip = document.getElementById(`${chipClickID}`)


    if( twoClickStore[0] && twoClickStore[1] && possibleMoveCheck){
        /********* */
        if (possibleBoardMove1 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove1}`)
            
            moveTo.append(movingChip)
            //movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][eastIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex][westIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(northIndex,westIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex][westIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(northIndex,westIndex)
                changeTurn(turn)
                winCheck()
            }



        }

        /********* */
        /********* */
        
        else if (possibleBoardMove2 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove2}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex][eastIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(northIndex,eastIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex][eastIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(northIndex,eastIndex)
                changeTurn(turn)
                winCheck()
            }
        

        } 

        /********* */
        /********* */
        
        else if (possibleBoardMove3 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove3}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[southIndex][westIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(southIndex,westIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[southIndex][westIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(southIndex,westIndex)
                changeTurn(turn)
                winCheck()
            }
        

        } 

        /********* */
        /********* */
        
        else if (possibleBoardMove4 === boardClickID){
           
            const moveTo = document.getElementById(`${possibleBoardMove4}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[southIndex][eastIndex]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                isChipKing(southIndex,eastIndex)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[southIndex][eastIndex]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                isChipKing(southIndex,eastIndex)
                changeTurn(turn)
                winCheck()
            }
        

        } 

        /********* */
        /********* */

        else if (possibleBoardMove5 === boardClickID && possibleTakeOpponentCheck){
    
            const moveTo = document.getElementById(`${possibleBoardMove5}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex2][westIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 

                takeOpponent(opponentNorthIndex,opponentWestIndex)
                isChipKing(northIndex2,westIndex2)
                changeTurn(turn)
                winCheck()
                

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex2][westIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentNorthIndex,opponentWestIndex)
                isChipKing(northIndex2,westIndex2)
                changeTurn(turn)
                winCheck()
                
            }
        

        } 

        /********* */
        /********* */
        
        else if (possibleBoardMove6 === boardClickID && possibleTakeOpponentCheck){
           
            const moveTo = document.getElementById(`${possibleBoardMove6}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[northIndex2][eastIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                takeOpponent(opponentNorthIndex,opponentEastIndex)
                isChipKing(northIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[northIndex2][eastIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentNorthIndex,opponentEastIndex)
                isChipKing(northIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            }
        

        } 

        /********* */
        /********* */
        
        else if (possibleBoardMove7 === boardClickID && possibleTakeOpponentCheck){
           
            const moveTo = document.getElementById(`${possibleBoardMove7}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[southIndex2][westIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                takeOpponent(opponentSouthIndex,opponentWestIndex)
                isChipKing(southIndex2,westIndex2)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[southIndex2][westIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentSouthIndex,opponentWestIndex)
                isChipKing(southIndex2,westIndex2)
                changeTurn(turn)
                winCheck()
            }
        

        } 

        /********* */
        /********* */
        
        else if (possibleBoardMove8 === boardClickID && possibleTakeOpponentCheck){
           
            const moveTo = document.getElementById(`${possibleBoardMove8}`)
            
            moveTo.append(movingChip)
            movingChip.style.backgroundColor = "rgb(255, 198, 93)" 
            checkersBoardPlayer[currentI][currentJ]="0"
            //checkersBoardPlayer[northIndex][westIndex]="2"

            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
                checkersBoardPlayer[southIndex2][eastIndex2]="1"
                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
                takeOpponent(opponentSouthIndex,opponentEastIndex)
                isChipKing(southIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                checkersBoardPlayer[southIndex2][eastIndex2]="2"
                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
                takeOpponent(opponentSouthIndex,opponentEastIndex)
                isChipKing(southIndex2,eastIndex2)
                changeTurn(turn)
                winCheck()

            }
        

        } 

        /********* */        

        else {
            if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){

                movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 

            } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

                movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
            }
        }
        /********* */
   
    }
    else{
        if(turn[0]==="1" && chipClickID[(chipClickID.length)-1]==="1"){
            movingChip.style.backgroundColor = "rgb(145, 208, 229)"//light blue 
        } else if((turn[0]==="2" && chipClickID[(chipClickID.length)-1]==="2")) {

            movingChip.style.backgroundColor = "rgb(255, 198, 93)"//light orange 
        }
    }

}


/**************** */
/**************** */

/** Print Board */

const printBoardpieces=()=>{

    console.log("***********printBoardpieces")
    for(let i= 0; i <8 ;i++){
        console.log(i +": " + checkersBoardPlayer[i])

    }

}

/**************** */
/**************** */

let possibleMoveCheck =false
let possibleTakeOpponentCheck =false
let possibleBoardMove1 = ''
let possibleBoardMove2 = ''
let possibleBoardMove3 = ''
let possibleBoardMove4 = ''
let possibleBoardMove5 = ''
let possibleBoardMove6 = ''
let possibleBoardMove7 = ''
let possibleBoardMove8 = ''
let northIndex = ''
let southIndex = ''
let westIndex = ''
let eastIndex = ''
let currentI=''
let currentJ=''
let opponentNorthIndex = ''
let opponentSouthIndex = ''
let opponentWestIndex = ''
let opponentEastIndex = ''
let northIndex2 = ''
let southIndex2 = ''
let westIndex2 = ''
let eastIndex2 = ''

/**************** */
/**************** */

/**Resets the variables going into the possible move checks */

const possibleMoveResetParams =()=>{
    possibleMoveCheck =false
    possibleTakeOpponentCheck =false
    possibleBoardMove1 = ''
    possibleBoardMove2 = ''
    possibleBoardMove3 = ''
    possibleBoardMove4 = ''
    possibleBoardMove5 = ''
    possibleBoardMove6 = ''
    possibleBoardMove7 = ''
    possibleBoardMove8 = ''
    northIndex = ''
    southIndex = ''
    westIndex = ''
    eastIndex = ''
    currentI=''
    currentJ=''
    opponentNorthIndex = ''
    opponentSouthIndex = ''
    opponentWestIndex = ''
    opponentEastIndex = ''
    north2Index = ''
    south2Index = ''
    west2Index = ''
    east2Index = ''
}

/**************** */
/**************** */

/**Checks 2 possible moves */

const possiblemove = (chipParentID) =>{

    possibleMoveResetParams()

    console.log("***********possiblemove")
    for (let i=0; i<boardIdLocation.length; i++){
        for (let j=0; j<boardIdLocation[i].length; j++){

            if(boardIdLocation[i][j] ===chipParentID){

                if(turn[0]==="1"){
                    northIndex = i+1
                } else{
                    northIndex = i-1
                }

                //northIndex = i-1
                westIndex = j-1
                eastIndex = j+1

                currentI = i
                currentJ = j
                //console.log(boardIdLocation[i][j])

                console.log("northIndex: " +northIndex)
                console.log("westIndex: "+westIndex)
                console.log("eastIndex: "+eastIndex)

                if(northIndex >= 0 && northIndex < 8){

                    if(westIndex >= 0 && westIndex < 8 && checkersBoardPlayer[northIndex][westIndex] ==="0"){

                        possibleBoardMove1 = boardIdLocation[northIndex][westIndex]
                        possibleMoveCheck = true
                        console.log("possibleBoardMove1: "+possibleBoardMove1)
                    }

                    if( eastIndex >= 0 && eastIndex < 8 && checkersBoardPlayer[northIndex][eastIndex] ==="0"){
    
                        possibleBoardMove2 = boardIdLocation[northIndex][eastIndex]
                        possibleMoveCheck = true
                        console.log("possibleBoardMove2: "+possibleBoardMove2)
                    }
    

                }



            }
            
        }

    }

    console.log("possibleMoveCheck: " + possibleMoveCheck)
    console.log("possibleTakeOpponentCheck: "+ possibleTakeOpponentCheck)



}




/**************** */
/**************** */

/**Checks 4 possible moves */

const possiblemoveK = (chipParentID) =>{

    possibleMoveResetParams()

    console.log("***********possiblemoveK")
    for (let i=0; i<boardIdLocation.length; i++){
        for (let j=0; j<boardIdLocation[i].length; j++){

            if(boardIdLocation[i][j] ===chipParentID){

                northIndex = i-1
                southIndex = i+1

                //northIndex = i-1
                westIndex = j-1
                eastIndex = j+1

                currentI = i
                currentJ = j
                //console.log(boardIdLocation[i][j])

                console.log("northIndex: " +northIndex)
                console.log("southIndex: " +southIndex)
                console.log("westIndex: "+westIndex)
                console.log("eastIndex: "+eastIndex)

                if(northIndex >= 0 && northIndex < 8){

                    if(westIndex >= 0 && westIndex < 8 ){

                        if(checkersBoardPlayer[northIndex][westIndex] ==="0"){

                            possibleBoardMove1 = boardIdLocation[northIndex][westIndex]
                            possibleMoveCheck = true
                            console.log("possibleBoardMove1: "+possibleBoardMove1)


                        }

                    }

                    if( eastIndex >= 0 && eastIndex < 8){

                        if(checkersBoardPlayer[northIndex][eastIndex] ==="0"){

                            possibleBoardMove2 = boardIdLocation[northIndex][eastIndex]
                            possibleMoveCheck = true
                            console.log("possibleBoardMove2: "+possibleBoardMove2)


                        }
    

                    }
    

                }

                if(southIndex >= 0 && southIndex < 8){

                    if(westIndex >= 0 && westIndex < 8 ){

                        if(checkersBoardPlayer[southIndex][westIndex] ==="0"){
                            possibleBoardMove3 = boardIdLocation[southIndex][westIndex]
                            possibleMoveCheck = true
                            console.log("possibleBoardMove3: "+possibleBoardMove3)
                        
                        }

                    }

                    if( eastIndex >= 0 && eastIndex < 8){

                        if(checkersBoardPlayer[southIndex][eastIndex] ==="0"){
                            possibleBoardMove4 = boardIdLocation[southIndex][eastIndex]
                            possibleMoveCheck = true
                            console.log("possibleBoardMove4: "+possibleBoardMove4)
                        }
    

                    }
    

                }



            }
            
        }

    }

}





/**************** */
/**************** */

/** Checks 2 possible take moves*/

const possibleMoveToTake = (currentI, currentJ,chipParentID ) =>{

    //possibleMoveResetParams()

    console.log("***********possibleMoveToTake")
    const i=currentI
    const j=currentJ 


    if(boardIdLocation[i][j] ===chipParentID){

        if(turn[0]==="1"){
            opponentNorthIndex = i+1
            northIndex2 = i+2
        } else{
            //northIndex = i-1
            opponentNorthIndex = i-1
            northIndex2 = i-2
        }
        
        
        opponentWestIndex = j-1
        opponentEastIndex = j+1

        
        westIndex2 = j-2
        eastIndex2 = j+2

        // currentI = i
        // currentJ = j

        console.log("northIndex2 : " + northIndex2)
        console.log("westIndex2 : " + westIndex2)
        console.log("eastIndex2 : " + eastIndex2)
        console.log("opponentNorthIndex: " +opponentNorthIndex)
        console.log("opponentWestIndex: " +opponentWestIndex)
        console.log("opponentEastIndex: " +opponentEastIndex)
        console.log("opponent: "+ opponent[0])

        //console.log(boardIdLocation[i][j])

        if(northIndex2 >= 0 && northIndex2 < 8 && opponentNorthIndex >0 && opponentNorthIndex<7){

            if(westIndex2 >= 0 && westIndex2 < 8 && checkersBoardPlayer[northIndex2][westIndex2] ==="0" && checkersBoardPlayer[opponentNorthIndex][opponentWestIndex] === opponent[0] ){

                possibleBoardMove3 = boardIdLocation[northIndex2][westIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove3: "+possibleBoardMove3)
            }

            if( eastIndex2 >= 0 && eastIndex2 < 8 && checkersBoardPlayer[northIndex2][eastIndex2] ==="0" && checkersBoardPlayer[opponentNorthIndex][opponentEastIndex] === opponent[0] ){

                possibleBoardMove4 = boardIdLocation[northIndex2][eastIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove4: "+possibleBoardMove4)
            }


        }



    }

    console.log("possibleBoardMove1: "+possibleBoardMove1)
    console.log("possibleBoardMove2: "+possibleBoardMove2)
    console.log("possibleBoardMove3: "+possibleBoardMove3)
    console.log("possibleBoardMove4: "+possibleBoardMove4)
}


/**************** */
/**************** */

/**Checks 4 possible take moves */

const possibleMoveToTakeK = (currentI, currentJ,chipParentID ) =>{

    //possibleMoveResetParams()

    console.log("***********possibleMoveToTakeK")
    const i=currentI
    const j=currentJ 

    console.log("currentI: "+currentI)
    console.log("currentJ: "+currentJ)


    if(boardIdLocation[i][j] ===chipParentID){

        
        opponentNorthIndex = i - 1
        opponentSouthIndex = i + 1
        opponentWestIndex = j-1
        opponentEastIndex = j+1

        northIndex2 = i-2
        southIndex2 = i+2
        westIndex2 = j-2
        eastIndex2 = j+2

        // currentI = i
        // currentJ = j

        console.log("northIndex2 : " + northIndex2)
        console.log("southIndex2 : " + southIndex2)
        console.log("westIndex2 : " + westIndex2)
        console.log("eastIndex2 : " + eastIndex2)
        console.log("opponentNorthIndex: " + opponentNorthIndex)
        console.log("opponentSouthIndex: " + opponentSouthIndex)
        console.log("opponentWestIndex: " + opponentWestIndex)
        console.log("opponentEastIndex: " + opponentEastIndex)
        console.log("opponent: "+ opponent[0])

        //console.log(boardIdLocation[i][j])

        if(northIndex2 >=0 && northIndex2 < 8 && opponentNorthIndex >0 && opponentNorthIndex < 7){

            if(westIndex2 >= 0 && westIndex2 < 8 && checkersBoardPlayer[northIndex2][westIndex2] ==="0" && checkersBoardPlayer[opponentNorthIndex][opponentWestIndex] === opponent[0] ){

                possibleBoardMove5 = boardIdLocation[northIndex2][westIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove5: "+possibleBoardMove5)
            }

            if( eastIndex2 >= 0 && eastIndex2 < 8 && checkersBoardPlayer[northIndex2][eastIndex2] ==="0" && checkersBoardPlayer[opponentNorthIndex][opponentEastIndex] === opponent[0] ){

                possibleBoardMove6 = boardIdLocation[northIndex2][eastIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove6: "+possibleBoardMove6)
            }


        }

        if(southIndex2 >=0 && southIndex2 < 8 && opponentSouthIndex >0 && opponentSouthIndex < 7){

            if(westIndex2 >= 0 && westIndex2 < 8 && checkersBoardPlayer[southIndex2][westIndex2] ==="0" && checkersBoardPlayer[opponentSouthIndex][opponentWestIndex] === opponent[0] ){

                possibleBoardMove7 = boardIdLocation[southIndex2][westIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove7: "+possibleBoardMove7)
            }

            if( eastIndex2 >= 0 && eastIndex2 < 8 && checkersBoardPlayer[southIndex2][eastIndex2] ==="0" && checkersBoardPlayer[opponentSouthIndex][opponentEastIndex] === opponent[0] ){

                possibleBoardMove8 = boardIdLocation[southIndex2][eastIndex2]
                possibleTakeOpponentCheck =true
                possibleMoveCheck=true
                console.log("possibleBoardMove8: "+possibleBoardMove8)
            }


        }



    }

    console.log("possibleBoardMove1: "+possibleBoardMove1)
    console.log("possibleBoardMove2: "+possibleBoardMove2)
    console.log("possibleBoardMove3: "+possibleBoardMove3)
    console.log("possibleBoardMove4: "+possibleBoardMove4)
    console.log("possibleBoardMove5: "+possibleBoardMove5)
    console.log("possibleBoardMove6: "+possibleBoardMove6)
    console.log("possibleBoardMove7: "+possibleBoardMove7)
    console.log("possibleBoardMove8: "+possibleBoardMove8)
}

/**************** */
/**************** */

/* https://medium.com/codex/how-to-traverse-the-dom-in-javascript-7fece4a7751c */
const takeOpponent=(x,y)=>{

    console.log("***********takeOpponent")
    const opponentLocation = boardIdLocation[x][y]
    console.log('opponentLocaiton: '+ opponentLocation)
    const boardID = document.getElementById(`${opponentLocation}`)
    console.log('boardID: '+ boardID)
    const deleteChip = boardID.firstElementChild
    console.log("deleteChip: "+ deleteChip)
    checkersBoardPlayer[x][y]="0"

    if(turn[0]==="1"){

        const bucket = document.getElementById('p2bucket')
        bucket.append(deleteChip)
        

    }
    else{

        const bucket = document.getElementById('p1bucket')
        bucket.append(deleteChip)

    }



    //boardIdLocation[i][j] ===chipParentID
    //const deleteChip = document.getElementById(`${chipClickID}`)



}

/**************** */
/**************** */

/** checks if chip made it to the end and is now a King */
const isChipKing =(x,y)=>{
    
    console.log("***********isChipKing")
    console.log("x: "+x)
    console.log("y: "+y)
    const chipLocation = boardIdLocation[x][y]
    console.log('chipLocation: '+ chipLocation)
    const boardID = document.getElementById(`${chipLocation}`)
    console.log('boardID: '+ boardID)
    const chipToKing = boardID.firstElementChild
    console.log("chipToKing: "+ chipToKing)
 

    if(turn[0]==="1" && x >6){
        
        chipToKing.innerText="K"
        
        console.log("chipToKing:")
        console.log(chipToKing)

    }else if(turn[0]==="2" && x < 1){

        chipToKing.innerText="K"
        
        console.log("chipToKing:")
        console.log(chipToKing)

    }


}







/**************** */
/**************** */



/* 
Site Help: https://rajatamil.medium.com/get-id-of-clicked-element-in-javascript-46f4f688b890
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation
*/

/**************** */
//CHIP CLICK INFO
/**************** */
let chipParentID =''
let chipClickID=''

const chipClickInfo =(param) =>{


    chipClickID = param.target.id
    chipParentID = param.target.parentNode.id
    twoClickStore = [false,false]
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
    
    if(twoClickStore[0] === true){
    
        storeCheck2()

    }

    //storeCheck2()

}



/**************** */
//ADD EVENT LISTENER
/**************** */


for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){

        if(checkersBoardPlayer[i][j]!=="n"){

            document.getElementById(`${boardIdLocation[i][j]}`).addEventListener('click', boardClickInfo)
        }
    }
}


// for( let i=0; i<64; i++){

//     document.getElementById(`${i}`).addEventListener('click', boardClickInfo)

// }

for (let i=1; i<3; i++){

    for(let j=1; j<13; j++){
        
        document.getElementById(`chip${j}p${i}`).addEventListener('click', chipClickInfo)

    }
}







/**************** */
/**************** */
// END
/**************** */
/**************** */


}