
import { VideoController } from "./videoController.js"

var Video = new VideoController()

export class UIController{

    videoControls = document.getElementById("videoControls")
    vidoeArea = document.getElementById("vidoeArea")
    searchArea = document.getElementById("searchArea")
    mainDown = document.getElementById("mainDown")
    historicTab = document.getElementById("historicTab")
    searchResultTab = document.getElementById("searchResultTab")


    previousExtreme = document.getElementById("previousExtreme")
    previous = document.getElementById("previous")
    pause = document.getElementById("pause")
    next = document.getElementById("next")
    nextExtreme = document.getElementById("nextExtreme")
    up = document.getElementById("up")
    down = document.getElementById("down")
        

    addVideoUITriggers(){
        this.pause.addEventListener("click",function(){
            Video.switchPlayState()
        })

        this.next.addEventListener("click",function(){
            Video.next()
        })

        this.nextExtreme.addEventListener("click",function(){
            Video.nextExtreme()
        })

        this.previous.addEventListener("click",function(){
            Video.previous()
        })
        
        this.previousExtreme.addEventListener("click",function(){
            Video.previousExtreme()
        })

        this.up.addEventListener("click",function(){
            Video.volumeUp()
        })
        
        this.down.addEventListener("click",function(){
            Video.volumeDown()
        })

    }

    switchVideoControlsVisibility(){
        if(UI.getVideoControlsState() == "closed"){
            UI.showVideoControls()
            UI.constrictVideoArea()
            UI.setVideoControlsState("open")
        }else{
            UI.hideVideoControls()
            UI.extendVideoArea()
            UI.setVideoControlsState("closed")
        }
    }

    extendVideoArea(){
        this.vidoeArea.style.height = "calc(100% - 15px)"
    }

    constrictVideoArea(){
        this.vidoeArea.setAttribute("style","")
    }

    getVideoControlsState(){
        return this.videoControls.getAttribute("state")
    }

    setVideoControlsState(state){
        this.videoControls.setAttribute("state", state)
    }

    showVideoControls(){
        this.videoControls.setAttribute("style","")
    }

    hideVideoControls(){
        this.videoControls.style.height = "0px"
    }

    switchSerchAreaVisibility(){
        if(UI.getSearchAreaState() == "closed") {
            UI.showSearchArea()
            UI.constrictMainDown()
            UI.constrictHistoricTab()
            UI.constrictSearchResultTab()
            UI.setSearchAreaState("open")
        }else{
            UI.hideSearchArea()
            UI.extendMainDown()
            UI.extendHistoricTab()
            UI.extendSearchResultTab()
            UI.setSearchAreaState("closed")
        }
    }

    getSearchAreaState(){
        return this.searchArea.getAttribute("state")
    }
    
    setSearchAreaState(state) {
        this.searchArea.setAttribute("state", state)
    }

    constrictMainDown(){
        this.mainDown.setAttribute("style", "")
    }

    constrictHistoricTab(){
        this.historicTab.setAttribute("style", "")
    }

    constrictSearchResultTab(){
        this.searchResultTab.setAttribute("style", "")
    }

    extendMainDown(){
        this.mainDown.style.height = "calc(100% - 0px)"
    }

    extendHistoricTab(){
        this.historicTab.style.height = "calc(100vh - 0px)"
    }

    extendSearchResultTab(){
        this.searchResultTab.style.height = "calc(100vh - 0px)"
    }

    showSearchArea(){
        this.searchArea.setAttribute("style", "")
    }

    hideSearchArea(){
        this.searchArea.style.height = "0px"
    }

}

var UI = new UIController()