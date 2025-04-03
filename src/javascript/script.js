$(document).ready(function(){
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x')
    })
})

// dark mode // 

let darkMode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('switch-theme')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkMode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode')
darkMode !== "active" ? enableDarkmode () : disableDarkmode ()
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------//


