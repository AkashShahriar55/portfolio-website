import {ImageData} from "@/uimodel/ImageData";
import React, {ReactNode, useEffect, useRef} from "react";
import Image from "next/image";

type AutoScrollProps = {
    intervalValue?: number; // Example custom prop
    children: ReactNode; // For passing nested content
};

const AutoScrollView:React.FC<AutoScrollProps> = ({intervalValue = 20,children}   )=> {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollSpeed = 1; // Adjust speed here
        let scrollPosition = container.scrollLeft; // Start from current position
        let isPaused = false;

        const scroll = () => {
            if(isPaused) return;
            scrollPosition += scrollSpeed;

            if (scrollPosition >= container.scrollWidth / 2) {
                // Reset to the start of the first half to create a seamless loop
                scrollPosition = 0;
            }

            container.scrollLeft = scrollPosition;
        };

        const handleMouseEnter = () => {
            isPaused = true; // Pause scrolling on hover
        };

        const handleMouseLeave = () => {
            scrollPosition = container.scrollLeft; // Update scroll position on leave
            isPaused = false; // Resume scrolling on hover leave
        };

        const handleScroll = () => {
            scrollPosition = container.scrollLeft; // Update position dynamically
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("scroll", handleScroll);

        const interval = setInterval(scroll, intervalValue); // Adjust interval time for smoothness

        return () => {
            clearInterval(interval);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            container.removeEventListener("scroll", handleScroll);
        } // Clean up on unmount
    }, []);


    return (
        <div
            className="flex flex-row space-x-4 overflow-x-auto"
            ref={containerRef}
            style={{
                scrollbarWidth: 'none', /* For Firefox */
                msOverflowStyle: 'none', /* For IE and Edge */
            }}
        >
            {children}

            <style jsx>{`
                /* Hide scrollbar for webkit browsers (Chrome, Safari) */
                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}


export default AutoScrollView;