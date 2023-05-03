
import { ServerController } from "./serverController.js"
import { ScrollBarController } from "./scrollBarController.js"
import { SearchController } from "./searchController.js"
import { UIController } from "./UIController.js"
import { VideoController } from "./videoController.js"
import { KeyBoardController } from "./keyBoardController.js"

var Server = ""
var ScrollBar = ""
var Search = ""
var UI = ""
var Video = ""
var KeyBoard = ""

docReady(function(){

    Server = new ServerController()
    ScrollBar = new ScrollBarController()
    Search = new SearchController()
    UI = new UIController()
    Video = new VideoController()
    KeyBoard = new KeyBoardController()

    setTimeout(browseInit,1)

})

function browseInit(){

    Server.getAllVideosUrls()

    ScrollBar.addScrollBarTriggers()

    Search.addSearchTrigger()

    UI.addVideoUITriggers()

    Video.initAutoUpdateTimeBar()

    KeyBoard.addKeyBoardTrigger()

}