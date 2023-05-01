function docReady(fn) {
    // stack overflow
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function eraseText(text,array){
    for (let index = 0; index < array.length; index++) {

        let oldText = ""

        do{
            oldText = text

            text = text.replace(array[index],"")

        }while(text != oldText)

    }
    return text
}

function replaceText(text,array){
    for (let index = 0; index < array[0].length; index++) {

        let oldText = ""

        do{
            oldText = text

            text = text.replace(array[0][index],array[1][index])

        }while(text != oldText)

    }
    return text
}