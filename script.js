let boards=[

]

randomNumbers=[]
let bingoNode=document.getElementById("bingo-container")
let bodyNode=document.querySelector("body")
let boardButtonNode=document.getElementById("boardButton")
let boardInputNode=document.getElementById("boardInput")
let randomNumberNode=document.getElementById("randomNumber")


function onload(){
    
    
    for(let number=1;number<=76;number++){
        
        let numberNode=document.createElement("div")
        numberNode.classList.add("number")
        numberNode.innerText=number
        boards.push(bingoNode.appendChild(numberNode))

    }
   
}




console.log(boards)
  

 randomNumber.addEventListener("click",createRandom=>{
    
   let div= document.getElementsByClassName("number")
   let random=Math.floor(Math.random()*76)
   randomNumbers.push(random)
    for(i=0;i<=div.length;i++){
        
        if(div[i].innerText=random){
            div[i].classList.add("selected")
            
        }
       
    }
  }
 )

 boardButtonNode.addEventListener("click",createBoards=>{
  let boardNumber=boardInputNode.innerText
    for(i=0;i<=boardNumber;i++){
    let h2=document.createElement("h2")
    h2.innerText=`Game board ${boardNumber}`
    let array=[]
    boards.push(array)

   
    bodyNode.appendChild(h2)
    
    for(let number=0;number<24;number++){
        let random=Math.floor(Math.random()*76)
        let numberNode=document.createElement("div")
        numberNode.classList.add("number")
        numberNode.innerText=random
        
       let newBoard=[bodyNode.appendChild(numberNode)]
       array.push(newBoard)
     
    }
}
  }
 )
window.onload= onload()