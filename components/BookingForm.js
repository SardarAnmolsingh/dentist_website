'use client';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { services, wa } from '../lib/site';
export default function BookingForm(){
    
const [done,setDone]=useState(false);
function submit(e){
    e.preventDefault();
    const d=Object.fromEntries(new FormData(e.target));
    const u=process.env.NEXT_PUBLIC_SHEET_URL;
    console.log(u)
    if(u)fetch(u,{method:'POST',mode:'no-cors',body:JSON.stringify(d)}).catch(()=>{});
    window.open(wa(`Hi, I am ${d.name}. I would like to book: ${d.service}. Phone: ${d.phone}. ${d.message||''}`),'_blank','noopener');setDone(true)
}




return <form onSubmit={submit} className="space-y-4">
<div data-rv className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="bn" className="lbl">Full name</label><input id="bn" name="name" required autoComplete="name" placeholder="e.g. Rahul Sharma" className="input"/></div><div><label htmlFor="bp" className="lbl">Phone number</label><input id="bp" name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. +91 98765 43210" className="input"/></div></div>
<div data-rv><label htmlFor="bs" className="lbl">Treatment or concern</label><select id="bs" name="service" required className="input">{services.map(s=><option key={s.id}>{s.title}</option>)}<option>General consultation</option><option>Emergency toothache</option></select></div>
<div data-rv><label htmlFor="bm" className="lbl">Additional notes (optional)</label><textarea id="bm" name="message" rows={3} placeholder="Describe your concern or preferred day..." className="input"/></div>
<button data-rv className="btn-p w-full">Send details on WhatsApp</button>
<p role="status" className={`flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400${done?' pop':''}`}>{done&&<><CheckCircle2 size={18} className="check"/>Done. WhatsApp has opened with your details. We will confirm your slot shortly.</>}</p></form>}
