// 12 hours =360 degree
// 1 hr = 360/12=30 degree
// h hours=30h  +m/2

// 60min= 30
// 1min=30/60=1/2
// m min=(1/2)m

// 60 min=360degree
// 1 min=360/60=6 degree
// m min =6m

// 60 sec=360degree
// 1 sec=360/60=60
// s secs=6 s

let hr=document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date=new Date();
    //getting hour,mins,secs,from data
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);//1 sec 1000 millsec