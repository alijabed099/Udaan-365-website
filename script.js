const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.navlinks');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
// Reveal sections/cards as they enter the viewport. Fallback keeps content visible without IntersectionObserver.
const revealTargets=document.querySelectorAll('.section-head,.grid-2 > *, .grid-3 > *, .facility, .table-wrap, .scholarship-note, .contact-grid > *, .room-grid > *, .split > *');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});revealTargets.forEach((el,i)=>{el.classList.add('reveal-on-scroll');el.style.transitionDelay=(i%4)*65+'ms';observer.observe(el)})}else revealTargets.forEach(el=>el.classList.add('is-visible'));
// Give local page links a subtle exit motion while preserving normal open-in-new-tab behaviour.
document.querySelectorAll('a[href$=".html"]').forEach(link=>link.addEventListener('click',event=>{if(event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target==='_blank'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const target=new URL(link.href,location.href);if(target.origin!==location.origin||target.pathname===location.pathname)return;event.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=target.href,130)}));


// Static-site admission enquiry: prepare the visitor's message for WhatsApp or their email app.
const admissionForm=document.querySelector('#admission-enquiry-form');
if(admissionForm){
  admissionForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!admissionForm.reportValidity()) return;
    const data=new FormData(admissionForm);
    const name=String(data.get('name')||'').trim();
    const email=String(data.get('email')||'').trim();
    const phone=String(data.get('phone')||'').trim();
    const message=String(data.get('message')||'').trim();
    const body=`UDAAN 365 Admission Enquiry — Academic Year 2027–2028\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nEnquiry: ${message}`;
    const button=event.submitter;
    const target=button?.dataset?.send;
    const note=document.querySelector('#enquiry-form-note');
    if(target==='whatsapp'){
      const url='https://wa.me/919181037600?text='+encodeURIComponent(body);
      window.open(url,'_blank','noopener,noreferrer');
      if(note) note.textContent='WhatsApp opened with your enquiry prepared. Please review and press Send in WhatsApp.';
    }else if(target==='email'){
      const url='mailto:udaan365education@gmail.com?subject='+encodeURIComponent('UDAAN 365 Admission Enquiry 2027–2028')+'&body='+encodeURIComponent(body);
      window.location.href=url;
      if(note) note.textContent='Your email app should open with the enquiry prepared. Please review and send the email.';
    }
  });
}
