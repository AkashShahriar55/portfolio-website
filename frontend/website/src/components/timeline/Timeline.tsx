"use client"
import { data } from "jquery";
import { ImageTrail } from "@/components/imagetrail/ImageTrail";


interface Url {
    label: string;
    href: string;
}

interface TimeLineImage {
    src: string;
    alt: string;
}

interface TimeLineData {
    date: string;
    title: string;
    description: string;
    urls: Url[];
    images: TimeLineImage[];
}


function TimeLineItem(props: { data: TimeLineData, index: number }) {
    const duplicatedImages = [...props.data.images, ...props.data.images];

    const isLeft = props.index % 2 === 0;

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
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className={
                isLeft
                    ? "timeline-start mb-10 md:text-end" // left aligned styling
                    : "timeline-end mb-10 md:text-start" // right aligned styling
            }>
                <time className="font-mono italic">{props.data.date}</time>
                <div className="text-lg font-black">{props.data.title}</div>
                <div className="mt-2">
                    {props.data.urls.map((url, idx) => (
                        <a
                            key={idx}
                            href={url.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-primary mr-2"
                        >
                            {url.label || url.href}
                        </a>
                    ))}
                </div>
                {props.data.description}
            </div>

            <hr />
        </li>
    )
}

export default function Timeline(props: {}) {
    const timeLineItems: TimeLineData[] = [
        {
            date: "February,2024",
            title: "Hey Ana - A personal ai assistant",
            description: "Hey Ana is a personal ai assistant that helps you with your daily tasks. It can help you with\n" +
                "                        your daily tasks, remind you of important events, and even help you with your work. It is\n" +
                "                        designed to be easy to use and understand, and it can be customized to suit your needs.",
            urls: [
                {
                    label:"heyana.ai",
                    href: "https://heyana.ai"
                }
            ],
            images: [
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                }
            ]
        },
        {
            date: "February,2024",
            title: "Pitchle - A platform for startups and investors",

            description: "Pitchle is a pioneering social network focused on business, while also serving as a platform for promoting products through short 30 or 60-second videos" +
                "\n Pitchle facilitates finding partners, and investors, buying or transferring businesses, and promoting products with a sophisticated and contemporary touch.",
            urls: [
                {
                    label: "Pitchle - Android",
                    href: "https://play.google.com/store/apps/details?id=com.pitchle.pitchleApp"
                },
                {
                    label: "Pitchle - iOS",
                    href: "https://apps.apple.com/us/app/pitchle/id6677026938"
                }
            ],
            images: [
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                },
                {
                    src: "https://picsum.photos/400/200",
                    alt: "Picture"
                }
            ]
        }
    ]
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <TimeLineItem data={timeLineItems[0]} index={0} />
                <TimeLineItem data={timeLineItems[1]} index={1} />
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
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                        and has evolved through seven distinct forms
                    </div>
                    <hr />
                </li>
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
                                clipRule="evenodd" />
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
                    <hr />
                </li>
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
                                clipRule="evenodd" />
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
                    <hr />
                </li>
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
                                clipRule="evenodd" />
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