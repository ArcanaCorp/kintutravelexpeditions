'use client';

import { useDB } from "@/context/DBContext"
import CardBlog from "./CardBlog";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { usePreloadImagesOnVisible } from "@/hooks/usePreloadImagesOnVisible";

export default function GridBlogs () {

    const { blogs, loadBlogs } = useDB();
    
    const images = blogs.map(blog => blog.cover);
    
    const preloadRef = usePreloadImagesOnVisible(images);

    if (loadBlogs) {
        return (
            <div className="w-full">
                <div className="w-full bg-white rounded-md p-8 flex flex-col-reverse justify-between lg:flex-row gap-4">
                    <div className="w flex flex-col gap-2 lg:w lg:gap-8" style={{"--w": "100%", "--mxw-lg": "40%"}}>
                        <Skeleton width={'40%'} height={20} />
                        <Skeleton width={'100%'} height={20} />
                        <div>
                            <Skeleton width={'100%'} height={20} />
                            <Skeleton width={'100%'} height={20} />
                            <Skeleton width={'20%'} height={20} />
                        </div>
                        <Skeleton width={'20%'} height={20} />
                    </div>
                    <div className="relative w h rounded-md bg-n1 lg:w lg:h" style={{"--w": "100%", "--w-lg": "40%", "--h": "400px", "--h-lg": "400px"}}>
                        <Skeleton width={'100%'} height={400}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex gap-4" ref={preloadRef}>
            {blogs.map((blog) => (
                <CardBlog key={blog.id} blog={blog} />
            ))}
        </div>
    )
}