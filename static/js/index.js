
import { ServerController } from "./serverController.js"
import { ScrollBarController } from "./scrollBarController.js"
import { SearchController } from "./searchController.js"

var Server = ""
var ScrollBar = ""
var Search = ""

docReady(function(){

    Server = new ServerController()
    ScrollBar = new ScrollBarController()
    Search = new SearchController()

    setTimeout(browseInit,1)

})

function browseInit(){

    Server.getAllVideosUrls()

    ScrollBar.addScrollBarTriggers()

    Search.addSearchTrigger()

}