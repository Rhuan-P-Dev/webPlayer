
export class VideoController{

    video = document.getElementById("video")

    setSrc(src){
        this.video.setAttribute("Src",src)
    }

}

var Video = new VideoController()