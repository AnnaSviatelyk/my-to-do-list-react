//Generate Random String (creating a unique ID)
export function makeid(length = 5) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}


export function getCurrentTime() {

    const now = new Date()
    const day = now.getDate()

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const curMonth = now.getMonth()
    const month = months[curMonth]
    const year = now.getFullYear()
    let hours = now.getHours()
    hours = formatTime(hours)
    let minutes = now.getMinutes()
    minutes = formatTime(minutes)

    return { day, month, year, hours, minutes }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}