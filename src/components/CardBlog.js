import { formattedDate } from "@/helpers/formatted";
import { IconCalendar } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function CardBlog ({ blog }) {
    return (
        <div className="w-full bg-white rounded-md p-8 flex flex-col-reverse justify-between lg:flex-row gap-4">
            <div className="w flex flex-col gap-2 lg:w lg:gap-8" style={{"--w": "100%", "--mxw-lg": "40%"}}>
                <span className="flex w-fit items-center gap-2 bg-n1 pv-2 ph-4 rounded-full" data-aos="fade-up"><IconCalendar/> {formattedDate(blog?.created_at)}</span>
                <h3 className="fs-3xl" data-aos="fade-up">{blog?.titulo}</h3>
                <div className="fs-sm color-gray leading-relaxed" dangerouslySetInnerHTML={{__html: blog?.summary}} data-aos="fade-up"></div>
                <Link href={`/blog/${blog?.slug}`} className="btn-decorative" data-aos="fade-up">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" fill="none" viewBox="0 0 24 12" className="Arrow_arrow__7WGgS"><path fill="currentColor" d="M0 5.113h20.644L17.577 2.04 18.804.804 24 6l-5.196 5.196-1.227-1.235 3.067-3.074H0z"></path></svg>
                    <span className="arrow"></span>
                </Link>
            </div>
            <div className="relative w h rounded-md bg-n1 lg:w lg:h" style={{"--w": "100%", "--w-lg": "40%", "--h": "400px", "--h-lg": "400px"}} data-aos="flip-right">
                <Image src={blog?.cover} alt={blog?.titulo} fill sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
        </div>
    )
}