
import { VideoController } from "./videoController.js"

var Video = new VideoController()

export class UIController{

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


}

var UI = new UIController()