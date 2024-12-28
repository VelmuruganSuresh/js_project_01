function startCustomCountdown() {
    const hoursInput = document.getElementById('hours').value ||0 ;
    const minutesInput = document.getElementById('minutes').value || 0;
    const secondsInput = document.getElementById('seconds').value || 0;

    let totalSeconds = Number(hoursInput) * 3600 + Number(minutesInput) * 60 + Number(secondsInput);
    const greetingMessage = "HAPPY NEW YEAR 2025";
    const timerElement = document.getElementById('timer');
    const greetingElement = document.getElementById('greeting');

    if (totalSeconds <= 0) {
        alert("Please set a valid time greater than 0.");
        return;
    }
    const interval = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timerElement.textContent = formattedTime;

        totalSeconds--;

       
        if (totalSeconds < 0) {
            clearInterval(interval);
            greetingElement.textContent = `${greetingMessage}`;
        }
    }, 1000);
}
