import { Award, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CTA } from '../../components/Blocks';
import { Head, Icon } from '../../components/ui';
import { awards, gallery, img, site, team, tech, values } from '../../lib/site';



export const metadata={title:'About Dr. Ravi and Our Clinic',description:'Meet Dr. Ravi, BDS, MDS Orthodontics, with 15 years of experience and 10,000+ patients treated, and see our team and technology.'};
const mute='text-slate-600 dark:text-slate-400';


export default function P(){
    
    return <>

<section className="border-b border-slate-200 bg-blue-50/50 py-14 dark:border-slate-800 dark:bg-slate-900/60">
<div className="sec max-w-3xl text-center"><span className="eyebrow">About Malhotra Dental Clinic</span>
<h1 className="mb-4 mt-2 text-3xl font-black tracking-tight sm:text-5xl">Gentle, precise dentistry in North Delhi</h1>
<p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">We started with one aim: take the anxiety out of dental visits through modern technology, kind communication and transparent care for every family member.</p>
</div>
</section>


<section className="sec py-12 md:py-16">
    <div className="card p-6 shadow-xl sm:p-12"><div className="grid items-center gap-10 lg:grid-cols-12">


<div className="relative lg:col-span-5"><div className="pic mx-auto max-w-sm rounded-2xl shadow-xl lg:max-w-none"><img src={img('doctor')} alt={`${site.doctor} portrait (sample image)`} width="600" height="800" loading="lazy" className="aspect-[4/5] w-full object-cover"/></div>
<span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">{site.quals}</span>
</div>

<div className="flex flex-col gap-4 lg:col-span-7">
<span className="eyebrow">Founder profile and mission</span>
<h2 className="text-3xl font-extrabold">Meet {site.doctor} ({site.quals})</h2>

<p className={`leading-relaxed ${mute}`}>With over 15 years of clinical practice and more than 10,000 patients treated, {site.doctor} is known for careful orthodontic planning and a gentle chairside manner. (Replace this with the dentist’s own story.)</p>

<p className={`leading-relaxed ${mute}`}>“Nobody should avoid essential dental care out of fear. We use modern technology and a gentle touch so every visit feels calm.”</p>



<div className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-4 dark:border-slate-800 sm:grid-cols-2">{[[Award,'IDA member','Indian Dental Association (sample)'],[Sparkles,'Aligner specialist','Certified provider (sample)']].map(([I,a,b])=><div key={a} className="flex items-center gap-3"><span className="icon !p-2.5"><I size={20}/></span><div><h3 className="text-sm font-bold">{a}</h3><p className="text-xs text-slate-500">{b}</p></div></div>)}</div></div></div></div>
</section>


<section className="sec pb-12 md:pb-16"><Head eyebrow="Core principles" title="Our clinic philosophy"/>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{values.map(([i,t,d])=><div key={t} className="card lift flex flex-col gap-3 p-6"><span className="icon !p-3"><Icon name={i} size={24}/></span><h3 className="text-lg font-bold">{t}</h3><p className={`text-sm leading-relaxed ${mute}`}>{d}</p></div>)}</div>
</section>


<section className="bg-slate-100/60 py-14 dark:bg-slate-900/40 md:py-16">
<div className="sec"><Head eyebrow="Modern technology" title="Equipment we use" sub="Modern hardware for precise diagnosis, comfort and faster healing."/><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{tech.map(([i,t,d])=><div key={t} className="card lift p-6"><span className="icon mb-4 !p-3"><Icon name={i} size={24}/></span><h3 className="mb-2 text-base font-bold">{t}</h3><p className={`text-xs leading-relaxed ${mute}`}>{d}</p></div>)}</div></div>
</section>


<section className="sec py-14 md:py-16">
    <Head eyebrow="Our specialists" title="Meet our expert team" sub="Sample team profiles. Replace with your real team."/><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{team.map(([n,r,q,b,sp,badge])=><div key={n} className="card lift flex flex-col justify-between p-6"><div><div className="pic mb-4 grid h-40 place-items-center rounded-2xl bg-gradient-to-tr from-slate-700 to-blue-600 text-4xl font-black text-white" aria-hidden>{n.replace('Dr. ','').split(' ').map(w=>w[0]).join('')}</div><span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-extrabold uppercase text-blue-700 dark:bg-blue-950 dark:text-blue-300">{badge}</span><h3 className="mt-2 text-xl font-bold">{n}</h3><p className="text-xs font-semibold text-teal-600 dark:text-teal-400">{r}</p><p className="mb-3 text-[11px] text-slate-400">{q}</p><p className={`mb-4 text-xs leading-relaxed ${mute}`}>{b}</p></div><div className="flex flex-wrap gap-1 border-t border-slate-200 pt-3 dark:border-slate-800">{sp.map(x=><span key={x} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 dark:bg-slate-800 dark:text-slate-300">{x}</span>)}</div></div>)}</div>
</section>


<section className="sec pb-12">
    <div className="rounded-3xl border border-blue-200 bg-blue-50/70 p-6 text-center dark:border-slate-800 dark:bg-slate-900 sm:p-8"><h2 className="mb-6 text-xl font-bold">Recognitions and accreditations</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{awards.map(([i,a,b])=><div key={a} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"><Icon name={i} size={32} className="mx-auto mb-2 text-amber-500"/><h3 className="text-sm font-bold">{a}</h3><p className="text-xs text-slate-500">{b}</p></div>)}</div></div>
</section>

<section className="sec pb-6">
    <div className="mb-8 flex items-end justify-between"><div><span className="eyebrow">Virtual tour</span><h2 className="mt-1 text-2xl font-extrabold">Our clinic environment</h2></div><Link href="/gallery" className="inline-flex min-h-11 items-center text-sm font-bold text-blue-600 hover:underline dark:text-teal-400">Full gallery</Link></div><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{gallery.slice(0,3).map(g=><div key={g[0]} className="pic rounded-2xl"><img src={img(g[0])} alt={`${g[1]} (sample image)`} width="800" height="600" loading="lazy" className="aspect-[4/3] w-full object-cover"/></div>)}</div>
    
</section>


<CTA/>
</>
}
