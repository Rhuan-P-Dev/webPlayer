
import { VideoController } from "./videoController.js"
import { UIController } from "./UIController.js"

var Video = new VideoController()
var UI = new UIController()

const keyBoardFunctions = {"ArrowUp":Video.volumeUp,
                            "ArrowDown":Video.volumeDown,
                            " ":Video.switchPlayState,
                            "ArrowRight":Video.next,
                            "ArrowLeft":Video.previous}

const keyBoardShiftFunctions = {"Backspace":UI.switchVideoControlsVisibility,
                                "Enter":UI.switchSerchAreaVisibility}

export class KeyBoardController{

    addKeyBoardTrigger(){

        document.querySelector("html").addEventListener("keydown",function(e){
            if(keyBoardFunctions[e["key"]]){
                keyBoardFunctions[e["key"]]()
            }

            if(keyBoardShiftFunctions[e["key"]] && e["shiftKey"]){
                keyBoardShiftFunctions[e["key"]]()
            }

        })
    
    }

}