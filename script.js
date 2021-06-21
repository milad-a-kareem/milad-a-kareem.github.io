alert('Website is currently under construction. some features are not ready yet. Cooming soon.')

const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('li.icon-box')

const portDetaiil = document.getElementById('port-detail')
const header = document.querySelector('header')

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
        if(sec.id.split('-')[0] == selected){
            sec.classList.add('active')
        }
        else{
            sec.classList.remove('active')
        }
    })
}

// portfolio

const portfolios = [
    {
        img_url: 'true-sys.jpg',
        title: 'True Contact System',
        project: 'Website',
        client: 'Jelkim LTD',
        tools: 'HTML, TypeScript, SCSS, Angular, Ionic, Nginx',
        link: 'https://system.truecontact.net',
    },
    {
        img_url: 'true-ios.png',
        title: 'True Contact (IOS)',
        project: 'IOS Application',
        client: 'Jelkim LTD',
        tools: 'Ionic, Angular, Xcode, Swift',
        link: 'https://apps.apple.com/us/app/true-contact-app/id1552017825',
    },
    {
        img_url: 'true-android.png',
        title: 'True Contact (Android)',
        project: 'Android Application',
        client: 'Jelkim LTD',
        tools: 'Ionic, Angular, Android Studio, Java',
        link: 'https://play.google.com/store/apps/details?id=com.truecontact.app',
    },
    {
        img_url: 'puhdasw.png',
        title: 'Car Service Website',
        project: 'Website',
        client: 'Puhdasw Finland',
        tools: 'HTML, CSS, JavaScript, PHP, Wordpress, MySQL, Nginx',
        link: 'https://puhdasw.fi',
    },
    {
        img_url: 'bandido.png',
        title: 'Barber Store Website',
        project: 'Website',
        client: 'Bandido Finland',
        tools: 'HTML, CSS, JavaScript, PHP, Wordpress, MySQL, Nginx',
        link: 'https://bandido.fi',
    },
    {
        img_url: 'school.png',
        title: 'School Financial Management',
        project: 'Desktop App',
        client: 'Dwarozh School Iraq',
        tools: 'Visual Basics, MS Access Database',
        link: '#',
    },
    {
        img_url: 'market.png',
        title: 'Stock Management',
        project: 'Desktop App',
        client: 'Noor Market Iraq',
        tools: 'Visual Basics, MS Access Database',
        link: '#',
    },
]

function renderPorts(){
    const a = document.getElementById('ports');

    portfolios.forEach( (port,i) =>{
        const imgHTML = `
        <div class="col-4" style="margin-bottom: 30px;">
            <div id="${i}" class="port-cont" onclick="browsePort(${i});">
                <div class="port-content">
                    <h3>${port.title}</h3>
                </div>
                <img class="port-img" src="./assets/images/${port.img_url}" alt="${port.client} ${port.title}" width="100%" height="100%" >
            </div>
        </div>
        `
        a.innerHTML = a.innerHTML + imgHTML
    })
}

function browsePort(index){
    const detailCont = document.getElementById('port-detail-cont')
    const a = portfolios[index]
    const myHTML = `
    <div class="port-box">
        <h2 class="title">${a.title}</h2>
        <div class="row" style="padding-block: 21px;">
            <div class="col-6" style="padding:0">
                <div class="feature">
                    <i class='fa fa-file-text-o'></i>
                    <h4 class='feature-text'>Project: <span>${a.project}</span></h4>
                </div>
            </div>
            <div class="col-6" style="padding:0">
                <div class="feature">
                    <i class='fa fa-user-o'></i>
                    <h4 class='feature-text'>Client: <span>${a.client}</span></h4>
                </div>
            </div>
            <div class="col-6" style="padding:0">
                <div class="feature">
                    <i class='fa fa-file-code-o'></i>
                    <h4 class='feature-text'>Tools: <span>${a.tools}</span></h4>
                </div>
            </div>
            <div class="col-6" style="padding:0">
                <div class="feature">
                    <i class='fa fa-external-link'></i>
                    <h4 class='feature-text'>Visit: 
                        <span>
                            <a style='color:#ffb400' href="${a.link}" target="_blank">Link</a>
                        </span>
                    </h4>
                </div>
            </div>
            
        </div>
        <img class="thumbnail" src="./assets/images/${a.img_url}" alt="true contact app">
    </div> 
        `
    detailCont.innerHTML =  myHTML
    portDetaiil.classList.remove('close')
    header.style.visibility = 'hidden'
}

renderPorts()


function closeDetails(){
    
    portDetaiil.classList.add('close')
    header.style.visibility = 'visible'
}