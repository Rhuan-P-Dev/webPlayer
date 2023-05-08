
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
    
    historicButton = document.getElementById("historicButton")
    searchResultButton = document.getElementById("searchResultButton")

    leftTab = document.getElementById("longHeightBarHistoric")
    rightTab = document.getElementById("longHeightBarSearchResult")

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
            UI.switchVideoControlsVisibilityOpen()
        }else{
            UI.switchVideoControlsVisibilityClosed()
        }
    }

    switchVideoControlsVisibilityOpen(){
        UI.showVideoControls()
        UI.constrictVideoArea()
        UI.setVideoControlsState("open")
    }

    switchVideoControlsVisibilityClosed(){
        UI.hideVideoControls()
        UI.extendVideoArea()
        UI.setVideoControlsState("closed")
    }

    extendVideoArea(){
        this.vidoeArea.style.height = "calc(100% - 15px)"
    }

    constrictVideoArea(){
        UI.setAttribute(this.vidoeArea,"style","")
    }

    getVideoControlsState(){
        return this.videoControls.getAttribute("state")
    }

    setVideoControlsState(state){
        UI.setAttribute(this.videoControls,"state",state)
    }

    showVideoControls(){
        UI.setAttribute(this.videoControls,"style","")
    }

    hideVideoControls(){
        this.videoControls.style.height = "0px"
    }

    switchSerchAreaVisibility(){
        if(UI.getSearchAreaState() == "closed") {
            UI.switchSerchAreaVisibilityOpen()
        }else{
            UI.switchSerchAreaVisibilityClosed()
        }
    }

    switchSerchAreaVisibilityOpen(){
        UI.showSearchArea()
        UI.constrictMainDown()
        UI.constrictHistoricTab()
        UI.constrictSearchResultTab()
        UI.setSearchAreaState("open")
    }

    switchSerchAreaVisibilityClosed(){
        UI.hideSearchArea()
        UI.extendMainDown()
        UI.extendHistoricTab()
        UI.extendSearchResultTab()
        UI.setSearchAreaState("closed")
    }

    getSearchAreaState(){
        return this.searchArea.getAttribute("state")
    }
    
    setSearchAreaState(state) {
        UI.setAttribute(this.searchArea,"state",state)
    }

    constrictMainDown(){
        UI.setAttribute(this.mainDown,"style","")
    }

    constrictHistoricTab(){
        UI.setAttribute(this.historicTab,"style","")
    }

    constrictSearchResultTab(){
        UI.setAttribute(this.searchResultTab,"style","")
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
        UI.setAttribute(this.searchArea,"style","")
    }

    hideSearchArea(){
        this.searchArea.style.height = "0px"
    }

    addUIScrollButtonsTriggers(){

        this.historicButton.addEventListener("click", function(){
            UI.switchScrollTab(this.parentElement)
        })

        this.searchResultButton.addEventListener("click", function(){
            UI.switchScrollTab(this.parentElement)
        })

    }

    switchScrollTab(element){
        if(element.getAttribute("state") == "closed"){
            UI.openScrollBar(element.getAttribute("side"))
            element.setAttribute("state","open")
        }else{
            UI.closeScrollBar(element.getAttribute("side"))
            element.setAttribute("state","closed")
        }
        
    }

    openScrollBar(side){

        let position = ""
        let element = ""
    
        if(side == "left"){
            element = this.leftTab
            position = "calc(0px + 0px)"
        }else{
            element = this.rightTab
            position = "calc(100vw - 300px)"
        }
    
        element.style.left = position
    
    }

    closeScrollBar(side){

        let position = ""
        let element = ""
        
        if(side == "left"){
            element = this.leftTab
            position = "calc(-300px + 20px)"
        }else{
            element = this.rightTab
            position = "calc(100vw - 20px)"
        }
    
        element.style.left = position
    
    }

    getLeftTab(){
        return this.leftTab
    } 
    
    getRightTab(){
        return this.rightTab
    }

    setAttribute(element,name,value){
        element.setAttribute(name,value)
    }

}

var UI = new UIController()