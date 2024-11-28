import {ImageData} from "@/uimodel/ImageData";
import Image from "next/image";
import AutoScrollView from "@/components/autoscrollview/AutoScrollView";

export function ImageTrail(props: { images: ImageData[] , height: number, width: number }) {

    // Duplicate the images array for seamless looping
    const duplicatedImages = [...props.images, ...props.images];

    return (
        <AutoScrollView>
            {
                duplicatedImages.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={props.width}
                        height={props.height}
                    />
                ))
            }
        </AutoScrollView>
    );
}