
import { VideoController } from "./videoController.js"
import { UIController } from "./UIController.js"

var Video = new VideoController()
var UI = new UIController()

const keyBoardFunctions = {"ArrowUp":Video.volumeUp,
                            "ArrowDown":Video.volumeDown,
                            " ":Video.switchPlayState,
                            "ArrowRight":Video.next,
                            "ArrowLeft":Video.previous,
                            "Escape": function(){
                                UI.switchScrollTabClosed(UI.getLeftTab())
                                UI.switchScrollTabClosed(UI.getRightTab())
                            },
                            "Home": function(){Video.setCurrentTime(0)}
                        }

const keyBoardShiftFunctions = {"Backspace":UI.switchVideoControlsVisibility,
                                "Enter":UI.switchSerchAreaVisibility,
                                "Delete":function(){
                                    UI.switchVideoControlsVisibilityClosed()
                                    UI.switchSerchAreaVisibilityClosed()
                                    keyBoardFunctions["Escape"]()
                                },
                                "ArrowRight":Video.nextExtreme,
                                "ArrowLeft":Video.previousExtreme}

export class KeyBoardController{

    addKeyBoardTrigger(){

        document.querySelector("html").addEventListener("keydown",function(e){
            if(keyBoardFunctions[e["key"]] && !e["shiftKey"]){
                keyBoardFunctions[e["key"]]()
            }

            if(keyBoardShiftFunctions[e["key"]] && e["shiftKey"]){
                keyBoardShiftFunctions[e["key"]]()
            }

        })
    
    }

}