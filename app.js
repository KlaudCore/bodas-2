document.querySelector('.scroll-indicator').addEventListener('click',()=>{
window.scrollTo({top:window.innerHeight,behavior:'smooth'});
});

const weddingDate=new Date('December 15, 2026 18:00:00');

function updateCountdown(){
const now=new Date();
const diff=weddingDate-now;

const days=Math.floor(diff/1000/60/60/24);
const hours=Math.floor(diff/1000/60/60)%24;
const minutes=Math.floor(diff/1000/60)%60;
const seconds=Math.floor(diff/1000)%60;

document.getElementById('days').textContent=days;
document.getElementById('hours').textContent=String(hours).padStart(2,'0');
document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

if('serviceWorker' in navigator){
navigator.serviceWorker.register('./service-worker.js');
}
const navItems =
document.querySelectorAll('.nav-item');

navItems.forEach(item=>{

    item.addEventListener('click',()=>{

        navItems.forEach(btn=>
            btn.classList.remove('active')
        );

        item.classList.add('active');

    });

});