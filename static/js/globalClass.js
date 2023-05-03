// Custom Trie
class CustomTrie{

    T = ""

    constructor(T = {}){
        this.T = T
    }
    
    add(string,value){
        let tail = this.T
        let T = this.T
    
        if(T[string[0]] === undefined){
            T[string[0]] = {}
            T.prev = T
        }
    
        T = T[string[0]]
    

        for (let index = 1; index <= string.length; index++) {

            if(T[string[index]] === undefined && index < string.length ){
                T[string[index]] = {}
            }

            T.prev = tail

            if(!tail.value){
                tail.value = []
            }
    
            tail.value[tail.value.length] = value
    
            T = T[string[index]]

            tail = tail[string[index-1]]

        }

        if(!tail.value){
            tail.value = []
        }
    
        tail.value[tail.value.length] = value
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