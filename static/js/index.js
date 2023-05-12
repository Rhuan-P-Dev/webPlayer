
import { ServerController } from "./serverController.js"
import { SearchController } from "./searchController.js"
import { UIController } from "./UIController.js"
import { VideoController } from "./videoController.js"
import { KeyBoardController } from "./keyBoardController.js"

var Server = ""
var Search = ""
var UI = ""
var Video = ""
var KeyBoard = ""

docReady(function(){

    Server = new ServerController()
    Search = new SearchController()
    UI = new UIController()
    Video = new VideoController()
    KeyBoard = new KeyBoardController()

    setTimeout(browseInit,1)

})

function browseInit(){

    Server.getAllVideosUrls()

    Search.addSearchTrigger()

    UI.addVideoUITriggers()
    UI.addUIScrollButtonsTriggers()

    Video.initAutoUpdateTimeBar()
    Video.addVideoTimeBarTrigger()

    KeyBoard.addKeyBoardTrigger()

}