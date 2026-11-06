import {site,nav} from '../lib/site';
export default function sitemap(){return nav.map(([h])=>({url:site.url+(h==='/'?'':h),lastModified:new Date()}))}
