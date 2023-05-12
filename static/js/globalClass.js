// Custom Trie
class CustomTrie{

    T = ""

    constructor(T = {}){
        this.T = T
    }
    
    add(string,value){
        let T = this.T

        for (let index = 0; index <= string.length; index++) {

            if(T[string[index]] === undefined && index < string.length ){
                T[string[index]] = {}
            }

            if(!T.value){
                T.value = []
            }
    
            T.value[T.value.length] = value
    
            T = T[string[index]]

        }

    }

    search(string){
        let T = this.T
        for (let index = 0; index <= string.length; index++) {
    
            if(index == string.length){
                return T.value
            }
    
            if(T[string[index]] === undefined){
                return 
            }
    
            T = T[string[index]]
        }
    }

}