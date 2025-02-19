import React, { useState } from 'react'
import "./style.css"
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys'
import { getAPiData } from '../../../http/api'
import { ButtonShared } from '../../shared/SharedBtn'
const SideBar = () => {
    const [pageSize, setPageSize] = useState(9);
    const [pageLimit, setPageLimit] = useState(1);
  const [category, setCategory] = useState('');
    const [term, setTerm] = useState('');
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.BLOGS, pageSize, pageLimit, category, term], 
        queryFn: async () => {
          let url = `blogs?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*&filters[title][$contains]=${term}`;
      
          if (category) {
            url += `&filters[categories][name][$contains]=${category}`;
          }
      
          return await getAPiData(url);
        }
      });
      

  const { data:categories} = useQuery({
    queryKey: [QueryKeys.CATEGORIES],
    queryFn:() => getAPiData('categories')
    
  })
  console.log(categories)
  return (
    <div className="hidden lg:block">
      <div className='filter_prods'>
        <h1>Category</h1>
       <div>
        {categories?.data && categories?.data?.map((el,index) => (
         <ButtonShared 
         onClick={() => setCategory(prev => prev === el.name ? '' : el.name)} 
         key={index} 
         variant="light" 
         title={el.name} 
       />
       
        ))}
       </div>
      </div>
      <div className='cards-container'>
        <h1>Popular Posts</h1>
            <div className="max-w-2xl mx-auto mt-4">
        <div className="flex gap-3 bg-white rounded-xl overflow-hidden  justify-start">
            <div className="relative w-26 h-26 flex-shrink-0 overflow-hidden rounded-[6px]">
                <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog1_d23d99a0-bb5b-4237-8004-c784365a26e2.jpg?v=1716719593&width=533"/>
            </div>

            <div className="flex flex-col gap-2">

                <p className="text-[16px] font-semibold">Exploring the Timeless Allure of Fashion</p>

                <p className="text-gray-500">
                May 25 2024
                </p>
            </div>
        </div>
            </div>
            <div className="max-w-2xl mx-auto mt-4">
        <div className="flex gap-3 bg-white  rounded-xl overflow-hidden justify-start">
            <div className="relative w-26 h-26 flex-shrink-0 rounded-[6px]">
                <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog2_b85e6c39-6af8-4f89-962b-cc44ed806962.jpg?v=1716719648&width=533"/>
            </div>

            <div className="flex flex-col gap-2">

                <p className="text-[16px] font-semibold">The History Of Patterned Dresses
                </p>

                <p className="text-gray-500">
                    May 25 2024
                </p>
            </div>
        </div>
            </div>
            <div className="max-w-2xl mx-auto mt-4">
        <div className="flex gap-3 bg-white rounded-xl overflow-hidden justify-start">
            <div className="relative w-26 h-26 flex-shrink-0 rounded-[6px]">
                <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="https://rokan-theme.myshopify.com/cdn/shop/articles/fs_blog11.jpg?v=1716694897&width=533"/>
            </div>

            <div className="flex flex-col gap-2">

                <p className="text-xl font-bold">Top 5 Picnic Fashion Of Girls</p>

                <p className="text-gray-500">
                    May 25 2024
                </p>
            </div>
        </div>
            </div>
      </div>
      <div className='image-container py-10'>
          <img src="https://rokan-theme.myshopify.com/cdn/shop/files/bn_sidebar_6b9646b8-9bf8-435b-83f7-5a5e2c1c851d.jpg?v=1717300356" alt="" />
      </div>
    </div>
  )
}

export default SideBar