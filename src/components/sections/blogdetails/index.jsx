import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getAPiData } from '../../../http/api'; 
import "./style.css"
import DetailSwiper from '../detailSwiper';

const BlogDetails = () => {
    const { slug } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const result = await getAPiData(`blogs?filters[slug]=${slug}&populate=*`); 
            setBlog(result.data[0]);  
        };

        fetchBlogDetail();
    }, [slug]);

    if (!blog) return <div>Loading...</div>;

    const renderRichText = (richText) => {
        if (!richText) return "No description available.";
    
        return richText
            .map(block => block.children.map(child => child.text).join(" "))
            .join("\n");
    };

    return (
        <div className="container mx-auto my-10">
            <div className='boxes'>
            <button className='btn'>News</button>
                <h1>{blog.title}</h1>
                <div className="text-[#111111] text-[15px] font-semibold  uppercase">Bersky Bersky-May 25 2024</div>
            </div>
            <div className='imageContainer'>
            <img src={`http://localhost:1337${blog.image.url}`} alt={blog.title} />
            </div>
          <div className='flex flex-col justify-center items-center mx-auto py-10'>
          <div className='max-w-[960px]'>
            <p className='text-[18px] text-[#555555]'>{renderRichText(blog.descc)}</p>
            <p className='text-[18px] text-[#555555] my-5'>
            Umino story began in 1970 with the snow-covered landscape of Montreal as a backdrop. Louis Grenier, a young man whose family worked in the textile industry, was looking to develop technology that could brave the harshest winter conditions. Quickly, his coats gained popularity and became local legend. Unimo strength at that time remains the guarantee of its success today: Living own first saying saw second open third.
            </p>
            <div>
                <h2 className='text-[#111111] text-[24px]'>“ We are content to rest in peace, when the whole universe is changing every second. Take the opportunity because opportunities don't come twice ”</h2>
                <p className='text-[14px] text-[#666666] my-5 font-semibold'>
                MICHAEL ANTHONY</p>
            </div>
            <p className='text-[18px] text-[#555555] my-5'>
            The Montreal-based company has been located on Rachel Street since the very beginning. It’s at this location in the heart of the Plateau-Mont-Royal where all Umino coats are crafted using a meticulous artisanal manufacturing process. Directly inspired by the climate in which they live, the artisans work with care to create warm, heavy-duty coats. Each model is designed to perform a specific function while still staying fashionable. No detail is left to chance! With a lifetime guarantee, Umino creations come with the promise of braving many winters, even the most difficult ones. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
                <div className='max-w-full object-cover'>
                    <img src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/blog-detail.png?v=1702030764" alt="" />
                </div>
                <div className='max-w-full object-cover'>
                    <img src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/blog-detail-2.png?v=1702030774" alt="" />
                </div>
            </div>
            <p className='text-[18px] text-[#555555] my-5  break-words whitespace-normal'>
            Limited edition coats inspired by its iconic models. These robust parkas with vintage charm demonstrate a unique mix of yesterday's cult style with today's textile technology. Their Thermo+ synthetic insulation is known for its exceptional thermal properties and its performance in wet conditions. But the shore people would change their minds about it at sea, on a long voyage.
            </p>
            <p className='text-[18px] text-[#555555] my-5'>
            They are equipped with a breathable and waterproof membrane that’s resistant to weather and wind. The men’s Toundra model stands out for its four pockets in the front and elastic cuffs. The Typha style for women offers a loose-fitting silhouette that cinches at the waist. In the both cases, we absolutely love the cozy, sherpa-lined collar with a hidden hood, a detail that’s practical and trendy.
            </p>
            <h1 className='text-[#111111] text-[20px] uppercase font-medium'>Related articles</h1>
            <DetailSwiper/>

            
            </div>

          </div>
        </div>
    );
};

export default BlogDetails;
