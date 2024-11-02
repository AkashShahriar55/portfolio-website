"use client"
import {ReactElement, ReactNode, useEffect, useState} from "react";
require('jquery.ripples')
// @ts-ignore
import WaterEffect from "react-water-wave";
import image from '../../public/hero_image_4.jpg'
type WrapperProps = {
    children: ReactNode;
};

const WaterView:React.FC<WrapperProps>  = ({children}) => {
    const [isClient, setIsClient] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Set the isClient state to true when the component mounts
        setIsClient(true);
        // Ensure the imageUrl is a string
        setImageUrl(image.src); // Access the src property of the imported image
    }, []);

    if (!isClient) {
        // Return null or a loading state on the server side
        return null;
    }

    return(
        <WaterEffect
            id = "watereffect"
            className = "h-full w-full overflow-hidden bg-cover bg-center"
            imageUrl = {imageUrl}
            resolution ={1080}
        >
            {(methods:any):ReactNode => (children)}
        </WaterEffect>
    )
}

export default WaterView;