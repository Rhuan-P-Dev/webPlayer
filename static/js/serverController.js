
import { SearchController } from "./searchController.js"

var Search = new SearchController()

export class ServerController {

    getAllVideosUrls(){
        socket.send({'cmd': "getVideosUrls"})
    }

}

socket.on('from_server', function(msg) {
    if(msg.cmd == "allVideosUrls"){
        Search.initSearchResultTab(msg.data)
    }
})
