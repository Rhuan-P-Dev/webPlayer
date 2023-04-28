
import { ScrollBarController } from "./scrollBarController.js"

var ScrollBar = ""

docReady(function(){

    ScrollBar = new ScrollBarController()

    setTimeout(browseInit,1)
    
})

function browseInit(){
    ScrollBar.addScrollBarTriggers()

}