import { results, gallery } from '../../lib/site';
import { Head } from '../../components/ui';
import GalleryClient from '../../components/GalleryClient';


export const metadata = { title: 'Results and Clinic Gallery', description: 'See smile transformations and take a look inside our Delhi dental clinic.' };


export default function P() { 
    return <div className="sec py-12 md:py-16">
        <Head as="h1" eyebrow="Proof of quality" title="Patient results and clinic gallery" sub="Sample images and cases. Results vary from patient to patient." /><GalleryClient results={results} gallery={gallery} /></div> 
}
