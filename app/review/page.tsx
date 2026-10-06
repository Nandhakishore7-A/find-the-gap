import ReviewPanel from '../review-panel';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Review Me — Find the Gap',description:'Explore the working demo, implementation decisions, limitations, and reviewer walkthrough for Find the Gap.'};
export default function ReviewPage(){return <main className="standalone-review"><header className="topbar"><a className="review-brand" href="/">Find the Gap</a><a href="/">Back to the app</a></header><div className="content"><ReviewPanel/></div></main>}
