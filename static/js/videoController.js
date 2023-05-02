
export class VideoController{

    video = document.getElementById("video")
    videoTimeBar = document.getElementById("videoTimeBar")

    setSrc(src){
        this.video.setAttribute("Src",src)
    }

    play(){
        this.video.play()
        Video.setVideoState("play")
    } 
    
    pause(){
        this.video.pause()
        Video.setVideoState("paused")
    }

    next(){
        Video.setCurrentTime(Video.getCurrentTime() + 5)
    }

    nextExtreme(){
        Video.setCurrentTime(Video.getCurrentTime() + 15)
    }
    
    previous(){
        Video.setCurrentTime(Video.getCurrentTime() - 5)
    }
    
    previousExtreme(){
        Video.setCurrentTime(Video.getCurrentTime() - 15)
    }

    setCurrentTime(time){
        this.video.currentTime = time
    }

    getCurrentTime(){
        return this.video.currentTime
    }

    getMaxTime(){
        return this.video.duration
    }

    getVideoState(){
        return this.video.getAttribute("state")
    }

    setVideoState(state){
        this.video.setAttribute("state", state)
    }

    getPercentage(){
        return ( ( Video.getCurrentTime() / Video.getMaxTime() ) * 100 ).toFixed(2)
    }

    initAutoUpdateTimeBar(){
        setInterval(updateTimeBar, 100)
    }

}

function updateTimeBar(){
    this.videoTimeBar.style.width = Video.getPercentage()+"%"
}

var Video = new VideoController()