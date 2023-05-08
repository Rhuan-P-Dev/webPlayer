
import { VideoController } from "./videoController.js"

var Video = new VideoController()

export class HistoricController{

    historicTab = document.getElementById("historicTab")

    add(element){
        let copy = element.cloneNode(true)
        copy.setAttribute("class","clickable")
        historicTab.insertAdjacentElement("afterbegin",copy)
        Historic.addTrigger(copy)
    }

    addTrigger(element){
        element.addEventListener("click",function(){
            Video.setSrc(this.getAttribute("url"))
        })
    }

}

var Historic = new HistoricController()