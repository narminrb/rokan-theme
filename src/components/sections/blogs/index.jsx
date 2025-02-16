import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import BlogCard from '../../shared/BlogCard';



const Blogs = () => {
  const [pageSize, setPageSize] = useState(9);
  const [pageLimit, setPageLimit] = useState(1);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.BLOGS,pageSize,pageLimit],
        queryFn: async () => await getAPiData(`blogs?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
    })

    const totalPage = Math.ceil(data?.meta?.pagination.total / pageSize);

    const renderRichText = (richText) => {
      if (!richText) return "No description available.";
  
      return richText
          .map(block => block.children.map(child => child.text).join(" "))
          .join("\n");
  };

    return (

    <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-stretch">
          {data?.data?.map((el, index) => (
            <BlogCard
              key={index}
              ImageSrc={`http://localhost:1337${el.image.url}`}
              HoverImageSrc={el.hoverimage?.url ? `http://localhost:1337${el.hoverimage.url}` : null}
              title={el.title}
              slug={el.slug}
              descc={renderRichText(el.descc)} 
              price={el.price}
            />
          ))}
        </div>

        <div>
        <ul className='flex items-center gap-1 justify-center my-10'>
      {totalPage > 0 &&
        new Array(totalPage).fill(1).map((_, index) => (
          <li
            className="bg-white text-black border w-10 h-10 rounded-[5px] flex items-center justify-center"
            key={index}
            onClick={() => setPageLimit(index + 1)}
          >
            {index + 1} 
          </li>
        ))}
    </ul>



        </div>
      </div>
      
    )
}

export default Blogs