// video
document.addEventListener('DOMContentLoaded', () => {
    let flag = true
    const video = document.getElementById('video')
    document.getElementById('startVideo').addEventListener('click', () => {
        if (flag === true) {
            video.play()
            flag = false
        } else {
            video.pause()
            flag = true
        }
    })
    video.addEventListener('ended', () => {
        video.currentTime = 0;
    })
})