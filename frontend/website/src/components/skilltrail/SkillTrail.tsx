"use client"
import Image from "next/image";
import kotlin from "../../icons/kotlin-svgrepo-com.svg"
import java from "../../icons/java-svgrepo-com.svg"
import android from "../../icons/android-svgrepo-com.svg"
import jetpack from "../../icons/jetpackcompose.svg"
import ios from "../../icons/ios-svgrepo-com.svg"
import swift from "../../icons/swift-svgrepo-com.svg"
import flutter from "../../icons/flutter-svgrepo-com.svg"
import tensorflow from "../../icons/tensorflow-svgrepo-com.svg"
import aws from "../../icons/aws-svgrepo-com.svg"
import javascript from "../../icons/javascript-svgrepo-com.svg"
import nextjs from "../../icons/nextdotjs.svg"
import reactjs from "../../icons/react-svgrepo-com.svg"
import reactnative from "../../icons/react-svgrepo-com (1).svg"
import node from "../../icons/nodejs-logo-svgrepo-com.svg"
import nestjs from "../../icons/nestjs-svgrepo-com.svg"
import express from "../../icons/express.svg"
import docker from "../../icons/docker-svgrepo-com.svg"
import unreal from "../../icons/unrealengine.svg"
import unity from "../../icons/unity.svg"
import androidStudio from "../../icons/androidstudio.svg"
import amplify from "../../icons/awsamplify.svg"
import netlify from "../../icons/netlify.svg"
import gcp from "../../icons/gcp-svgrepo-com.svg"
import googleAnalytics from "../../icons/google-analytics-svgrepo-com.svg"
import firebase from "../../icons/firebase-svgrepo-com.svg"
import admob from "../../icons/google-admob-svgrepo-com.svg"
import figma from "../../icons/figma-svgrepo-com.svg"
import {ImageTrail} from "@/components/imagetrail/ImageTrail";


interface ImageData{
    src: string;
    alt: string;
}



export default function SkillTrail(){
    const images = [
        { src: kotlin, alt: "Image 1" },
        { src: java, alt: "Image 2" },
        { src: android, alt: "Image 3" },
        { src: jetpack, alt: "Image 1" },
        { src: ios, alt: "Image 2" },
        { src: swift, alt: "Image 3" },
        { src: flutter, alt: "Image 1" },
        { src: tensorflow, alt: "Image 2" },
        { src: aws, alt: "Image 3" },
        { src: javascript, alt: "Image 1" },
        { src: nextjs, alt: "Image 2" },
        { src: reactjs, alt: "Image 3" },
        { src: reactnative, alt: "Image 1" },
        { src: node, alt: "Image 2" },
        { src: nestjs, alt: "Image 3" },
        { src: express, alt: "Image 3" },
        { src: docker, alt: "Image 2" },
        { src: unreal, alt: "Image 3" },
        { src: unity, alt: "Image 1" },
        { src: androidStudio, alt: "Image 2" },
        { src: amplify, alt: "Image 3" },
        { src: netlify, alt: "Image 3" },
        { src: gcp, alt: "Image 1" },
        { src: googleAnalytics, alt: "Image 2" },
        { src: firebase, alt: "Image 3" },
        { src: admob, alt: "Image 3" },
        { src: figma, alt: "Image 2" },
    ];


    return (
        <div>
            <p className={"w-full text-center bg-red-700"}>Tools I play with</p>
            <br/>
            <ImageTrail images={images} width={50} height={50}/>
            <br/>
        </div>

    );
}