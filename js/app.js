window.onload = (event) =>{


/**************** */
//SET UP//
/**************** */

const checkersBoard = [
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
    [0,1,2,3,4,5,6,7],
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

    twoClickStore[0] = true
    console.log(twoClickStore)
}

storeCheck2 =()=>{

    twoClickStore[1] = true

    if( twoClickStore[0] && twoClickStore[1]){

        const moveTo = document.getElementById('33')
        const movingChip = document.getElementById('chip1p2')
        moveTo.append(movingChip)
    
    
    }
    console.log(twoClickStore)
    
}

// if( twoClickStore[0] && twoClickStore[1]){

//     const moveTo = document.getElementById('33')
//     const movingChip = document.getElementById('chip1p2')
//     moveTo.append(moveChip)


// }



document.getElementById('33').addEventListener('click', storeCheck2)



document.getElementById('chip1p2').addEventListener('click', storeCheck1)

//console.log(document.getElementById('chip1p2').addEventListener('click', nextLocation()))


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

}