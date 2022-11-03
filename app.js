let start = document.querySelectorAll('.button')
let hour = document.querySelector('.hour')
let second = document.querySelector('.second')
let minute = document.querySelector('.minute')
let seconds = 0
let interval = null

function timers() {
    seconds += 1

    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let sec = seconds % 60

    if(hrs < 10) {
        hour.innerText = `0${hrs}`
    }else {
        hour.innerText = hrs
    }

    if(mins < 10) {
        minute.innerText = `0${mins}`
    }else {
        minute.innerText = mins
    }

    if(sec < 10) {
        second.innerText = `0${sec}`
    }else {
        second.innerText = `${sec}`
    }
}

start.forEach((arr,index) => {
    start[index].addEventListener('click', function() {
        if(index === 0) {
            if(interval) {
                return
            }
            interval = setInterval(timers,1000)
        }else if(index === 2) {
            clearInterval(interval)
            interval = null
        }else {
            clearInterval(interval)
            interval = null
            seconds = 0
            hour.innerText = `00`
            minute.innerText = `00`
            second.innerText = `00`
        }
    })
})