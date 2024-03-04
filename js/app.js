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



//    console.log(document.getElementById('chip2p2'))
//     document.getElementById('programming').addEventListener('click', ()=>{runJoke(apiUrl.programming)})

}