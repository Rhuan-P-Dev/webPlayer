
import { ServerController } from "./serverController.js"
import { ScrollBarController } from "./scrollBarController.js"
import { SearchController } from "./searchController.js"
import { UIController } from "./UIController.js"
import { VideoController } from "./videoController.js"

var Server = ""
var ScrollBar = ""
var Search = ""
var UI = ""
var Video = ""

docReady(function(){

    Server = new ServerController()
    ScrollBar = new ScrollBarController()
    Search = new SearchController()
    UI = new UIController()
    Video = new VideoController()

    setTimeout(browseInit,1)

})

function browseInit(){

    Server.getAllVideosUrls()

    ScrollBar.addScrollBarTriggers()

    Search.addSearchTrigger()

    UI.addVideoUITriggers()

    Video.initAutoUpdateTimeBar()

}