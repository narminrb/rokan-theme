import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogImage, BlogImageContainer } from '../../ui/BlogCard';

const BlogCard = ({ ImageSrc, title, descc, slug}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/blog/${slug}`);
    };
    return (
        <div>
            <article
            onClick={handleNavigate}
                className="flex flex-col max-w-[400px] mb-3">
            <BlogImageContainer>
                <BlogImage src={ImageSrc}/>
            </BlogImageContainer>
            <div className="bg-white flex flex-col justify-between h-full mt-3 py-1">
            <div> 
                <div className="text-[#111111] text-sm uppercase pt-2">
                    Post by Bersky Bersky - May 25, 2024
                </div>
                <div className="text-[20px] text-[#212529] font-semibold pt-2 pb-2">
                    {title}
                </div>
                <p className="pb-4 text-[#555555] text-[15px] line-clamp-2 mb-[20px]">
                    {descc}
                </p>
            </div>
            <div className="mt-auto">
                <p className="text-[#111111] text-[18px]">Continue Reading</p>
            </div>
        </div>

                    </article>
                </div>
    )
}

export default BlogCard
