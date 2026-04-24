// alert('Website is currently under construction. some features are not ready yet. Cooming soon.')
let myStorage = window.localStorage
const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('li.icon-box')

const portDetaiil = document.getElementById('port-detail')
const header = document.querySelector('header')

let selected = 'home'

if (myStorage.getItem('selected')){
    selected = myStorage.getItem('selected')
    changeActiveBTN()
    changeSection()
}
else{
    myStorage.setItem('selected', 'home')
}

function changePage(p){
    (selected != p)? selected = p : null;
    changeActiveBTN()
    changeSection()
}

function changeSection(){
    sections.forEach(sec=>{
        if(sec.id.split('-')[0] == selected){
            sec.classList.add('active')
            myStorage.setItem('selected', selected)
        }
        else{
            sec.classList.remove('active')
        }
    })
    window.scrollTo(0, 0);
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
        img_url: 'school.png',
        title: 'Injaz Platform',
        project: 'Government Web Platform',
        client: 'Iraqi Government (TTech)',
        tools: 'Angular, TypeScript, Material, Jira Scrum, Storybook, Jest, Cypress',
        link: '#',
    },
    {
        img_url: 'school.png',
        title: 'Naftcom',
        project: 'Oil & Gas Coupon Management',
        client: 'Iraqi Government (TTech)',
        tools: 'Angular, TypeScript, Clean Architecture, Storybook, Jest',
        link: '#',
    },
    {
        img_url: 'school.png',
        title: 'Health Insurance System',
        project: 'Government Web Platform',
        client: 'Iraqi Government (TTech)',
        tools: 'Angular, TypeScript, Material, Google Maps, Recaptcha',
        link: '#',
    },
    {
        img_url: 'market.png',
        title: 'FIB Corporate',
        project: 'Corporate Banking Platform',
        client: 'First Iraqi Bank (Gateway ICT)',
        tools: 'React, TypeScript, Vite, HeadlessUI, react-hook-form, yup, Mapbox',
        link: 'https://fib.iq',
    },
    {
        img_url: 'market.png',
        title: 'FIB Business',
        project: 'Business Banking Platform',
        client: 'First Iraqi Bank (Gateway ICT)',
        tools: 'React, TypeScript, Vite, HeadlessUI, react-table, date-fns',
        link: 'https://fib.iq',
    },
    {
        img_url: 'market.png',
        title: 'FIB Backoffice & Billing',
        project: 'Internal Banking Tools',
        client: 'First Iraqi Bank (Gateway ICT)',
        tools: 'React, TypeScript, NodeJS, Laravel Echo, Pusher, Modular CSS',
        link: '#',
    },
    {
        img_url: 'kingsverhoomo.png',
        title: 'FIB Public Website',
        project: 'Marketing Website',
        client: 'First Iraqi Bank (Gateway ICT)',
        tools: 'React, TypeScript, Vite, Modular CSS',
        link: 'https://fib.iq',
    },
    {
        img_url: 'todo.png',
        title: 'KaizenUI & FIB-UI',
        project: 'Component Libraries',
        client: 'Gateway ICT',
        tools: 'React, TypeScript, Storybook, Modular CSS, ESLint, Prettier',
        link: '#',
    },
    {
        img_url: 'todo.png',
        title: 'ClubHub & Affinitus',
        project: 'Web Portals',
        client: 'C-Sunshine, Bratislava',
        tools: 'Vue, React, NodeJS, MongoDB, Redux Toolkit, MUI, Styled-components',
        link: '#',
    },
    {
        img_url: 'school.png',
        title: 'QDental Clinic Platform',
        project: 'Clinic Management Web App',
        client: 'QDental Clinic',
        tools: 'Next.js, React, NodeJS, MongoDB, TailwindCSS, Redux Toolkit, Jest',
        link: '#',
    },
    {
        img_url: 'kingsverhoomo.png',
        title: "King's Verhoomo Website",
        project: 'Business Website',
        client: "King's Verhoomo Finland",
        tools: 'HTML, CSS, JavaScript, PHP, Wordpress, MySQL, Elementor',
        link: 'https://kingsverhoomo.fi',
    },
    {
        img_url: 'golden-future-school.png',
        title: 'G. F. S. Website',
        project: 'School Website',
        client: 'Golden Futur School',
        tools: 'HTML, CSS, JavaScript, PHP, Wordpress, MySQL, Elementor',
        link: 'https://goldenfuture.school',
    },
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
    {
        img_url: 'todo.png',
        title: 'MyToDo (React)',
        project: 'React Web App',
        client: 'World',
        tools: 'JS, CSS, React, LocalStorage',
        link: 'https://miladkareem.com/react-todo',
    },
    {
        img_url: 'todo.png',
        title: 'MyToDo (Angular)',
        project: 'Angular Web App',
        client: 'World',
        tools: 'TS, CSS, Angular, LocalStorage',
        link: 'https://miladkareem.com/angular-todo',
    },
    {
        img_url: 'school.png',
        title: 'Financial Management App',
        project: 'Personal Web App',
        client: 'Personal',
        tools: 'Next.js, React, TailwindCSS, MongoDB',
        link: '#',
    },
    {
        img_url: 'true-ios.png',
        title: 'Contacts Manager',
        project: 'Cross-Platform Mobile App',
        client: 'Personal',
        tools: 'Flutter, React Native, Ionic, Dart, TypeScript',
        link: '#',
    },
    {
        img_url: 'market.png',
        title: 'POS System',
        project: 'Desktop App',
        client: 'Personal',
        tools: 'C#, MS Access',
        link: '#',
    },
    {
        img_url: 'school.png',
        title: 'MHS IoT Heating',
        project: 'IoT System',
        client: 'Personal',
        tools: 'Raspberry Pi, Python, IoT',
        link: '#',
    },
    {
        img_url: 'todo.png',
        title: 'Twitter Clone',
        project: 'Bootcamp Web App',
        client: 'Rwanga WeCode Bootcamp',
        tools: 'React, Next.js, Firebase, TailwindCSS, Redux Toolkit',
        link: '#',
    },
    {
        img_url: 'todo.png',
        title: 'Money Manager',
        project: 'Bootcamp Web App',
        client: 'Rwanga WeCode Bootcamp',
        tools: 'React, Redux Toolkit, TypeScript, Styled-components',
        link: '#',
    },
    {
        img_url: 'todo.png',
        title: 'Kurdish Calendar',
        project: 'Bootcamp Web App',
        client: 'Rwanga WeCode Bootcamp',
        tools: 'React, TypeScript, Modular CSS',
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