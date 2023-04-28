

export class ScrollBarController{

    historicButton = document.getElementById("historicButton")
    searchResultButton = document.getElementById("searchResultButton")


    addScrollBarTriggers(){

        this.historicButton.addEventListener("click", function(){
            scrollButtonClick(this.parentElement)
        })
        

        this.searchResultButton.addEventListener("click", function(){
            scrollButtonClick(this.parentElement)
        })

    }

}




function scrollButtonClick(element){


    if(element.getAttribute("state") == "closed"){
        openScrollBar(element)
        element.setAttribute("state","open")
    }else{
        closeScrollBar(element)
        element.setAttribute("state","closed")
    }
    
}

function openScrollBar(element){

    let position = ""

    if(element.getAttribute("side") == "left"){
        position = "calc(0px + 0px)"
    }else{
        position = "calc(100vw - 300px)"
    }

    element.style.left = position

}

function closeScrollBar(element){

    let position = ""

    if(element.getAttribute("side") == "left"){
        position = "calc(-300px + 20px)"
    }else{
        position = "calc(100vw - 20px)"
    }

    element.style.left = position

}
