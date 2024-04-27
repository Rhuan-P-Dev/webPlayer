
import { VideoController } from "./videoController.js"
import { HistoricController } from "./historicController.js"

var Video = new VideoController()
var Hisctoric = new HistoricController()

export class SearchController{

    searchResultTab = document.getElementById("searchResultTab")
    search = document.getElementById("search")

    previousSearch = []

    initSearchResultTab(data){

        let template = ""

        let result = ""

        for (let index = 0; index < data.length; index++) {

            template = SearchResultTemplate
            
            template = template.replace("{{URL}}","static/videos/"+data[index])

            let titleFiltred = eraseText(data[index],filterTitleArray).toLowerCase()
            titleFiltred = replaceText(titleFiltred,replaceTitleArray)

            template = template.replace("{{TITLE}}",titleFiltred)
            
            result+=template

        }

        this.searchResultTab.innerHTML = result

        Search.addSearchResultsTriggers()

    }

    addSearchTrigger(){

        let previousSearch = this.previousSearch

        this.search.addEventListener("keyup",function(){

            if(this.value == "ON"){
                Search.showAllSearchResults()
                return
            }

            if(this.value == "OFF"){
                Search.hideAllSearchResults()
                return
            }


            if(previousSearch != []){
                
                for (let index = 0; index < previousSearch.length; index++) {

                    for (let indey = 0; indey < previousSearch[index].length; indey++) {
                        Search.hideSearchResult(previousSearch[index][indey])
                    }
                    
                }

                previousSearch = []
            }

            let splitedSearch = this.value.split("|")

            for (let index = 0; index < splitedSearch.length; index++) {

                let tempValue = splitedSearch[index]
                
                if(tempValue.length >= 2){

                    let videos = Search.getAllSearchResults()
    
                    for (let index = 0; index < videos.length; index++) {

                        if(videos[index].innerText.includes(tempValue)){

                            Search.showSearchResult(videos[index])

                        }

                    }
    
                    previousSearch[previousSearch.length] = videos
    
                }
                
            }
            
        })
    }

    getAllSearchResults(){
        return document.querySelectorAll(".searchResult")
    }

    showAllSearchResults(){
        applyPropertieSearchResults("inline-block")
    }

    hideAllSearchResults(){
        applyPropertieSearchResults("none")
    }

    showSearchResult(element){
        element.style.display = "inline-block"
    }

    hideSearchResult(element){
        element.style.display = "none"
    }

    addSearchResultsTriggers(){
        let videos = Search.getAllSearchResults()
        for (let index = 0; index < videos.length; index++) {
            videos[index].addEventListener("click",function(){
                Video.changeVideo(this.getAttribute("url"))
                Hisctoric.add(this)
            })
        }
    }

}

function applyPropertieSearchResults(propertie){
    let videos = Search.getAllSearchResults()
    for (let index = 0; index < videos.length; index++) {
        videos[index].style.display = propertie
    }
}




var Search = new SearchController()