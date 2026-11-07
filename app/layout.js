import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import {Manrope} from 'next/font/google';
import {Stethoscope,Phone,MessageCircle,MapPin,Mail,ChevronRight} from 'lucide-react';
import {site,nav,services,wa} from '../lib/site';
import Header from '../components/Header';
import Reveal from '../components/Reveal';


const sans=Manrope({subsets:['latin'],variable:'--font-sans',display:'swap'});

const d='Gentle, modern dental care in Delhi: braces, clear aligners, root canal, implants, whitening and kids dentistry. 10,000+ patients. Book on WhatsApp.';

export const metadata={metadataBase:new URL(site.url),title:{default:`${site.name} | Dentist and Orthodontist in Delhi`,template:`%s | ${site.name}`},description:d,keywords:['dentist in Delhi','dentist near me','root canal near me','orthodontist north Delhi','braces west Delhi','dental implants Delhi'],openGraph:{title:site.name,description:d,type:'website',locale:'en_IN'}};


export const viewport={width:'device-width',initialScale:1};


const ld={'@context':'https://schema.org','@type':'Dentist',name:site.name,telephone:site.phone,email:site.email,url:site.url,address:{'@type':'PostalAddress',streetAddress:site.address,addressLocality:'Delhi',addressCountry:'IN'},areaServed:['North Delhi','North West Delhi','West Delhi'],openingHours:['Mo-Sa 09:00-20:30','Su 10:00-14:00']};


const fb='fab grid size-14 place-items-center rounded-full border-2 border-white text-white shadow-2xl transition hover:scale-110 dark:border-slate-800';

export default function Root({children}){
    const ga=process.env.NEXT_PUBLIC_GA_ID;
return <html lang="en-IN" suppressHydrationWarning className={sans.variable}>
<head>
<script dangerouslySetInnerHTML={{__html:"try{if(localStorage.t==='d'||(!localStorage.t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}"}}/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
</head>
<body>
<Header/><main>{children}</main><Reveal/>

<footer className="bg-slate-900 text-slate-300"><div className="sec py-14"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
<div className="flex flex-col gap-4"><span className="flex items-center gap-2 text-xl font-extrabold text-white"><span className="rounded-xl bg-blue-600 p-2"><Stethoscope size={22}/></span>Malhotra <span className="text-teal-400">Dental</span></span><p className="text-sm leading-relaxed text-slate-400">Gentle orthodontics and family dentistry in Delhi, led by {site.doctor} ({site.quals}).</p></div>
<div><h4 className="mb-4 border-b border-slate-800 pb-2 font-bold text-white">Quick navigation</h4><ul className="space-y-1 text-sm">{nav.map(([h,t])=><li key={h}><Link href={h} className="flex min-h-9 items-center gap-1.5 hover:text-teal-400"><ChevronRight size={14} className="text-blue-500"/>{t}</Link></li>)}</ul></div>
<div><h4 className="mb-4 border-b border-slate-800 pb-2 font-bold text-white">Treatments</h4><ul className="space-y-1 text-sm">{services.map(s=><li key={s.id}><Link href="/services" className="flex min-h-9 items-center hover:text-teal-400">{s.title}</Link></li>)}</ul></div>
<div><h4 className="mb-4 border-b border-slate-800 pb-2 font-bold text-white">Clinic location</h4><div className="space-y-3 text-sm"><p className="flex items-start gap-2"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-400"/>{site.address}</p><a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-teal-400"><Phone size={16} className="text-teal-400"/>{site.phoneText}</a><p className="flex items-center gap-2"><Mail size={16} className="text-teal-400"/>{site.email}</p>{site.hours.slice(0,2).map(([a,b])=><p key={a} className="text-slate-400">{a}: {b}</p>)}</div></div></div>
<div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p><p>Information on this site is general and does not replace a dental consultation. Outcomes vary by patient.</p></div></div></footer>
<div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6"><a aria-label="Call the clinic" href={`tel:${site.phone}`} className={`${fb} fab-b bg-blue-600 hover:bg-blue-700`}><Phone size={24} className="wig"/></a><a aria-label="Chat on WhatsApp" href={wa('Hi, I would like to book an appointment.')} target="_blank" rel="noopener noreferrer" className={`${fb} fab-g bg-emerald-500 hover:bg-emerald-600`}><MessageCircle size={24} className="bob"/></a></div>
{ga&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive"/><Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script></>}
</body></html>}
