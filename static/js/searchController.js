
export class SearchController{

    searchResultTab = document.getElementById("searchResultTab")
    search = document.getElementById("search")

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

    }

    addSearchTrigger(){
        // TODO: add a Trie
        this.search.addEventListener("keyup",function(){
            if(this.value == "ON"){
                Search.showAllSearchResults()
                return
            }
            if(this.value == "OFF"){
                // dead code?
                Search.hideAllSearchResults()
                return
            }
            if(this.value.length > 1){

                let videos = Search.getAllSearchResults()

                for (let index = 0; index < videos.length; index++) {
                    
                    if(videos[index].innerText.match(this.value)){
                        Search.showSearchResult(videos[index])
                    }else{
                        Search.hideSearchResult(videos[index])
                    }

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
}
function applyPropertieSearchResults(propertie){
    let videos = Search.getAllSearchResults()
    for (let index = 0; index < videos.length; index++) {
        videos[index].style.display = propertie
    }
}




var Search = new SearchController()