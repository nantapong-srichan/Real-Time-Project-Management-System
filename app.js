const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('.nav-item')];
const breadcrumb = document.querySelector('#breadcrumb');
const labels = { overview:'ภาพรวม', courses:'คอร์สของฉัน', exams:'ห้องสอบออนไลน์', schedule:'ตารางเรียนสด', analytics:'วิเคราะห์ผลสอบ', library:'เอกสารการเรียน' };
function showView(id){
  views.forEach(v=>v.classList.toggle('active-view',v.id===id));
  navItems.forEach(n=>n.classList.toggle('active',n.dataset.view===id));
  breadcrumb.textContent=labels[id]||'ภาพรวม';
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelector('#sidebar').classList.remove('open');
}
navItems.forEach(n=>n.addEventListener('click',()=>showView(n.dataset.view)));
document.querySelectorAll('[data-view-target]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.viewTarget)));
document.querySelector('#menuBtn').addEventListener('click',()=>document.querySelector('#sidebar').classList.toggle('open'));
document.querySelectorAll('.join-btn,.outline-btn').forEach(b=>b.addEventListener('click',()=>{const t=document.querySelector('#toast');t.textContent='เปิดรายละเอียดให้แล้ว ✓';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}));
document.querySelector('#startExam').addEventListener('click',()=>{const t=document.querySelector('#toast');t.textContent='เตรียมห้องสอบ Mock Exam #04...';t.classList.add('show');setTimeout(()=>{t.textContent='ห้องสอบพร้อมแล้ว — จับเวลา 120 นาที';},1200);setTimeout(()=>t.classList.remove('show'),3800)});
const days=['อา','จ','อ','พ','พฤ','ศ','ส']; const grid=document.querySelector('#calendarGrid');
days.forEach(d=>{const el=document.createElement('div');el.className='day-head';el.textContent=d;grid.appendChild(el)});
const start=new Date(2026,9,1).getDay(); for(let i=0;i<start;i++)grid.appendChild(document.createElement('div'));
for(let d=1;d<=31;d++){const el=document.createElement('div');el.textContent=d;if(d===26)el.classList.add('today-cell');if(d===26){const e=document.createElement('span');e.className='event';e.textContent='19:00 ติวอังกฤษ';el.appendChild(e)}if(d===27){const e=document.createElement('span');e.className='event orange-event';e.textContent='10:00 ตะลุยโจทย์';el.appendChild(e)}grid.appendChild(el)}
