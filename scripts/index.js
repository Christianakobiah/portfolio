
// Declare variable to store navbar element
const navElement = document.getElementById('navbar')
// Detect scroll event on document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 80) {
        // Change navbar bg to blue
        navElement.style.backgroundColor = '#0779E4';
    } else {
        // Change navbar bg to transparent
        navElement.style.backgroundColor = 'transparent';
    }
})