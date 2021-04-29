const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
    removeAtiveClass()
    panel.classList.add('active')
    })
})


function removeAtiveClass(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}