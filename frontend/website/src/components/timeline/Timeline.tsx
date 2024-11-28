"use client"
import {data} from "jquery";
import {ImageTrail} from "@/components/imagetrail/ImageTrail";

interface TimeLineImage{
    src: string;
    alt: string;
}

interface TimeLineData{
    date: string;
    title: string;
    description: string;
    images: TimeLineImage[];
}


function TimeLineItem(props:{data:TimeLineData,index:number}){
    const duplicatedImages = [...props.data.images, ...props.data.images];

    return (
        <li>
            <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"/>
                </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">{props.data.date}</time>
                <div className="text-lg font-black">{props.data.title}</div>
                {props.data.description}
                <ImageTrail images={props.data.images} height={300} width={180}/>
            </div>

            <hr/>
        </li>
    )
}

export default function Timeline(props: {}) {
    const timeLineItems:TimeLineData[] = [
        {
            date:"2024",
            title:"Portonics Ltd. ( Full Time - Remote )\n"+ " Toptal ( Part Time - Remote ) ",
            description:"The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh\n" +
                "                        personal computer. It played a pivotal role in establishing desktop publishing as a general\n" +
                "                        office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed\n" +
                "                        in a beige case with integrated carrying handle; it came with a keyboard and single-button\n" +
                "                        mouse.",
            images:[
                {
                    src:"https://picsum.photos/400/200",
                    alt:"Picture"
                },
                {
                    src:"https://picsum.photos/400/200",
                    alt:"Picture"
                },
                {
                    src:"https://picsum.photos/400/200",
                    alt:"Picture"
                },
                {
                    src:"https://picsum.photos/400/200",
                    alt:"Picture"
                },
                {
                    src:"https://picsum.photos/400/200",
                    alt:"Picture"
                }
            ]
        }
    ]
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <TimeLineItem data={timeLineItems[0]} index={0}/>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                        and has evolved through seven distinct forms
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2001</time>
                        <div className="text-lg font-black">iPod</div>
                        The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                        designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                        8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                        million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                        over 20 years, the iPod brand is the oldest to be discontinued by Apple
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2007</time>
                        <div className="text-lg font-black">iPhone</div>
                        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                        operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                        January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                        of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                        accounts for 15.6% of global smartphone market share
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2015</time>
                        <div className="text-lg font-black">Apple Watch</div>
                        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                        tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                        iOS and other Apple products and services
                    </div>
                </li>
            </ul>
        </div>
    )
}