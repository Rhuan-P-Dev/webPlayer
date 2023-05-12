
export class VideoController{

    video = document.getElementById("video")
    videoTimeBar = document.getElementById("videoTimeBar")
    videoTimeBox = document.getElementById("videoTimeBox")

    setSrc(src){
        this.video.setAttribute("Src",src)
    }

    play(){
        this.video.play()
    } 
    
    pause(){
        this.video.pause()
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

    setPercentage(percentage){
        Video.setCurrentTime(Video.getMaxTime() * percentage)
    }

    initAutoUpdateTimeBar(){
        setInterval(updateTimeBar, 100)
    }

    getCurrentVolume(){
        return this.video.volume
    }

    setCurrentVolume(volume){
        this.video.volume = volume
    }

    volumeUp(){
        Video.setCurrentVolume(Video.getCurrentVolume() + 0.05)
    }

    volumeDown(){
        Video.setCurrentVolume(Video.getCurrentVolume() - 0.05)
    }

    switchPlayState(){
        if(Video.getVideoState() == "paused"){
            Video.play()
            Video.setVideoState("play")
        }else{
            Video.pause()
            Video.setVideoState("paused")
        }
    }

    changeVideo(url){
        Video.setSrc(url)
        Video.setVideoState("paused")
        Video.setCurrentVolume(0.05)
    }

    addVideoTimeBarTrigger(){
        this.videoTimeBox.addEventListener("click",function(e){
            Video.setPercentage( ( e["x"] - videoTimeBox.getBoundingClientRect()["x"] ) / videoTimeBox.getBoundingClientRect()["width"] )
        })
    }

}

function updateTimeBar(){
    this.videoTimeBar.style.width = Video.getPercentage()+"%"
}

var Video = new VideoController()