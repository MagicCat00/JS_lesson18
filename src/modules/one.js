const one = () => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
 
    const countTimer = (deadline) => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        
        timerHours.textContent = hours
        timerMinutes.textContent = minutes
        timerSeconds.textContent = seconds
    }
    
    //countTimer('22 february 2022')
    setInterval(countTimer, 1000, '22 february 2022')
    
}

export default one