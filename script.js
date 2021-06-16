alert('Website is currently under construction. some features are not ready yet. Cooming soon.')

const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('li.icon-box')

let selected = 'home'

function changePage(p){
    (selected != p)? selected = p : null;
    changeActiveBTN()
    changeSection()
}

function changeSection(){
    sections.forEach(sec=>{
        if(sec.id.split('-')[0] == selected){
            sec.classList.add('active')
        }
        else{
            sec.classList.remove('active')
        }
    })
}

function changeActiveBTN(){
    buttons.forEach(sec=>{
        // console.log(sec.id.split('-')[0],selected)
        if(sec.id.split('-')[0] == selected){
            sec.classList.add('active')
        }
        else{
            sec.classList.remove('active')
        }
    })
}