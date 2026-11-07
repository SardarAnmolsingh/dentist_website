'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
export default function Reveal(){const p=usePathname();
    
useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('main .card:not(.pop):not(.nv), main [data-rv]').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight*.9)return;
const i=[...el.parentElement.children].indexOf(el);el.style.setProperty('--d',Math.min(i,4)*90+'ms');el.classList.add('rv');io.observe(el)});
return()=>io.disconnect()},[p]);return null}
