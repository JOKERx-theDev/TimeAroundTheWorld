let OutPut = document.getElementById('OutPut')
let body = document.querySelector('.body')
let container = document.querySelector('.container')

const upDateTimeLocal = function (){
    let nowTime = new Date
    let hour = nowTime.getHours()
    let min = nowTime.getMinutes()
    let sec = nowTime.getSeconds()
    let finalTime = hour + " " + min + " "  + sec
}

const upDateTime = function (){
    let final = OutPut.value
    let now = luxon.DateTime.now().setZone(final)
    let timeBox = document.querySelector('.timeBox').textContent = (now.toFormat("HH : mm : ss"))
    let names = OutPut.options[OutPut.selectedIndex].getAttribute("data-country");
    let countryName = document.querySelector('.countryName').textContent = names
    if(names == 'Local Time'){
        let nowTime = new Date
        let hour = nowTime.getHours()
        let min = nowTime.getMinutes()
        let sec = nowTime.getSeconds()
        let h = hour < 10 ? "0" + hour : hour
        let m = min < 10 ? "0" + min : min
        let s = sec < 10 ? "0" + sec : sec
        let finalTime = h + " " + ':' + " " + m + " " + ':' +" "  + s
        let timeBox = document.querySelector('.timeBox').textContent = finalTime
        let date = nowTime.getDate()
        let month = nowTime.getMonth()+1
        let year = nowTime.getFullYear()
        let d = date < 10 ? "0" + date : date
        if(month == 1){
            month = 'Jan'
        }else if(month == 2){
            month = 'Feb'
        }else if(month == 3){
            month = 'Mar'
        }
        else if(month == 4){
            month = 'Apr'
        }
        else if(month == 5){
            month = 'May'
        }
        else if(month == 6){
            month = 'Jun'
        }
        else if(month == 7){
            month = 'Jul'
        }
        else if(month == 8){
            month = 'August'
        }
        else if(month == 9){
            month = 'Sep'
        }
        else if(month == 10){
            month = 'Oct'
        }
        else if(month == 11){
            month = 'Nov'
        }
        else if(month == 12){
            month = 'Dec'
        }
        let dateBox = document.querySelector('.dateBox').textContent = d + " " + month + " " + year
        if(h >= 0){
            container.classList.add('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        }if(h >= 6){
            container.classList.add('containerMorning')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        }if(h >= 12){
            container.classList.add('containerAfternoon')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        }if(h >= 16){
            container.classList.add('containerEvening')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerNight')
        }if(h >= 19){
            container.classList.add('containerNight')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
        }
    }else{
        let final = OutPut.value
        let now = luxon.DateTime.now().setZone(final)
        let timeBox = document.querySelector('.timeBox').textContent = (now.toFormat("HH : mm : ss"))
        let dateBox = document.querySelector('.dateBox').textContent = (now.toFormat("dd LLL yyyy"))
        let names = OutPut.options[OutPut.selectedIndex].getAttribute("data-country");
        let container = document.querySelector('.container')
        let countryName = document.querySelector('.countryName').textContent = names
        const hourNow = parseInt(now.toFormat('H'))
        console.log(hourNow)
        if(hourNow >= 0){
            container.classList.add('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        } if(hourNow >= 6){
            container.classList.add('containerMorning')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        } if(hourNow >= 12){
            container.classList.add('containerAfternoon')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerEvening')
            container.classList.remove('containerNight')
        }if(hourNow >= 16){
            container.classList.add('containerEvening')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerNight')
        }if(hourNow >= 19){
            container.classList.add('containerNight')
            container.classList.remove('containerMidnight')
            container.classList.remove('containerMorning')
            container.classList.remove('containerAfternoon')
            container.classList.remove('containerEvening')
        }
    }
}
setInterval(function () {
    upDateTimeLocal()
}, 1000)
upDateTimeLocal()


upDateTime()
setInterval(function () {
    upDateTime()
}, 1000)
