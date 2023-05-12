
import { VideoController } from "./videoController.js"
import { HistoricController } from "./historicController.js"

var Video = new VideoController()
var Hisctoric = new HistoricController()

var searchTrie = new CustomTrie()

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

                    let videos = searchTrie.search(tempValue)
    
                    for (let index = 0; index < videos.length; index++) {
                        Search.showSearchResult(videos[index])
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

    initCustomTrie(){
        let videos = Search.getAllSearchResults()
        for (let index = 0; index < videos.length; index++) {

            let titleSplited = videos[index].innerText.split(" ")

            for (let indey = 0; indey < titleSplited.length; indey++) {

                if(titleSplited[indey].length >= 3){
                    searchTrie.add(titleSplited[indey],videos[index])
                }

            }
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