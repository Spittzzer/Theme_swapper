const sunMoonContainer = document.querySelector('.sun-moon-container')
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark')

    const CurrentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
    sunMoonContainer.style.setProperty('--rotation', CurrentRotation + 180)
})  