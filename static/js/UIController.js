
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
            if(Video.getVideoState() == "paused"){
                Video.play()
            }else{
                Video.pause()
            }
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
            UI.setVideoControlsState("open")
        }else{
            UI.hideVideoControls()
            UI.setVideoControlsState("closed")
        }
    }

    getVideoControlsState(){
        return this.videoControls.getAttribute("state")
    }

    setVideoControlsState(state){
        this.videoControls.setAttribute("state", state)
    }

    showVideoControls(){
        this.videoControls.setAttribute("style","")
        this.vidoeArea.setAttribute("style","")
    }

    hideVideoControls(){
        this.videoControls.style.height = "0px"
        this.vidoeArea.style.height = "calc(100% - 15px)"
    }

    switchSerchAreaVisibility(){
        if(UI.getSearchAreaState() == "closed") {
            UI.showSearchArea()
            UI.setSearchAreaState("open")
        }else{
            UI.hideSearchArea()
            UI.setSearchAreaState("closed")
        }
    }

    getSearchAreaState(){
        return this.searchArea.getAttribute("state")
    }
    
    setSearchAreaState(state) {
        this.searchArea.setAttribute("state", state)
    }

    showSearchArea(){
        this.searchArea.setAttribute("style", "")

        this.mainDown.setAttribute("style", "")
        this.historicTab.setAttribute("style", "")
        this.searchResultTab.setAttribute("style", "")
    }

    hideSearchArea(){
        this.searchArea.style.height = "0px"

        this.mainDown.style.height = "calc(100% - 0px)"
        this.historicTab.style.height = "calc(100vh - 0px)"
        this.searchResultTab.style.height = "calc(100vh - 0px)"
    }

}

var UI = new UIController()