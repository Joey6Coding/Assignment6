const time = new Date().getHours()

if(time >= 4 && time < 12) {
    getTimeOfDay = 'Morning';
} else if(time >= 12 && time < 17) {
    getTimeOfDay = 'Afternoon';
} else if(time >= 17 || time < 4) {
    getTimeOfDay = 'Evening';
}

